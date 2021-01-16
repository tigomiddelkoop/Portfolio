import Head from "next/head";
import {Fragment} from "react";
import {useRouter} from "next/router";
import {GetStaticPaths, GetStaticProps} from "next";
import Card from "../../components/card";
import CardTitle from "../../components/cardtitle";
import {getProjects} from "../api/projects";
import {getProject} from "../api/projects/[slug]";
import Error from "next/error"
import Link from "next/link"

export default function Project({project}) {
    const router = useRouter()

    if (!project) {
        return <div>

            <Error statusCode={404}/>
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
            <div className={"w-full lg:w-3/12 "}>
                <Card>
                    <img className={"border-gray-300 dark:border-gray-600 rounded-t-lg border-b"}
                         src={`/_next/image?url=${encodeURIComponent(project.image)}&w=640&q=75`}/>
                    <CardTitle>Project details</CardTitle>
                    <p className={"border-gray-300 dark:border-gray-600 px-2 pb-1 border-b"}><span
                        className={"font-semibold"}>Name:</span> {project.title}</p>
                    <div>
                        <div>
                            <p className={"border-gray-300 dark:border-gray-600 px-2 py-1 font-semibold"}>Programming
                                Language{Array.isArray(project.languages) ? "s" : ""} used</p>
                            <div>

                                {Array.isArray(project.languages) ? project.languages.map(language => <div
                                        className={"border-gray-300 dark:border-gray-600 border-b px-2 py-1 font-light"}>{language}</div>) :
                                    <div
                                        className={"border-gray-300 dark:border-gray-600 border-b px-2 py-1 font-light"}>{project.languages}</div>}

                            </div>
                        </div>
                        <p className={"border-gray-300 dark:border-gray-600 px-2 py-1 font-semibold"}>Project
                            Links</p>
                        <Link href={"/projects"}><p
                            className={"cursor-pointer px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-b-lg dark:border-gray-600 border-t font-semibold"}>Back to Projects</p>
                        </Link>
                    </div>
                </Card>
            </div>
            {/*<div className={"flex justify-center w-full lg:w-9/12"}>*/
            }
            {/*    <img className={"h-96 rounded-lg shadow-lg"} src={project.image}/>*/
            }
            {/*</div>*/
            }
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