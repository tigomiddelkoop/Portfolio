import '../styles/globals.css'
import Layout from "../components/layout";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}) {

    const router = useRouter();
    console.log(router);

    if (router.pathname.includes("/login")) return <Component {...pageProps} />

    return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp
