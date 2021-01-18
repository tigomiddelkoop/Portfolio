import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import {Fragment} from "react";
import Projectcard from "../../components/home/projectcard";
import {production} from "../_app";
import {getProjects} from "../api/projects";

export default function index({projects}) {

    return (
        <Fragment>
            <Head>
                <title>Tigo Middelkoop - Projects</title>
            </Head>
            <div className={"text-center mb-4 dark:text-white"}>
                <h1 className={"text-4xl font-semibold"}>All of my projects</h1>
                <h5 className={"text-xs"}>Projects I have run or whose I am currently working on</h5>
                <h5 className={"text-xs"}>(I am going to make a nice masonry for this.)</h5>
            </div>
            <div className={"flex flex-wrap text-black dark:text-white justify-center"}>
                {projects.map(project => <Projectcard key={project.title}
                    project={project}/>)}
            </div>
        </Fragment>
    )

}

export async function getStaticProps() {

    console.log(process.env);

    const projects = await getProjects();
    return {props: {projects}, revalidate: 1}

}