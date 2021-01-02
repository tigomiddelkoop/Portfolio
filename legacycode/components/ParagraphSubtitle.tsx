import React, {Fragment} from "react";

export default function ParagraphSubtitle(props: any) {
    return (
        <Fragment>
            <h2 className={"text-xl"}>{props.children}</h2>
        </Fragment>
    )
}