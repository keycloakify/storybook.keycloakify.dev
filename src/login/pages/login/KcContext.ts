import {
    type KcContext as KcContext_common,
    kcContextMock as kcContextMock_common
} from "../../components/Template/KcContext";

export type KcContext = KcContext_common & {
    pageId: "login.ftl";
    url: {
        loginResetCredentialsUrl: string;
        registrationUrl: string;
    };
    realm: {
        loginWithEmailAllowed: boolean;
        rememberMe: boolean;
        password: boolean;
        resetPasswordAllowed: boolean;
        registrationAllowed: boolean;
    };
    auth: {
        selectedCredential?: string;
    };
    registrationDisabled: boolean;
    login: {
        username?: string;
        rememberMe?: string; // "on" | undefined
        password?: string;
    };
    usernameHidden?: boolean;
    social?: {
        displayInfo: boolean;
        providers?: {
            loginUrl: string;
            alias: string;
            providerId: string;
            displayName: string;
            iconClasses?: string;
        }[];
    };
};

const loginUrl = {
    ...kcContextMock_common.url,
    loginResetCredentialsUrl: "#",
    registrationUrl: "#",
    oauth2DeviceVerificationAction: "#",
    oauthAction: "#"
};

export const kcContextMock: KcContext = {
    ...kcContextMock_common,
    pageId: "login.ftl",
    url: loginUrl,
    realm: {
        ...kcContextMock_common.realm,
        loginWithEmailAllowed: true,
        rememberMe: true,
        password: true,
        resetPasswordAllowed: true,
        registrationAllowed: true
    },
    auth: kcContextMock_common.auth!,
    social: {
        displayInfo: true
    },
    usernameHidden: false,
    login: {},
    registrationDisabled: false
};
