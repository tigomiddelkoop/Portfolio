import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import {Fragment} from "react";

export default function index() {
    return <Fragment>
        <Head>
            <title>Tigo Middelkoop - Clients</title>
        </Head>
        <div className={"text-center mb-4 dark:text-white"}>
            <h1 className={"text-4xl font-semibold"}>Clients</h1>
            <h5 className={"text-xs"}>People I have worked with</h5>

        </div>
    </Fragment>
}