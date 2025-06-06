import { useOnFistMount } from "./useOnFirstMount";

// NOTE: This context has to be shared in storybook between the login
// and potential multi page account theme.
const GLOBAL_CONTEXT_KEY = "__keycloakify.useExclusiveAppInstanceEffect.globalContext";

declare global {
    interface Window {
        [GLOBAL_CONTEXT_KEY]: {
            alreadyMountedComponentOrHookNames: Set<string>;
        };
    }
}

window[GLOBAL_CONTEXT_KEY] ??= {
    alreadyMountedComponentOrHookNames: new Set()
};

const globalContext = window[GLOBAL_CONTEXT_KEY];

const { alreadyMountedComponentOrHookNames } = globalContext;

export function useExclusiveAppInstanceEffect(params: {
    isEnabled?: boolean;
    componentOrHookName: string;
    effect: () => void;
}) {
    const { componentOrHookName, effect, isEnabled = true } = params;

    useOnFistMount({
        isEnabled,
        effect: () => {
            const isAlreadyMounted =
                alreadyMountedComponentOrHookNames.has(componentOrHookName);

            if (isAlreadyMounted) {
                reload: {
                    if (
                        new URL(window.location.href).searchParams.get("viewMode") ===
                        "docs"
                    ) {
                        // NOTE: Special case for Storybook, we want to avoid infinite reload loop.
                        break reload;
                    }
                    window.location.reload();
                }
                return;
            }

            alreadyMountedComponentOrHookNames.add(componentOrHookName);

            effect();

        }
    });
}
