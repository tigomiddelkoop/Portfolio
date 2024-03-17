import React from "react"

interface Props {
    children: any
    classNames?: string
}
export default function SubTitle(props: Props): React.JSX.Element {
    let classNames = props.classNames || ""

    return (
        <h2
            className={`${classNames} text-xl font-bold text-purple-300 dark:text-slate-300`}
        >
            {props.children}
        </h2>
    )
}
