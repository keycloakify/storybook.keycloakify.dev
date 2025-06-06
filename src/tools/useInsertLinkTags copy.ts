/* eslint-disable */

import { useReducer, useEffect } from "react";
import { useExclusiveAppInstanceEffect } from "./useExclusiveAppInstanceEffect";
import { createStatefulObservable } from "./StatefulObservable";
import { useConst } from "./useConst";

/**
 * NOTE: The component that use this hook can only be mounded once!
 * And can't rerender with different hrefs.
 * If it's mounted again the page will be reloaded.
 * This simulates the behavior of a server rendered page that imports css stylesheet in the head.
 */
export function useInsertLinkTags(params: {
    componentOrHookName: string;
    hrefs: string[];
}) {
    const { hrefs, componentOrHookName } = params;

    const $isEffectCalled = useConst(() =>
        createStatefulObservable(() => false)
    );

    useExclusiveAppInstanceEffect({
        isEnabled: hrefs.length !== 0,
        componentOrHookName,
        effect: ()=> {
            $isEffectCalled.current = true;
        }
    });

    const [areAllStyleSheetsLoaded, setAllStyleSheetsLoaded] = useReducer(
        () => true,
        false
    );

    useEffect(()=> {

        let isActive = true;




        return () => {
            isActive = false;
        };

    }, []);

    const onFirsMontCallback = () => {

        let isActive = true;

        (async () => {
            let lastMountedHtmlElement: HTMLLinkElement | undefined = undefined;

            const prs: Promise<void>[] = [];

            for (const href of hrefs) {
                const htmlElement = document.createElement("link");

                prs.push(
                    new Promise<void>(resolve =>
                        htmlElement.addEventListener("load", () => resolve())
                    )
                );

                htmlElement.rel = "stylesheet";

                htmlElement.href = href;

                if (lastMountedHtmlElement !== undefined) {
                    lastMountedHtmlElement.insertAdjacentElement("afterend", htmlElement);
                } else {
                    document.head.prepend(htmlElement);
                }

                lastMountedHtmlElement = htmlElement;
            }

            await Promise.all(prs);
        })().then(() => {
            if (!isActive) {
                return;
            }

            setAllStyleSheetsLoaded();
        });

        return () => {
            isActive = false;
        };
    };

    useOnFistMount(hrefs.length === 0 ? undefined : onFirsMontCallback);

    if( hrefs.length === 0 ){
        return { areAllStyleSheetsLoaded: true };
    }

    return { areAllStyleSheetsLoaded };
}
