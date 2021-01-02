import Tigo from "../img/profilepicture.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faServer} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React, {Fragment} from "react";

export default class PersonalInfo extends React.Component<{}, {}> {


    /**
     *
     * Renders the Elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    render(): JSX.Element {

        return (
            <Fragment>
                <div className="md:flex">
                    <img className="shadow border-2 h-64 w-64 mx-auto md:mx-0 md:mr-6 rounded-full"
                         alt="Tigo" src={Tigo}/>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-semibold">Tigo Middelkoop</h1>
                        <h3 className="text-2xl font-light">Backend Developer</h3>
                        <h4 className="text-sm font-light">Languages I can use: PHP & JavaScript/TypeScript</h4>
                        <h4 className="text-xs font-light mb-6">Interested in Learning: C++, C, Objective-C, Java &
                            Rust</h4>
                        <div className="mb-4">
                            <p className={"block font-semibold md:inline mb-2 md:mb-0 md:mr-2"}>SystemManager<span
                                className={"hidden md:inline"}>:</span></p>
                            <a className="font-semibold shadow bg-gray-900 border-r border-gray-700 hover:bg-gray-600 px-4 py-2 rounded-l-lg"
                               href="https://systemmanager.io"><FontAwesomeIcon icon={faServer}/> Core</a>
                            <a className="font-semibold shadow bg-gray-900 border-l border-gray-700 hover:bg-gray-600 px-4 py-2 rounded-r-lg"
                               href="https://systemmanager.cloud"><FontAwesomeIcon icon={faCloud}/> Cloud</a>
                        </div>
                        <div className={"mb-4"}>
                            <p className={"block md:inline mb-2 md:mb-0 md:mr-2"}>Social<span
                                className={"hidden md:inline"}>:</span></p>
                            <a className="shadow bg-gray-900 mr-1 font-semibold hover:bg-gray-600 px-4 py-2 rounded-lg"
                               href="https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"><FontAwesomeIcon
                                icon={faLinkedin}/> LinkedIn</a>
                            <a className="shadow bg-gray-900 font-semibold hover:bg-gray-600 px-4 py-2 rounded-lg"
                               href="https://github.com/tigomiddelkoop"><FontAwesomeIcon
                                icon={faGithub}/> GitHub</a>
                        </div>
                    </div>
                </div>
            </Fragment>
        )

    }

}