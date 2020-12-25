import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import {Fragment} from "react";

export default function index() {
    return <Fragment>
        <Head>
            <title>Tigo Middelkoop - Projects</title>
        </Head>
        <h1>All my projects</h1>
        <h2 className={""}><Link href={"/"}>Back to the homepage!</Link></h2>
    </Fragment>
}