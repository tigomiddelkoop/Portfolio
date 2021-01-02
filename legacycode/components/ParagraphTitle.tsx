import React, {Fragment} from "react";

export default function ParagraphTitle(props: any) {
    return (
        <Fragment>
            <h1 className={"text-3xl font-bold"}>{props.children}</h1>
        </Fragment>
    )
}