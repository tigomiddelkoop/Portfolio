import React from "react"

interface Props {
    children: any
    className?: string
}

export default function Title(props: Props): React.JSX.Element {
    let className = props.className || ""

    return (
        <h1
            className={`${className} bg-gradient-to-br from-white to-purple-600 bg-clip-text text-center text-5xl font-bold text-transparent dark:to-slate-600`}
        >
            {props.children}
        </h1>
    )
}
