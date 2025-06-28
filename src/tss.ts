import { createTss } from "tss-react";
import { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../.storybook/customTheme";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";
import { addons } from "@storybook/preview-api";
const channel = addons.getChannel();

function useContext() {

    const [isDark, setIsDark] = useState(()=> document.body.classList.contains("dark"));

    useEffect(() => {
        channel.on(DARK_MODE_EVENT_NAME, setIsDark);
        return () => channel.off(DARK_MODE_EVENT_NAME, setIsDark);
    }, []);

    return { isDark, theme: isDark ? darkTheme : lightTheme };
}

export const { tss } = createTss({
    useContext
});
