import React from "react"

interface Props {
    children: any
    id?: string
    classNames?: string
}
export default function Container(props: Props): React.JSX.Element {
    let classNames: string = props.classNames || ""
    let id: string | undefined = props.id || undefined

    return (
        <div
            id={id}
            className={`${classNames} my-2 flex w-full flex-col items-center`}
        >
            {props.children}
        </div>
    )
}
