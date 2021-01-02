import React, {Fragment} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

export default class Notfound extends React.Component<any, any> {

    /**
     *
     * Renders the elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    render(): JSX.Element {
        return (
            <Fragment>
                <div
                    className="min-h-screen flex items-center text-center justify-center">
                    <div className={"h-full"}>
                        <h1 className="text-6xl font-light">404</h1>
                        <div className={"font-light mb-4"}>
                            <p>The page you requested was not available.</p>
                            <p>Click the on the button below to go back to the homepage</p>
                        </div>
                        <Link className={"shadow bg-gray-900 hover:bg-gray-600 px-4 py-2 rounded-lg"}
                              to={"/"}><FontAwesomeIcon icon={faHome}/> Home</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}