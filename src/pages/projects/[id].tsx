import Link from "next/link";
import Head from "next/head";
import {Fragment} from "react";
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps} from "next";
import Card from "../../components/card";
import CardBody from "../../components/cardbody";
import CardTitle from "../../components/cardtitle";
import Macwindowtitle from "../../components/os/macwindowtitle";
import {production} from "../_app";

export default function Project({project}) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loadin'</div>
    }

    return <Fragment>
        <Head>
            <title>Tigo Middelkoop - {project.title}</title>
        </Head>
        <div className={"text-center mb-4 dark:text-white"}>
            <h1 className={"text-4xl font-semibold mb-0.5"}>{project.title}</h1>
            <h1 className={"text-xs font-light"}>{project.short_description}</h1>
        </div>
        <div className={"flex"}>
            <div className={"w-full lg:w-3/12"}>
                <Card>
                    <CardTitle>Project details</CardTitle>
                    <div>
                        <div className={""}>
                            <div className={"border-b px-2 pb-1 dark:border-gray-600"}>
                                <p className={"font-bold"}>Programming Languages used</p>
                            </div>
                            <div className={""}>
                                {project.languages.map(language => <div className={"border-b px-2 py-1 font-light dark:border-gray-600"}>{language}</div>)}
                            </div>
                        </div>
                        <div>
                            <div className={"px-2 py-1 dark:border-gray-600"}>
                                <p className={"font-bold"}>Project Links</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </Fragment>
}

// : Promise<GetStaticProps>
export async function getStaticProps({params}) {

    const results = await fetch(production + "/projects.json", {
        method: "GET"
    }).then(response => response.json());

    let project;
    results.forEach(projects => {
        if (projects.key == params.id) {
            project = projects;
            return;
        }
    })

    return {
        props: {project},
    }
}

// : Promise<GetStaticPaths>
export async function getStaticPaths() {

    const results = await fetch(production + "/projects.json", {
        method: "GET"
    }).then(response => response.json());

    const pages = results.map(data => {
        return {params: {id: data.key.toString()}}
    });

    return {
        paths: pages,
        fallback: false
    }
}