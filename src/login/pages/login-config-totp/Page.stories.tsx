/**
 * This file has been claimed for ownership from @keycloakify/keycloak-login-ui-storybook version 250004.0.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/login-config-totp/Page.stories.tsx" --revert
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { createKcPageStory } from "../../mocks/KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-config-totp.ftl" });

const meta = {
    title: "login/login-config-totp.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithManualSetUp: Story = {
    args: {
        kcContext: {
            mode: "manual"
        }
    }
};

export const WithError: Story = {
    args: {
        kcContext: {
            messagesPerField: {
                get: (fieldName: string) =>
                    fieldName === "totp" ? "Invalid TOTP" : undefined,
                exists: (fieldName: string) => fieldName === "totp",
                existsError: (fieldName: string) => fieldName === "totp",
                printIfExists: <T,>(fieldName: string, x: T) =>
                    fieldName === "totp" ? x : undefined
            }
        }
    }
};
export const WithAppInitiatedAction: Story = {
    args: {
        kcContext: {
            isAppInitiatedAction: true
        }
    }
};

export const WithPreFilledUserLabel: Story = {
    args: {
        kcContext: {
            totp: {
                otpCredentials: [{ userLabel: "MyDevice" }]
            }
        }
    }
};
