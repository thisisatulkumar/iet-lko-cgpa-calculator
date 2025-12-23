'use client';

import { usePathname } from "next/navigation";

import { useEffect, JSX } from "react";

import * as gtag from "@/lib/gtag";

const GoogleAnalytics = (): JSX.Element | null => {
    const pathname = usePathname();

    useEffect(() => {
        gtag.pageview(pathname);
    }, [pathname]);

    return null;
}

export default GoogleAnalytics;
