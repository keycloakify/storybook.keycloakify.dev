/* eslint-disable */

import { Suspense, } from "react";
// import { lazy } from "react";
import { assert, type Equals, is } from "tsafe/assert";
import { useKcContext } from "../KcContext";
import { type PageId as PageId_builtin } from "@keycloakify/keycloak-login-ui/KcContext";

//const Page_otp_form = lazy(() => import("./otp-form"));

export function ExtensionsPageIndex() {
    const { kcContext } = useKcContext();

    assert(!is<PageId_builtin>(kcContext.pageId));

    return (
        <Suspense>
            {(() => {
                const { pageId } = kcContext;
                switch (pageId) {
                    /*
                    case "otp-form.ftl":
                        return <Page_otp_form />;
                    */
                    default:
                        assert<Equals<typeof pageId, never>>;
                        throw new Error();
                }


            })()}
        </Suspense>
    );
}
