import type { Metadata } from "next";
import "./globals.css";

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
            <body>
                {children}
            </body>
        </html>
    );
}
