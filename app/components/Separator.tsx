import React from "react"

interface Props {
    classNames?: string
}
export default function Separator(props: Props): React.JSX.Element {
    let classNames = props.classNames || ""

    return (
        <div
            className={`${classNames} h-px w-full bg-gradient-to-r from-transparent via-purple-600 to-transparent dark:via-slate-600`}
        ></div>
    )
}
