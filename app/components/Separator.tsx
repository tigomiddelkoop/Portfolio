import React from "react";
export default function Separator(props: {classNames?: string}): React.JSX.Element {
    return (
        <div className={`${props.classNames} w-full h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent dark:via-slate-600`}></div>
    )
}