/**
 * This file has been claimed for ownership from @keycloakify/keycloak-login-ui version 250004.0.26.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/login-passkeys-conditional-authenticate/useScript.tsx" --revert
 */

/* eslint-disable */

import { useEffect } from "react";
import { assert } from "tsafe/assert";
import { useInsertScriptTags } from "@keycloakify/keycloak-login-ui/tools/useInsertScriptTags";
import { waitForElementMountedOnDom } from "@keycloakify/keycloak-login-ui/tools/waitForElementMountedOnDom";
import { BASE_URL } from "@keycloakify/keycloak-login-ui/import.meta.env.BASE_URL";
import { useI18n } from "../../i18n";
import { useKcContext } from "../../KcContext";

export function useScript(params: { authButtonId: string }) {
    const { authButtonId } = params;

    const { kcContext } = useKcContext();
    assert(kcContext.pageId === "login-passkeys-conditional-authenticate.ftl");

    const { msgStr, isFetchingTranslations } = useI18n();

    const { insertScriptTags } = useInsertScriptTags({
        componentOrHookName: "LoginRecoveryAuthnCodeConfig",
        scriptTags: [
            {
                type: "module",
                textContent: () => `
                    import { authenticateByWebAuthn } from "${BASE_URL}keycloak-theme/login/js/webauthnAuthenticate.js";
                    import { initAuthenticate } from "${BASE_URL}keycloak-theme/login/js/passkeysConditionalAuth.js";

                    const authButton = document.getElementById("${authButtonId}");
                    const input = {
                        isUserIdentified : ${kcContext.isUserIdentified},
                        challenge : ${JSON.stringify(kcContext.challenge)},
                        userVerification : ${JSON.stringify(kcContext.userVerification)},
                        rpId : ${JSON.stringify(kcContext.rpId)},
                        createTimeout : ${kcContext.createTimeout}
                    };
                    authButton.addEventListener("click", () => {
                        authenticateByWebAuthn({
                            ...input,
                            errmsg : ${JSON.stringify(msgStr("webauthn-unsupported-browser-text"))}
                        });
                    });

                    initAuthenticate({
                        ...input,
                        errmsg : ${JSON.stringify(msgStr("passkey-unsupported-browser-text"))}
                    });
                `
            }
        ]
    });

    useEffect(() => {
        if (isFetchingTranslations) {
            return;
        }

        (async () => {
            await waitForElementMountedOnDom({
                elementId: authButtonId
            });

            insertScriptTags();
        })();
    }, [isFetchingTranslations]);
}
