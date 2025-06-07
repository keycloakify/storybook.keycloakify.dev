/* eslint-disable */

export type KcContext = {
    themeVersion: string;
    keycloakifyVersion: string;
    themeType: "login";
    themeName: string;
    url: {
        loginAction: string;
        loginRestartFlowUrl: string;
        loginUrl: string;
        ssoLoginInOtherTabsUrl: string;
    };
    realm: {
        name: string;
        displayName: string;
        displayNameHtml: string;
        internationalizationEnabled: boolean;
        registrationEmailAsUsername: boolean;
    };
    /** Undefined if !realm.internationalizationEnabled */
    locale?: {
        supported: {
            url: string;
            label: string;
            languageTag: string;
        }[];
        currentLanguageTag: string;
        rtl?: boolean;
    };
    auth?: {
        showUsername?: boolean;
        showResetCredentials?: boolean;
        showTryAnotherWayLink?: boolean;
        attemptedUsername?: string;
    };
    scripts?: string[];
    message?: {
        type: "success" | "warning" | "error" | "info";
        summary: string;
    };
    client: {
        clientId: string;
        name?: string;
        description?: string;
        attributes: Record<string, string>;
    };
    isAppInitiatedAction?: boolean;
    messagesPerField: {
        /**
         * Return text if message for given field exists. Useful eg. to add css styles for fields with message.
         *
         * @param fieldName to check for
         * @param text to return
         * @return text if message exists for given field, else undefined
         */
        printIfExists: <T extends string>(fieldName: string, text: T) => T | undefined;
        /**
         * Check if exists error message for given fields
         *
         * @param fields
         * @return boolean
         */
        existsError: (fieldName: string, ...otherFiledNames: string[]) => boolean;
        /**
         * Get message for given field.
         *
         * @param fieldName
         * @return message text or empty string
         */
        get: (fieldName: string) => string;
        /**
         * Check if message for given field exists
         *
         * @param field
         * @return boolean
         */
        exists: (fieldName: string) => boolean;

        getFirstError: (...fieldNames: string[]) => string;
    };
    properties: {};
    "x-keycloakify": {
        messages: Record<string, string>;
    };
};

export const kcContextMock: KcContext = {
    themeVersion: "0.0.0",
    keycloakifyVersion: "0.0.0",
    themeType: "login",
    themeName: "my-theme-name",
    url: {
        loginAction: "#",
        loginRestartFlowUrl: "#",
        loginUrl: "#",
        ssoLoginInOtherTabsUrl: "#"
    },
    realm: {
        name: "myrealm",
        displayName: "myrealm",
        displayNameHtml: "myrealm",
        internationalizationEnabled: true,
        registrationEmailAsUsername: false
    },
    messagesPerField: {
        get: () => "",
        existsError: () => false,
        printIfExists: function <T>(fieldName: string, text: T) {
            return this.get(fieldName) !== "" ? text : undefined;
        },
        exists: function (fieldName) {
            return this.get(fieldName) !== "";
        },
        getFirstError: function (...fieldNames) {
            for (const fieldName of fieldNames) {
                if (this.existsError(fieldName)) {
                    return this.get(fieldName);
                }
            }
            return "";
        }
    },
    locale: {
        supported: (
            [
                /* spell-checker: disable */
                ["de", "Deutsch"],
                ["no", "Norsk"],
                ["ru", "Русский"],
                ["sv", "Svenska"],
                ["pt-BR", "Português (Brasil)"],
                ["lt", "Lietuvių"],
                ["en", "English"],
                ["it", "Italiano"],
                ["fr", "Français"],
                ["zh-CN", "中文简体"],
                ["es", "Español"],
                ["cs", "Čeština"],
                ["ja", "日本語"],
                ["sk", "Slovenčina"],
                ["pl", "Polski"],
                ["ca", "Català"],
                ["nl", "Nederlands"],
                ["tr", "Türkçe"],
                ["ar", "العربية"],
                ["da", "Dansk"],
                ["el", "Ελληνικά"],
                ["fa", "فارسی"],
                ["fi", "Suomi"],
                ["hu", "Magyar"],
                ["ka", "ქართული"],
                ["lv", "Latviešu"],
                ["pt", "Português"],
                ["th", "ไทย"],
                ["uk", "Українська"],
                ["zh-TW", "中文繁體"]
                /* spell-checker: enable */
            ] as const
        ).map(([languageTag, label]) => {
            return {
                languageTag,
                label,
                url: "https://gist.github.com/garronej/52baaca1bb925f2296ab32741e062b8e"
            } as const;
        }),

        currentLanguageTag: "en"
    },
    auth: {
        showUsername: false,
        showResetCredentials: false,
        showTryAnotherWayLink: false
    },
    client: {
        clientId: "myApp",
        attributes: {}
    },
    scripts: [],
    isAppInitiatedAction: false,
    properties: {},
    "x-keycloakify": {
        messages: {}
    }
};
