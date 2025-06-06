/**
 * This file has been claimed for ownership from @keycloakify/keycloak-login-ui version 250004.0.26.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/KcPage.tsx" --revert
 */

import { Suspense, lazy } from "react";
import { assert, type Equals } from "tsafe/assert";
import { KcClsxProvider, type ClassKey } from "@keycloakify/keycloak-login-ui/useKcClsx";
import { type KcContext, KcContextProvider, useKcContext } from "./KcContext";
import { I18nProvider } from "./i18n";

const classes = {} satisfies { [key in ClassKey]?: string };

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    return (
        <KcContextProvider kcContext={kcContext}>
            <KcClsxProvider doUseDefaultCss={true} classes={classes}>
                <I18nProvider kcContext={kcContext}>
                    <Suspense>
                        <Page />
                    </Suspense>
                </I18nProvider>
            </KcClsxProvider>
        </KcContextProvider>
    );
}

const Page_login = lazy(() => import("./pages/login"));
const Page_register = lazy(() => import("./pages/register"));
const Page_info = lazy(() => import("./pages/info"));
const Page_error = lazy(() => import("./pages/error"));
const Page_login_reset_password = lazy(() => import("./pages/login-reset-password"));
const Page_login_verify_email = lazy(() => import("./pages/login-verify-email"));
const Page_terms = lazy(() => import("./pages/terms"));
const Page_login_oauth2_device_verify_user_code = lazy(
    () => import("./pages/login-oauth2-device-verify-user-code")
);
const Page_login_oauth_grant = lazy(() => import("./pages/login-oauth-grant"));
const Page_login_otp = lazy(() => import("./pages/login-otp"));
const Page_login_password = lazy(() => import("./pages/login-password"));
const Page_login_username = lazy(() => import("./pages/login-username"));
const Page_webauthn_authenticate = lazy(() => import("./pages/webauthn-authenticate"));
const Page_webauthn_register = lazy(() => import("./pages/webauthn-register"));
const Page_login_update_password = lazy(() => import("./pages/login-update-password"));
const Page_login_update_profile = lazy(() => import("./pages/login-update-profile"));
const Page_login_idp_link_confirm = lazy(() => import("./pages/login-idp-link-confirm"));
const Page_login_page_expired = lazy(() => import("./pages/login-page-expired"));
const Page_login_idp_link_email = lazy(() => import("./pages/login-idp-link-email"));
const Page_login_config_totp = lazy(() => import("./pages/login-config-totp"));
const Page_logout_confirm = lazy(() => import("./pages/logout-confirm"));
const Page_idp_review_user_profile = lazy(
    () => import("./pages/idp-review-user-profile")
);
const Page_update_email = lazy(() => import("./pages/update-email"));
const Page_select_authenticator = lazy(() => import("./pages/select-authenticator"));
const Page_saml_post_form = lazy(() => import("./pages/saml-post-form"));
const Page_delete_credential = lazy(() => import("./pages/delete-credential"));
const Page_code = lazy(() => import("./pages/code"));
const Page_delete_account_confirm = lazy(() => import("./pages/delete-account-confirm"));
const Page_frontchannel_logout = lazy(() => import("./pages/frontchannel-logout"));
const Page_login_recovery_authn_code_config = lazy(
    () => import("./pages/login-recovery-authn-code-config")
);
const Page_login_recovery_authn_code_input = lazy(
    () => import("./pages/login-recovery-authn-code-input")
);
const Page_login_reset_otp = lazy(() => import("./pages/login-reset-otp"));
const Page_login_x509_info = lazy(() => import("./pages/login-x509-info"));
const Page_webauthn_error = lazy(() => import("./pages/webauthn-error"));
const Page_login_passkeys_conditional_authenticate = lazy(
    () => import("./pages/login-passkeys-conditional-authenticate")
);
const Page_login_idp_link_confirm_override = lazy(
    () => import("./pages/login-idp-link-confirm-override")
);

function Page() {
    const { kcContext } = useKcContext();

    switch (kcContext.pageId) {
        case "login.ftl":
            return <Page_login />;
        case "register.ftl":
            return <Page_register />;
        case "info.ftl":
            return <Page_info />;
        case "error.ftl":
            return <Page_error />;
        case "login-reset-password.ftl":
            return <Page_login_reset_password />;
        case "login-verify-email.ftl":
            return <Page_login_verify_email />;
        case "terms.ftl":
            return <Page_terms />;
        case "login-oauth2-device-verify-user-code.ftl":
            return <Page_login_oauth2_device_verify_user_code />;
        case "login-oauth-grant.ftl":
            return <Page_login_oauth_grant />;
        case "login-otp.ftl":
            return <Page_login_otp />;
        case "login-username.ftl":
            return <Page_login_username />;
        case "login-password.ftl":
            return <Page_login_password />;
        case "webauthn-authenticate.ftl":
            return <Page_webauthn_authenticate />;
        case "webauthn-register.ftl":
            return <Page_webauthn_register />;
        case "login-update-password.ftl":
            return <Page_login_update_password />;
        case "login-update-profile.ftl":
            return <Page_login_update_profile />;
        case "login-idp-link-confirm.ftl":
            return <Page_login_idp_link_confirm />;
        case "login-idp-link-email.ftl":
            return <Page_login_idp_link_email />;
        case "login-page-expired.ftl":
            return <Page_login_page_expired />;
        case "login-config-totp.ftl":
            return <Page_login_config_totp />;
        case "logout-confirm.ftl":
            return <Page_logout_confirm />;
        case "idp-review-user-profile.ftl":
            return <Page_idp_review_user_profile />;
        case "update-email.ftl":
            return <Page_update_email />;
        case "select-authenticator.ftl":
            return <Page_select_authenticator />;
        case "saml-post-form.ftl":
            return <Page_saml_post_form />;
        case "delete-credential.ftl":
            return <Page_delete_credential />;
        case "code.ftl":
            return <Page_code />;
        case "delete-account-confirm.ftl":
            return <Page_delete_account_confirm />;
        case "frontchannel-logout.ftl":
            return <Page_frontchannel_logout />;
        case "login-recovery-authn-code-config.ftl":
            return <Page_login_recovery_authn_code_config />;
        case "login-recovery-authn-code-input.ftl":
            return <Page_login_recovery_authn_code_input />;
        case "login-reset-otp.ftl":
            return <Page_login_reset_otp />;
        case "login-x509-info.ftl":
            return <Page_login_x509_info />;
        case "webauthn-error.ftl":
            return <Page_webauthn_error />;
        case "login-passkeys-conditional-authenticate.ftl":
            return <Page_login_passkeys_conditional_authenticate />;
        case "login-idp-link-confirm-override.ftl":
            return <Page_login_idp_link_confirm_override />;
    }

    assert<Equals<typeof kcContext, never>>;
}
