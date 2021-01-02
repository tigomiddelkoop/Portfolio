import Card from "../card"

interface props {
    project: {
        title: string
    }
}

export default function Projectcard(props: props) {
    return (
        <Card>
            {props.project.title}
        </Card>
    )
}