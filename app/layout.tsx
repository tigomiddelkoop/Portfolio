"use client"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import React, { useEffect, useState } from "react"
import Footer from "@/app/components/Footer"
import Navbar from "@/app/components/Navbar"

const fonts: NextFontWithVariable = localFont({
    src: [
        {
            path: "./fonts/Satoshi-Light.woff2",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/Satoshi-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Satoshi-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Satoshi-Black.woff2",
            weight: "900",
            style: "normal",
        },
    ],
    display: "swap",
    variable: "--font-satoshi",
})

// export const metadata: Metadata = {
//     title: "Tigo Middelkoop",
//     description: "Showcase of my stuff",
// };

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        setTheme(getTheme())
    }, [])

    function getTheme() {
        let theme = ""
        if (
            (!("theme" in window.localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches) ||
            window.localStorage.theme == "dark"
        ) {
            theme = "dark"
        } else {
            theme = "light"
        }
        return theme
    }

    function changeTheme() {
        const currentTheme = theme
        if (currentTheme == "light") {
            window.localStorage.theme = "dark"
            setTheme("dark")
        } else if (currentTheme == "dark") {
            window.localStorage.theme = "light"
            setTheme("light")
        }
    }

    return (
        <html className={`${fonts.variable} ${theme}`} lang="en">
            <body
                className={`h-screen bg-gradient-to-br from-purple-950 via-purple-800 to-purple-950 bg-fixed text-white duration-1000 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950`}
            >
                <div className={"h-full w-full"}>
                    <div className={"m-4 flex items-center justify-center"}>
                        <Navbar
                            changeTheme={changeTheme}
                            theme={theme}
                        ></Navbar>
                    </div>
                    {children}
                    <div className={""}>
                        <Footer />
                    </div>
                </div>

                {/*<footer>*/}
                {/*    - Pink and purple are one of my favorite colors, so I will reflect that here*/}
                {/*    - All pictures shown are selfmade, no stock pictures are used*/}
                {/*    - Build version*/}
                {/**/}
                {/*    - Auto switch to darkmode when at night (can be forced to either one ofc)*/}
                {/*</footer>*/}
            </body>
        </html>
    )
}
