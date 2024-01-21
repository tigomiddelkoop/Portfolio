// import Head from "next/head";
// import {Fragment} from "react";
// import {useRouter} from "next/router";
// import {GetStaticPaths, GetStaticProps} from "next";
// import Card from "../../components/card";
// import CardTitle from "../../components/cardtitle";
// import {getProjects} from "../api/projects";
// import {getProject} from "../api/projects/[slug]";
// import Error from "next/error"
// import Link from "next/link"
// import CardBody from "../../components/cardbody";
//
// export default function Project({project}) {
//     const router = useRouter()
//
//     if (!project) {
//         return (
//             <div>
//                 <Error statusCode={404}/>
//             </div>
//         )
//     }
//
//     if (router.isFallback) {
//         return <div>Loading</div>
//     }
//
//     return <Fragment>
//         <Head>
//             <title>Tigo Middelkoop - {project.title}</title>
//         </Head>
//         <div className={"flex flex-wrap"}>
//             <div className={"w-full lg:w-3/12 lg:pr-1"}>
//                 <div className={"mb-4"}>
//                     <Card>
//                         <Link href={"/projects"}><p
//                             className={"dark:hover:bg-gray-600 hover:bg-gray-100 rounded-lg p-2 font-bold"}>Back to
//                             projects</p></Link>
//                     </Card>
//
//                 </div>
//                 <div className={"mb-4"}>
//                     <Card>
//                         <CardTitle>{project.title}</CardTitle>
//                         <CardBody>{project.short_description}</CardBody>
//                     </Card>
//                 </div>
//                 <div className={"mb-4"}>
//                     <Card>
//                         <CardTitle>Programming Languages</CardTitle>
//                         <div>
//                             {Array.isArray(project.languages) ? project.languages.map((language, index) => <div
//                                     key={index}
//                                     className={"px-2 py-1 font-light"}>{language}</div>) :
//                                 <div
//                                     className={"px-2 py-1 font-light"}>{project.languages}</div>}
//                         </div>
//                     </Card>
//                 </div>
//                 <div className={"mb-4"}>
//                     <Card>
//                         <CardTitle>Project Links</CardTitle>
//                         <div className={"border-gray-300 dark:border-gray-600"}>
//                             <div className={"flex flex-col"}>
//                                 <a className={"px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-600"}
//                                    href={project.source_control.github}>GitHub</a>
//                                 <a className={"px-2 py-1 rounded-b-lg hover:bg-gray-100 dark:hover:bg-gray-600"}
//                                    href={project.website}>Website</a>
//                             </div>
//                         </div>
//                     </Card>
//                 </div>
//             </div>
//             <div className={"w-full lg:w-9/12 lg:pl-1"}>
//
//                 {project.image !== undefined ?
//                     <div className={"mb-4"}>
//                         <Card>
//                             <img
//                                 className={"w-full h-72 object-cover border-gray-300 dark:border-gray-600 rounded-lg"}
//                                 src={`/_next/image?url=${encodeURIComponent(project.image)}&w=640&q=75`}/>
//                         </Card>
//                     </div>
//                     : ""}
//                 <Card>
//                     <CardBody>
//                         {/*{project.long_description.map((text, index, array) => {*/}
//                         {/*    return <p key={index} className={index !== array.length - 1 ? "mb-4" : ""}>{text !== "" ? text : <span>&nbsp;</span>}</p>*/}
//                         {/*})}*/}
//                     </CardBody>
//                 </Card>
//
//
//             </div>
//         </div>
//     </Fragment>
// }
//
// // : Promise<GetStaticProps>
// // export async function getStaticProps({params}) {
// //
// //     const project = await getProject(params.slug);
// //     return {
// //         props: {project},
// //         revalidate: 1,
// //     }
// // }
//
// // : Promise<GetStaticPaths>
// // export async function getStaticPaths() {
// //
// //     const projects = await getProjects();
// //     const pages = projects.map(data => {
// //         return {params: {slug: data.slug.toString()}}
// //     });
// //
// //     return {
// //         paths: pages,
// //         fallback: true
// //     }
// // }