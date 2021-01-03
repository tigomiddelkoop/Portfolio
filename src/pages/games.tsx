import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import {Fragment} from "react";

export default function index() {
    return <Fragment>
        <Head>
            <title>Tigo Middelkoop - Games</title>
        </Head>
        <div className={"text-center mb-4 dark:text-white"}>
            <h1 className={"text-4xl font-semibold"}>Games</h1>
            <h5 className={"text-xs"}>You have found a easteregg!</h5>
            <h5 className={"text-xs"}>These are the Games I play</h5>
        </div>
    </Fragment>
}