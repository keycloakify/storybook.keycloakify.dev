/**
 * WARNING: Before modifying this file, run the following command:
 *
 * $ npx keycloakify own --path "login/pages/login/Page.stories.tsx"
 *
 * This file is provided by @keycloakify/keycloak-login-ui-storybook version 250004.0.2.
 * It was copied into your repository by the postinstall script: `keycloakify sync-extensions`.
 */

/* eslint-disable */

import type { Meta, StoryObj } from "../../mocks/storybookTypes";

function Button(props: { color: "red" | "blue" }){

    const { color } = props;

    return <button style={{ color }}>My Button</button>;

}

const meta = {
    title: "login/login2.ftl",
    component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ViewRed: Story = {
    args: {
        color: "red"
    }
};

export const ViewBlue: Story = {
    args: {
        color: "blue"
    }
};
