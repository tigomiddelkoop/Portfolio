import Card from "../card"
import CardTitle from "../cardtitle";
import CardBody from "../cardbody";
import Button from "../button";
import Link from "next/link"

interface props {
    project: {
        id: number,
        title: string,
        slug: string,
        short_description: string,
        url: string,
        github: string
    }
}

export default function Projectcard(props: props) {
    return (
        <Card>

            <CardBody>
                <div className={"flex justify-between flex-col lg:flex-row items-center py-1 px-2"}>
                    <div className={""}>
                        <Link href={"/projects/" + props.project.slug}><h1
                            className={"text-xl mb-1 font-semibold cursor-pointer"}>{props.project.title}</h1></Link>
                        <p className={""}>{props.project.short_description}</p>
                    </div>

                    <div
                        className={"flex items-center bg-gray-100 border-gray-300 hover:bg-gray-200 dark:bg-gray-800 rounded-lg border dark:border-gray-600 shadow"}>
                        <a className={"py-1.5 px-2 hover:bg-gray-900 rounded-l-lg"} href={props.project.url}>
                            Show Website
                        </a>
                        <Link href={"/projects/" + props.project.slug}>
                            <div className={"py-1.5 px-2 dark:hover:bg-gray-900 cursor-pointer"}>
                                Show Project
                            </div>
                        </Link>
                        <a className={"py-1.5 px-2 hover:bg-gray-900 rounded-r-lg"}
                           href={props.project.github}>
                            GitHub
                        </a>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}