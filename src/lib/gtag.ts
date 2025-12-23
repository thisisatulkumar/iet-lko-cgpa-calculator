export const GA_ID = process.env.NEXT_PUBLIC_GA_ID as string;

// Track page views
export const pageview = (url: string): void => {
    if (!GA_ID || typeof window === "undefined") return;

    window.gtag("config", GA_ID, {
        page_path: url,
    });
};
