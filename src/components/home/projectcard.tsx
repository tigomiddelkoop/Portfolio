import Card from "../card"
import CardTitle from "../cardtitle";
import CardBody from "../cardbody";
import Button from "../button";
import Link from "next/link"

interface props {
    project: {
        key: number,
        title: string,
        short_description: string,
        url: string
        source_control: {
            github: string
        }
    }
}

export default function Projectcard(props: props) {
    return (
        <Card>
            <CardTitle><Link href={"/projects/" + props.project.key}>{props.project.title}</Link></CardTitle>
            <CardBody>
                <div>
                    <p className={"mb-4"}>{props.project.short_description}</p>
                    <div className={"flex items-center"}>
                        <a href={props.project.url}><Button color={"secondary"}>Show Website</Button></a>
                        <a href={props.project.source_control.github}><Button color={"secondary"}>GitHub</Button></a>
                    </div>

                </div>
            </CardBody>
        </Card>
    )
}