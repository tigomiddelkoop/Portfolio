import Head from "next/head";
import {Fragment} from "react";
import {getClients} from "../api/clients";
import Card from "../../components/card";
import CardBody from "../../components/cardbody";
import Pill from "../../components/pill";

export default function index(props) {


    return <Fragment>
        <Head>
            <title>Tigo Middelkoop - Clients</title>
        </Head>
        <div className={"text-center mb-4 dark:text-white"}>
            <h1 className={"text-4xl font-semibold"}>Clients</h1>
            <h5 className={"text-xs"}>People I have worked for/with</h5>
        </div>

        <div className={"flex flex-wrap text-black dark:text-white  justify-center"}>


            {props.clients.map(client => <div
                className={"w-full sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-2/12 p-1 text-center items-center"}>
                <Card key={client.id}>
                    <CardBody>
                        <div className={"flex flex-col items-center"}>
                            <img className={"h-32"} src={client.logo} alt={`${client.name}'s Logo`}/>
                            <div>
                                <h3 className={"font-semibold"}>{client.name}</h3>
                                <p className={"text-xs"}>{client.about}</p>
                                <div className={"flex justify-center my-1"}>{client.services.map(service => <div className={"mx-0.5"}>
                                    <Pill
                                        color={"info"}>{service}</Pill>
                                </div>)}
                                </div>
                            </div>
                        </div>
                    </CardBody>

                    <div className={"flex"}>
                        <a href={client.website} target={"_blank"} rel={"nofollow noreferrer"}
                           className={"flex-1 rounded-bl-lg border-t border-r p-2 font-semibold bg-gray-100 hover:bg-gray-200 dark:border-gray-600 cursor-pointer dark:hover:bg-gray-900 dark:bg-gray-800"}>Visit
                            site</a>
                        <p className={"flex-1 rounded-br-lg border-t p-2 font-semibold bg-gray-100 hover:bg-gray-200 dark:border-gray-600 cursor-not-allowed dark:hover:bg-gray-900 dark:bg-gray-800"}>See
                            project</p>
                    </div>

                </Card>
            </div>)}


        </div>
        <div className={"text-center dark:text-white"}>
            <h4 className={"text-xs"}>I still need to make a proper CMS.</h4>
        </div>
    </Fragment>
}

export async function getStaticProps() {

    const clients = await getClients();
    return {props: {clients}, revalidate: 1}

}