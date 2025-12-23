export { };

declare global {
    interface Window {
        gtag: (
            command: "config" | "js",
            targetId: string | Date,
            config?: Record<string, unknown>
        ) => void;
    }
}
