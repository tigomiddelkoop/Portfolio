import React from "react"

interface Props {
    children: any
    className?: string
}
export default function SubTitle(props: Props): React.JSX.Element {
    let className = props.className || ""

    return (
        <h2
            className={`${className} text-xl font-bold text-purple-300 dark:text-slate-300`}
        >
            {props.children}
        </h2>
    )
}
