import React from "react"

interface Props {
    className?: string
}
export default function Separator(props: Props): React.JSX.Element {
    let className = props.className || ""

    return (
        <div
            className={`${className} h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent dark:via-slate-600`}
        ></div>
    )
}
