import Head from "next/head";
import {Fragment} from "react";
import {Metadata} from "next";
// import Projectcard from "../../components/home/projectcard";

export const metadata: Metadata = {
    title: 'Tigo Middelkoop - Projects',
}

export default function page() {



    return (
        <Fragment>
            <div className={"flex flex-col space-y-2 mb-4 dark:text-white items-center"}>
                <h1 className={"jetbrains font-light text-4xl items-center"}>Projects</h1>
                <h5 className={"jetbrains text-xs"}>My projects, either finished or not.</h5>
                <h5 className={"jetbrains text-xs"}>Not much at the moment, working on some other stuff</h5>
            </div>

            <div className={"flex flex-wrap justify-center"}>
                {/*{projects.map(*/}
                {/*    project => <Projectcard key={project.title} project={project}/>*/}
                {/*)}*/}
            </div>

        </Fragment>
    )

}

// export async function getStaticProps() {
//
//     const projects = await getProjects();
//     return {props: {projects}, revalidate: 1}
//
// }