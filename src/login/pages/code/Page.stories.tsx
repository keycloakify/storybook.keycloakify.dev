/**
 * This file has been claimed for ownership from @keycloakify/keycloak-login-ui-storybook version 250004.0.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/code/Page.stories.tsx" --revert
 */

import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../../mocks/KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "code.ftl" });

const meta = {
    title: "login/code.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};
export const WithErrorCode: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                code: {
                    success: false,
                    error: "Failed to generate code"
                }
            }}
        />
    )
};
export const WithFrenchLanguage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                code: {
                    success: true,
                    code: "XYZ789"
                }
            }}
        />
    )
};
export const WithHtmlErrorMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                code: {
                    success: false,
                    error: "Something went wrong. <a href='https://example.com'>Try again</a>"
                }
            }}
        />
    )
};
