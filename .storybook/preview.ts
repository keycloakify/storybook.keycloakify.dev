import type { Preview } from "@storybook/react-vite";
import { darkTheme, lightTheme } from "./customTheme";

const preview: Preview = {
    parameters: {
        backgrounds: { disable: true },
        darkMode: {
            light: lightTheme,
            dark: darkTheme
        },
        controls: {
            disable: true
        },
        actions: {
            disable: true
        },
        viewport: {
            viewports: {
                "1440p": {
                    name: "1440p",
                    styles: {
                        width: "2560px",
                        height: "1440px"
                    }
                },
                fullHD: {
                    name: "Full HD",
                    styles: {
                        width: "1920px",
                        height: "1080px"
                    }
                },
                macBookProBig: {
                    name: "MacBook Pro Big",
                    styles: {
                        width: "1024px",
                        height: "640px"
                    }
                },
                macBookProMedium: {
                    name: "MacBook Pro Medium",
                    styles: {
                        width: "1440px",
                        height: "900px"
                    }
                },
                macBookProSmall: {
                    name: "MacBook Pro Small",
                    styles: {
                        width: "1680px",
                        height: "1050px"
                    }
                },
                pcAgent: {
                    name: "PC Agent",
                    styles: {
                        width: "960px",
                        height: "540px"
                    }
                },
                iphone12Pro: {
                    name: "Iphone 12 pro",
                    styles: {
                        width: "390px",
                        height: "844px"
                    }
                },
                iphone5se: {
                    name: "Iphone 5/SE",
                    styles: {
                        width: "320px",
                        height: "568px"
                    }
                },
                ipadPro: {
                    name: "Ipad pro",
                    styles: {
                        width: "1240px",
                        height: "1366px"
                    }
                },
                "Galaxy s9+": {
                    name: "Galaxy S9+",
                    styles: {
                        width: "320px",
                        height: "658px"
                    }
                }
            }
        },
        options: {
            storySort: (a, b) => {
                const orderedPagesPrefix = [
                    "Introduction",
                    "login/login.ftl",
                    "login/register.ftl",
                    "login/terms.ftl",
                    "login/error.ftl",
                    "login/code.ftl",
                    "login/delete-account-confirm.ftl",
                    "login/delete-credential.ftl",
                    "login/frontchannel-logout.ftl",
                    "login/idp-review-user-profile.ftl",
                    "login/info.ftl",
                    "login/login-config-totp.ftl",
                    "login/login-idp-link-confirm.ftl",
                    "login/login-idp-link-email.ftl",
                    "login/login-oauth-grant.ftl",
                    "login/login-otp.ftl",
                    "login/login-page-expired.ftl",
                    "login/login-password.ftl",
                    "login/login-reset-otp.ftl",
                    "login/login-reset-password.ftl",
                    "login/login-update-password.ftl",
                    "login/login-update-profile.ftl",
                    "login/login-username.ftl",
                    "login/login-verify-email.ftl",
                    "login/login-x509-info.ftl",
                    "login/logout-confirm.ftl",
                    "login/saml-post-form.ftl",
                    "login/select-authenticator.ftl",
                    "login/update-email.ftl",
                    "login/webauthn-authenticate.ftl",
                    "login/webauthn-error.ftl",
                    "login/webauthn-register.ftl",
                    "login/login-oauth2-device-verify-user-code.ftl",
                    "login/login-recovery-authn-code-config.ftl",
                    "login/login-recovery-authn-code-input.ftl",
                    "account/account.ftl",
                    "account/password.ftl",
                    "account/federatedIdentity.ftl",
                    "account/log.ftl",
                    "account/sessions.ftl",
                    "account/totp.ftl"
                ];

                function getHardCodedWeight(title) {
                    for (let i = 0; i < orderedPagesPrefix.length; i++) {
                        if (
                            title
                                .toLowerCase()
                                .startsWith(orderedPagesPrefix[i].toLowerCase())
                        ) {
                            return orderedPagesPrefix.length - i;
                        }
                    }

                    return 0;
                }

                return getHardCodedWeight(b.title) - getHardCodedWeight(a.title);
            }
        }
    }
};

export default preview;
