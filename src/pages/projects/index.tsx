import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import {Fragment} from "react";
import Projectcard from "../../components/home/projectcard";

export default function index({projects}) {

    console.log(projects);

    return (
        <Fragment>
            <Head>
                <title>Tigo Middelkoop - Projects</title>
            </Head>
            <div className={"text-center mb-4 dark:text-white"}>
                <h1 className={"text-4xl font-semibold"}>All of my projects</h1>
                <h5 className={"text-xs"}>Projects I have run or whose I am currently working on</h5>
            </div>
            <div className={"flex flex-col flex-auto"}>
                {projects.map(project => <div key={project.title} className={"flex-1 mx-1 mb-4"}><Projectcard project={project}/></div>)}
            </div>
        </Fragment>
    )
}

export async function getStaticProps({params}) {

    const projects = await fetch("https://genericdevelopment.nl/data/projects.json", {
        method: "GET"
    }).then(response => response.json());


    return {
        props: {projects},
    }
}