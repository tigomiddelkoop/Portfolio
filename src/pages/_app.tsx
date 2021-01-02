import '../styles/globals.css'
import Layout from "../components/layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

function MyApp({Component, pageProps}) {

    const [theme, setTheme] = useState("");

    const router = useRouter();

    function changeTheme() {

        const currentTheme = theme
        if (currentTheme == "light") {
            window.localStorage.theme = "dark";
            setTheme("dark");
        } else if (currentTheme == "dark") {
            window.localStorage.theme = "light";
            setTheme("light");
        }

    }

    useEffect(() => {
        let theme;

        if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || window.localStorage.theme == "dark") {
            theme = "dark"
        } else {
            theme = "light"
        }
        setTheme(theme);
    });

    if (router.pathname.includes("/login") || router.pathname.includes("/blog")) return <Component {...pageProps} />


    return <Layout changeTheme={changeTheme} theme={theme}><Component {...pageProps} /></Layout>
}

export default MyApp
