import React from "react";
export default function SkillCard(props: {classNames?: string, children: any}): React.JSX.Element {


    return (
        <div
            className={"flex m-2 border-2 dark:border-slate-600 border-purple-600 rounded-lg col-span-1 flex-col"}>
            <div className={"flex flex-col h-24 justify-center rounded-t-lg border-b-2 dark:border-slate-600 border-purple-600"}>
                <h1 className={"font-bold text-4xl"}>TITLE</h1>
                <p className={"font-light text-xs"}>DESCRIPTION</p>
            </div>
            <div className={"flex flex-col"}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>
    )
}