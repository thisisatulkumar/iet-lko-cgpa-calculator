import type { Metadata } from "next";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Analytics } from "@vercel/analytics/next"

import SWRegister from "./sw-register";

export const metadata: Metadata = {
    title: "SGPA Calculator",
    description: "A handy SGPA calculator for IET Lucknow students",
    manifest: "/pwa/manifest.json",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SWRegister />
                
                <Navbar />
                {children}
                <Footer />
                    
                <Analytics />
            </body>
        </html>
    );
}
