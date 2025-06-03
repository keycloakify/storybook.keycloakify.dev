if (import.meta.env.PROD) {
    import("./main-kc");
} else {
    import("./main-kc.dev");
}
