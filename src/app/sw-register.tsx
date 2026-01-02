"use client";

import { useEffect } from "react";

const SWRegister = () => {
    useEffect(() => {
        // Register service worker if it is supported by the browser
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/pwa/sw.js");
        }
    }, []);

    return null;
}

export default SWRegister;
