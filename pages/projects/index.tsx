import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function index() {
    return <Layout>
        <Head>
            <title>Projects</title>
        </Head>
        <h1>All my projects</h1>
        <h2><Link href={"/"}>Back to the homepage!</Link></h2>
    </Layout>
}