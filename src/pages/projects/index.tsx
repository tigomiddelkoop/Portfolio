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

            <div className={"flex flex-col space-y-2 mb-4 dark:text-white"}>
                <h1 className={"jetbrains text-4xl md:text-5xl items-center"}>Projects</h1>
                <h5 className={"jetbrains text-xs"}>My projects, either finished or not.</h5>
            </div>

            <div className={"flex flex-wrap justify-center"}>
                {projects.map(
                    project => <Projectcard key={project.title} project={project}/>
                )}
            </div>

        </Fragment>
    )

}

export async function getStaticProps() {

    const projects = await getProjects();
    return {props: {projects}, revalidate: 1}

}