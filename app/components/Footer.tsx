"use client"

import Pill from "./Pill";
import styles from "./footer.module.scss"
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Separator from "@/app/components/Separator";

export default function Footer(): React.JSX.Element  {

    // This might not be the best option, I want to look for a better option.
    const [buildId, setBuildId] = useState("Production")
    // useEffect(() => {
    //     if (buildId == "") {
    //         fetch("/api/buildid").then(response => response.json().then(data => setBuildId(data.buildId)))
    //     }
    // }, [buildId])

    const footerLink = styles.link + " dark:hover:bg-pink-700 items-center"
    const footerLinkActive = styles.link + " dark:hover:bg-pink-700 items-center border border-rounded border-white"

    return <footer>
        <Separator classNames={"mt-2"}/>
        <div className={"backdrop-blur-3xl text-white align-bottom p-4 border-gray-100 items-center justify-center text-center dark:border-gray-500"}>
            <h1 className={"text-2xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-br from-white dark:to-slate-600 to-purple-600"}>tigo.tech</h1>

            <div className={"flex flex-col lg:flex-row justify-center text-center"}>
                <div className={styles.categoryContainer}>
                    <p className={styles.categoryTitle}>My other projects</p>
                    <a className={""} href={"https://tigo.tech"}>tigo.tech</a>
                    <a className={""} href={"https://genericdevelopment.nl"}>GenericDevelopment</a>
                    <a className={""} href={"https://systemmanager.io"}>SystemManager Core</a>
                </div>

                <div className={styles.categoryContainer}>
                    <div>
                        <p className={styles.categoryTitle}>Find me here</p>
                    </div>
                    <div className={styles.socialMediaCategory}>
                        <a className={footerLink} rel={"noreferrer noopener _blank"}
                           href={"https://github.com/tigomiddelkoop"}><FontAwesomeIcon width={16} className={"mr-1"}
                                                                                       icon={faGithub}/> GitHub</a>

                        <a className={footerLink} rel={"noreferrer noopener _blank"}
                           href={"https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"}><FontAwesomeIcon width={16}
                                                                                                            className={"mr-1"}
                                                                                                            icon={faLinkedin}/> LinkedIn</a>
                    </div>
                </div>

                <div className={styles.categoryContainer}>
                    {/*<div className={"mb-2"}>*/}
                    {/*    <p className={styles.categoryTitle + ""}>Kubernetes info</p>*/}
                    {/*</div>*/}
                    <div>
                        <p className={styles.categoryTitle}>Site Build Info</p>
                        <div className={"flex items-center justify-center"}>
                            <p className={"mr-1"}>Build ID:</p>
                            <Pill className={""}>{buildId}</Pill>
                        </div>
                    </div>
                </div>
            </div>
            <p className={"text-xs"}>
                All the pictures on this site are made by Tigo and are of his code and the servers it is hosted
                on.
            </p>
        </div>
    </footer>
}