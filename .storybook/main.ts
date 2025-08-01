import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "storybook-dark-mode",
        "@storybook/addon-a11y"
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    staticDirs: ['../public'],
};
export default config;
