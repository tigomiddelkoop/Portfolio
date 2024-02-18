import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NextFontWithVariable} from "next/dist/compiled/@next/font";
import React from "react";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";

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
        <html className={`${fonts.variable} dark`} lang="en">
        <body
            className={"text-white bg-fixed h-screen bg-gradient-to-br dark:from-slate-950 dark:via-slate-800 dark:to-slate-950 to-purple-950 via-purple-800 from-purple-950"}
        >
        <div className={"w-full h-full"}>
            <div className={"m-4 flex items-center justify-center"}>
                <Navbar theme={"dark"}></Navbar>
            </div>
            {children}
            <div className={""}>
                <Footer/>
            </div>
        </div>

        {/*<footer>*/}
        {/*    - Pink and purple are one of my favorite colors, so I will reflect that here*/}
        {/*    - All pictures shown are self made, no stock pictures are used*/}
        {/*    - Build version*/}
        {/**/}
        {/*    - Auto switch to darkmode when at night (can be forced to either one ofc)*/}
        {/*</footer>*/}
        </body>
        </html>
    );
}