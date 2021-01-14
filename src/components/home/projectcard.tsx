import Card from "../card"
import CardTitle from "../cardtitle";
import CardBody from "../cardbody";
import Button from "../button";
import Link from "next/link"
import Pill from "../pill";

interface props {
    project: {
        id: number,
        title: string,
        slug: string,
        short_description: string,
        languages: Array<string> | string,
        url: string,
        github: string
    }
}

export default function Projectcard(props: props) {
    return (
        <div className={"w-full sm:w-6/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-1 text-center items-center"}>
            <Card>
                <CardBody>
                    <Link href={"/projects/" + props.project.slug}><h1
                        className={"font-semibold text-xl"}>{props.project.title}</h1>
                    </Link>
                    <p className={"text-xs"}>{props.project.short_description}</p>
                    <div className={"flex flex-wrap justify-center my-1"}>
                        {Array.isArray(props.project.languages) ? props.project.languages.map(language => <div
                                className={"mx-0.5 my-0.5"}><Pill
                                color={"info"}>{language}</Pill></div>) :
                            <div className={"mx-0.5 my-0.5"}><Pill color={"info"}>{props.project.languages}</Pill></div>}
                    </div>
                </CardBody>
                <div
                    className={"flex items-center bg-gray-100 border-gray-300 dark:bg-gray-800 rounded-b-lg border-t dark:border-gray-600"}>
                    <a className={"flex-1 py-1.5 px-2 rounded-bl-lg hover:bg-gray-200 dark:hover:bg-gray-900"} href={props.project.url}>
                        Show Website
                    </a>
                    <Link href={"/projects/" + props.project.slug}>
                        <div
                            className={"flex-1 py-1.5 px-2 border-l border-r hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer dark:border-gray-600"}>
                            Show Project
                        </div>
                    </Link>
                    <a className={"flex-1 py-1.5 px-2 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-br-lg"}
                       href={props.project.github}>
                        GitHub
                    </a>
                </div>
            </Card>
        </div>
    )
}