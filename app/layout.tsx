import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import React from "react";

const fonts: NextFontWithVariable = localFont({
    src: [
        {
            path: './fonts/Satoshi-Light.woff2',
            weight: '200',
            style: 'normal'
        },
        {
            path: './fonts/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/Satoshi-Bold.woff2',
            weight: '600',
            style: 'normal'
        }
    ],
    display: "swap",
    variable: "--font-satoshi",
})


export const metadata: Metadata = {
    title: "Tigo Middelkoop",
    description: "Showcase of my stuff",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html className={`${fonts.variable}`} lang="en">
        <body className={"bg-fixed h-screen bg-gradient-to-br dark:from-gray-600 dark:to-black to-purple-800 from-pink-700"}>
        {children}
        </body>
        </html>
    );
}
