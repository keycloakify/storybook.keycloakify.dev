/**
 * This file has been claimed for ownership from @keycloakify/keycloak-account-multi-page-ui version 210102.0.13.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "account/components/Template/useInitializeTemplate.ts" --revert
 */

import { useInsertLinkTags } from "../../../tools/useInsertLinkTags";
import { useKcClsx } from "@keycloakify/keycloak-account-multi-page-ui/useKcClsx";
import { BASE_URL } from "@keycloakify/keycloak-account-multi-page-ui/import.meta.env.BASE_URL";

export function useInitializeTemplate() {
    const { doUseDefaultCss } = useKcClsx();

    const { areAllStyleSheetsLoaded } = useInsertLinkTags({
        effectId: "Template",
        hrefs: !doUseDefaultCss
            ? []
            : [
                  `${BASE_URL}keycloak-theme/account/resources-common/node_modules/patternfly/dist/css/patternfly.min.css`,
                  `${BASE_URL}keycloak-theme/account/resources-common/node_modules/patternfly/dist/css/patternfly-additions.min.css`,
                  `${BASE_URL}keycloak-theme/account/css/account.css`
              ]
    });

    return { isReadyToRender: areAllStyleSheetsLoaded };
}
