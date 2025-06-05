/**
 * This file has been claimed for ownership from @keycloakify/keycloak-login-ui-storybook version 250004.0.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/logout-confirm/Page.stories.tsx" --revert
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { createKcPageStory } from "../../mocks/KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "logout-confirm.ftl" });

const meta = {
    title: "login/logout-confirm.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/**
 * WithCustomLogoutMessage:
 * - Purpose: Tests when a custom message is displayed for the logout confirmation.
 * - Scenario: The component renders with a custom logout confirmation message instead of the default one.
 * - Key Aspect: Ensures the custom logout message is displayed correctly.
 */
export const WithCustomLogoutMessage: Story = {
    args: {
        kcContext: {
            url: {
                logoutConfirmAction: "/mock-logout-action"
            },
            client: {
                baseUrl: "/mock-client-url"
            },
            logoutConfirm: {
                code: "mock-session-code",
                skipLink: false
            },
            message: {
                summary: "Are you sure you want to log out from all sessions?",
                type: "warning"
            }
        }
    }
};
