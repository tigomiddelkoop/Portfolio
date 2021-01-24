import '../styles/globals.css'
import Layout from "../components/layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Simulate} from "react-dom/test-utils";

function MyApp({Component, pageProps}) {

    const [theme, setTheme] = useState("");
    const router = useRouter();

    const handleThemeKeypress = (event: KeyboardEvent) => {
        switch (event.code) {
            case "KeyT":
                changeTheme()
                break;
            case "KeyC":
                router.push("/clients");
                break;
            case "KeyH":
                router.push("/");
                break;
            case "KeyP":
                router.push("/projects");
                break;
            case "KeyK":
                router.push("/kubernetes");
                break;
            case "KeyI":
                router.push("https://infra.tigo.tech");
                break;
            case "KeyB":
                router.push("https://blog.tigo.tech");
                break;

        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleThemeKeypress);
        return () => {
            window.removeEventListener("keydown", handleThemeKeypress)
        }
    })


    // Get the preference of the user or the OS
    useEffect(() => {
        let theme;

        if ((!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || window.localStorage.theme == "dark") {
            theme = "dark"
        } else {
            theme = "light"
        }
        setTheme(theme);
    }, []);

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


    return <Layout changeTheme={changeTheme} theme={theme}><Component {...pageProps} /></Layout>
}

const dev = process.env.NODE_ENV !== 'production';
export const production = dev ? 'http://localhost:3000' : 'https://tigo.tech';


export default MyApp