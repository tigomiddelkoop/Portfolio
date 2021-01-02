import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";

/**
 *
 * Renders the loading component
 *
 * @return {JSX.Element} Returns an React Element
 *
 */

export default function Loading(): JSX.Element {
    return (
        <div className="text-3xl text-center">
            <FontAwesomeIcon className={"animate-spin mr-2"} icon={faCog}/>
            Loading
        </div>
    )
}