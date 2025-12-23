import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/next"

import Script from "next/script";

export const metadata: Metadata = {
    title: "SGPA Calculator",
    description: "A handy SGPA calculator for IET Lucknow students",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Load Google Analytics */}
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                />

                <Script 
                    id="ga-init" 
                    strategy="afterInteractive"
                >
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                    `}
                </Script>
            </head>

            <body>
                {/* Google Analytics */}
                <GoogleAnalytics />
                
                <Navbar />
                {children}
                <Footer />
                    
                {/* Vercel Analytics */}
                <Analytics />
            </body>
        </html>
    );
}
