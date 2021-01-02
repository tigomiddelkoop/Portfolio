import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {faGlobe, faCircle} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ParagraphTitle from "./ParagraphTitle";
import ParagraphSubtitle from "./ParagraphSubtitle";

export default class Projects extends React.Component<{}, ProjectState> {

    state = {
        projects: [],
    }

    /**
     *
     * Runs when the component gets mounted
     * In this case we use it to load the data that we are going to display on the site.
     * This should make it easier for me to add new content without to much hastle
     *
     * @return {void} Returns nothing
     *
     */
    componentDidMount(): void {

        fetch(process.env.PUBLIC_URL + "/data/projects.json", {
            method: "GET"
        }).then(response => response.json().then(data => this.setState({projects: data})));

    }

    /**
     *
     * Opens a popover with more information about the project.
     *
     * TODO We need to figure out how we do this in the JSON files,
     * TODO Either we make a small program that combines them all or we make a webserver that serves those when it gets requested by the site itself.
     *
     * We sorta fixed this, But now I need to figure out how to do it on a per project basis.
     *
     * @param id
     *
     * @return {void} - Returns nothing, read above why
     *
     */


    /**
     *
     * Renders the elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    render(): JSX.Element {
        return (
            <div>
                <div className="md:flex">
                    <div className="text-center md:text-left">
                        <ParagraphTitle>Projects</ParagraphTitle>
                        <ParagraphSubtitle>All the project I have done, or still working on</ParagraphSubtitle>
                    </div>
                </div>

                <div className="mt-2 flex flex-wrap">
                    {this.state.projects.length === 0 ? this.renderLoadingObjects() : this.state.projects.map((data: any) => {
                            return (
                                <div key={data.key} className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                                    <div className={"flex m-1 bg-gray-900 border-gray-800  shadow rounded-lg"}>
                                        <div className={"flex flex-col flex-1"}>
                                            <div className={"flex"}>
                                                <Link to={`/project/${data.key}`}
                                                      className="p-2 flex-1 text-xl font-bold border-b-2 border-gray-800">{data.title}</Link>
                                                <div className="flex">
                                                    {data.url !== undefined ?
                                                        <a
                                                            className={`flex p-4 border-b-2 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}
                                                            href={data.url}>
                                                            <FontAwesomeIcon icon={faGlobe}/>
                                                        </a> :
                                                        ""
                                                    }
                                                    {/* The GenericDevelopment GitLab instance is offline. */}
                                                    {/*{data.source_control.gitlab != undefined ?*/}
                                                    {/*    <a*/}
                                                    {/*        className={`flex p-4 border-b-2 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}*/}
                                                    {/*        href={data.source_control.gitlab}>*/}
                                                    {/*        <FontAwesomeIcon icon={faGitlab}/>*/}
                                                    {/*    </a> :*/}
                                                    {/*    ""*/}
                                                    {/*}*/}
                                                    {data.source_control.github !== undefined ?
                                                        <a
                                                            className={`flex p-4 border-b-2 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}
                                                            href={data.source_control.github}>
                                                            <FontAwesomeIcon icon={faGithub}/>
                                                        </a> :
                                                        ""
                                                    }
                                                </div>
                                            </div>
                                            <p className={"p-2 font-light"}>{data.short_description}</p>

                                        </div>
                                    </div>
                                </div>
                            )
                        },
                    )}
                </div>
            </div>
        )
    };


    /**
     *
     * Renders the the loading objects which are meant to be placeholders while the projects are retrieved. This normally happens instantly.
     *
     * But i'd like to give an indication that something is loading if for whatever reason the internet connection drops while the website opens
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    renderLoadingObjects(): JSX.Element {
        return (
            <Fragment>
                <div className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                    <div className={"flex m-1 bg-gray-900 border-gray-800  shadow rounded-lg"}>
                        <div className={"animate-pulse flex flex-col flex-1"}>
                            <div className={"flex"}>
                                <Link to={`/projects/2`}
                                      className="p-2 flex-1 text-xl font-bold border-b-2 border-gray-800">
                                    <div className={"h-8 bg-gray-800 rounded w-3/4"}></div>
                                </Link>
                                <div className="flex">
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"p-2 font-light space-y-2"}>
                                <div className={"h-5 bg-gray-800 rounded w-3/4"}></div>
                                <div className={"h-5 bg-gray-800 rounded w-1/2"}></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                    <div className={"flex m-1 bg-gray-900 border-gray-800  shadow rounded-lg"}>
                        <div className={"animate-pulse flex flex-col flex-1"}>
                            <div className={"flex"}>
                                <Link to={`/projects/2`}
                                      className="p-2 flex-1 text-xl font-bold border-b-2 border-gray-800">
                                    <div className={"h-8 bg-gray-800 rounded w-3/4"}></div>
                                </Link>
                                <div className="flex">
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"p-2 font-light space-y-2"}>
                                <div className={"h-5 bg-gray-800 rounded w-3/4"}></div>
                                <div className={"h-5 bg-gray-800 rounded w-1/2"}></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                    <div className={"flex m-1 bg-gray-900 border-gray-800  shadow rounded-lg"}>
                        <div className={"animate-pulse flex flex-col flex-1"}>
                            <div className={"flex"}>
                                <Link to={`/projects/2`}
                                      className="p-2 flex-1 text-xl font-bold border-b-2 border-gray-800">
                                    <div className={"h-8 bg-gray-800 rounded w-3/4"}></div>
                                </Link>
                                <div className="flex">
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"p-2 font-light space-y-2"}>
                                <div className={"h-5 bg-gray-800 rounded w-3/4"}></div>
                                <div className={"h-5 bg-gray-800 rounded w-1/2"}></div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={"xl:w-3/12 lg:w-4/12 md:w-6/12 w-full"}>
                    <div className={"flex m-1 bg-gray-900 border-gray-800  shadow rounded-lg"}>
                        <div className={"animate-pulse flex flex-col flex-1"}>
                            <div className={"flex"}>
                                <Link to={`/projects/2`}
                                      className="p-2 flex-1 text-xl font-bold border-b-2 border-gray-800">
                                    <div className={"h-8 bg-gray-800 rounded w-3/4"}></div>
                                </Link>
                                <div className="flex">
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                    <div
                                        className={`flex p-4 border-b-2 text-gray-800 border-gray-800 hover:bg-gray-800 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition duration-150 ease-in-out`}>
                                        <FontAwesomeIcon icon={faCircle}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"p-2 font-light space-y-2"}>
                                <div className={"h-5 bg-gray-800 rounded w-3/4"}></div>
                                <div className={"h-5 bg-gray-800 rounded w-1/2"}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    };

};