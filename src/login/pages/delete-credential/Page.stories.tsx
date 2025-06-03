/**
 * This file has been claimed for ownership from @keycloakify/keycloak-login-ui-storybook version 250004.0.0.
 * To relinquish ownership and restore this file to its original content, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/delete-credential/Page.stories.tsx" --revert
 */

import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../../mocks/KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "delete-credential.ftl" });

const meta = {
    title: "login/delete-credential.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};
export const WithCustomCredentialLabel: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                credentialLabel: "Test Credential",
                url: { loginAction: "/login-action" }
            }}
        />
    )
};
