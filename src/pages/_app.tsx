import '../styles/globals.css'
import Layout from "../components/layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

function MyApp({Component, pageProps}) {

    const [theme, setTheme] = useState("");
    const router = useRouter();

    // Get the preference of the user or the OS
    useEffect(() => {
        let theme;

        if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || window.localStorage.theme == "dark") {
            theme = "dark"
        } else {
            theme = "light"
        }
        setTheme(theme);
    });

    // Make the changing possible
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
    
    // This somehow feels wrong to do.
    if (router.pathname.includes("/login")) return <div className={theme}><Component {...pageProps} /></div>
    if (router.pathname.includes("/blog") || router.pathname.includes("/yeet")) return <Component {...pageProps} />


    return <Layout changeTheme={changeTheme} theme={theme}><Component {...pageProps} /></Layout>
}

const dev = process.env.NODE_ENV !== 'production';
export const production = dev ? 'http://localhost:3000' : 'https://tigo.tech';


export default MyApp
