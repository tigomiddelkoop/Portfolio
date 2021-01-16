import Head from "next/head";
import {Fragment} from "react";
import {getClients} from "../api/clients";
import Clientcard from "../../components/home/clientcard";

interface Props {
    clients: any;
}

export default function index(props: Props) {


    return <Fragment>
        <Head>
            <title>Tigo Middelkoop - Clients</title>
        </Head>
        <div className={"text-center mb-4 dark:text-white"}>
            <h1 className={"text-4xl font-semibold"}>Clients</h1>
            <h5 className={"text-xs"}>People I have worked for/with</h5>
        </div>

        <div className={"flex flex-wrap text-black dark:text-white justify-center"}>

            {props.clients.map(client => <Clientcard client={client}/>)}

        </div>
    </Fragment>
}

export async function getStaticProps() {

    const clients = await getClients();
    return {props: {clients}, revalidate: 1}

}