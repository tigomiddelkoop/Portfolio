
import Head from "next/head";
import {Fragment} from "react";
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps} from "next";
import Card from "../../components/card";
import CardTitle from "../../components/cardtitle";
import {getProjects} from "../api/projects";
import {getProject} from "../api/projects/[slug]";
import Error from "next/error"

export default function Project({project}) {
    const router = useRouter()

    if(!project) {
        return <div>

            <Error statusCode={404} />
        </div>
    }

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
                                <p className={"font-bold"}>Programming Language{Array.isArray(project.languages) ? "s" : ""} used</p>
                            </div>
                            <div className={""}>

                                {Array.isArray(project.languages) ? project.languages.map(language => <div className={"border-b px-2 py-1 font-light dark:border-gray-600"}>{language}</div>) : <div className={"border-b px-2 py-1 font-light dark:border-gray-600"}>{project.languages}</div>}

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

    const project = await getProject(params.slug);
    return {
        props: {project},
        revalidate: 1,
    }
}

// : Promise<GetStaticPaths>
export async function getStaticPaths() {

    const projects = await getProjects();
    const pages = projects.map(data => {
        return {params: {slug: data.slug.toString()}}
    });

    return {
        paths: pages,
        fallback: true
    }
}