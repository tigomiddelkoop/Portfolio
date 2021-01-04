import Link from "next/link";
import Head from "next/head";
import {Fragment} from "react";
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps} from "next";

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
            <h1 className={"text-4xl font-semibold"}>{project.title}</h1>
            <h5 className={"text-xs"}></h5>
        </div>
    </Fragment>
}

// : Promise<GetStaticProps>
export async function getStaticProps({params}) {

    const results = await fetch("https://genericdevelopment.nl/data/projects.json", {
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

    const results = await fetch("https://genericdevelopment.nl/data/projects.json", {
        method: "GET"
    }).then(response => response.json());

    const pages = results.map(data => {
        return {params: {id: data.key.toString()}}
    });

    console.log(pages)
    return {
        paths: pages,
        fallback: false
    }
}