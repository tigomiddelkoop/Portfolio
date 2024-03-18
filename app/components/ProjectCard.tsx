import React from "react"
import { DateTime, Duration } from "luxon"
import Separator from "@/app/components/Separator"

interface Props {}
export default function ProjectCard(props: Props): React.JSX.Element {
    return (
        <div
            className={
                "col-span-1 rounded-lg border-2 border-purple-600 p-2 dark:border-slate-600"
            }
        >
            Project
        </div>
    )
}
