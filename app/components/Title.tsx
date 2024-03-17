import React from "react"

interface Props {
    children: any
    classNames?: string
}

export default function Title(props: Props): React.JSX.Element {
    let classNames = props.classNames || ""

    return (
        <h1
            className={`${classNames} bg-gradient-to-br from-white to-purple-600 bg-clip-text text-center text-4xl font-bold text-transparent dark:to-slate-600`}
        >
            {props.children}
        </h1>
    )
}
