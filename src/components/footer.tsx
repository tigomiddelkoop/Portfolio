import Pill from "./pill";
import styles from "./footer.module.scss"
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

    // This might not be the best option, I want to look for a better option.
    const [buildId, setBuildId] = useState("")
    useEffect(() => {
        fetch("/api/buildid").then(response => response.json().then(data => setBuildId(data.buildId)))
    }, [buildId])

    return <footer
        className={"align-bottom p-4 border-t border-b border-gray-100 items-center justify-center text-center dark:bg-gray-800 dark:border-gray-500 dark:text-white"}>
        <h1 className={"text-2xl"}>tigo.tech</h1>
        <div className={"flex flex-col lg:flex-row items-center justify-center text-center"}>
            <div className={styles.categoryContainer}>
                <p className={styles.categoryTitle}>Sites</p>
                <div className={"flex items-center"}><a href={"https://tigo.tech"}
                                                        className={"mr-1"}>tigo.tech</a><Pill color={"info"}>You're
                    here</Pill></div>
                <div className={"flex items-center"}><a href={"https://genericdevelopment.nl"}>GenericDevelopment</a>
                </div>
                <div className={"flex items-center"}><a href={"https://systemmanager.io"}>SystemManager Core</a></div>
            </div>

            <div className={styles.categoryContainer}>
                <div>
                    <p className={styles.categoryTitle}>Socials</p>
                </div>
                <div className={styles.socialMediaCategory}>
                    <a className={styles.socialMediaLink} rel={"noreferrer noopener _blank"}
                       href={"https://github.com/tigomiddelkoop"}><FontAwesomeIcon width={16} className={"mr-1"}
                                                                                   icon={faGithub}/> GitHub</a>

                    <a className={"flex flex-row my-0.5"} rel={"noreferrer noopener _blank"}
                       href={"https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"}><FontAwesomeIcon width={16}
                                                                                                        className={"mr-1"}
                                                                                                        icon={faLinkedin}/> LinkedIn</a>
                    <a className={"flex flex-row my-0.5"} rel={"noreferrer noopener _blank"}
                       href={"https://twitter.com/__Tigo__"}><FontAwesomeIcon width={16}
                                                                              className={"mr-1"}
                                                                              icon={faTwitter}/> Twitter</a>
                </div>
            </div>

            <div className={styles.categoryContainer}>
                <div className={"mb-2"}>
                    <p className={styles.categoryTitle}>Kubernetes info</p>
                    <div className={styles.categorySubTitle}>
                        <p className={"text-xs"}>Its not in kubernetes yet</p>
                        {/*<p className={"text-xs"}>That's right! It's deployed in kubernetes!</p>*/}
                        {/*<p className={"text-xs"}>I'm even learning kubernetes</p>*/}
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <p className={"mr-1"}>Served from node: </p>
                        <Pill color={"danger"}>Not deployed in K8s, yet</Pill>
                    </div>
                </div>
                <div>
                    <p className={styles.footerCategoryTitle}>Site Info</p>
                    <div className={"flex items-center justify-center"}>
                        <p className={"mr-1"}>Build Id:</p>
                        <Pill>{buildId}</Pill>
                    </div>
                </div>
            </div>
        </div>
        <p className={"text-xs font-light"}>All the pictures on this site are made by Tigo and are of the code of this
            site and the
            servers it is hosted on, the site might also contain pictures of projects he has done.</p>
        <p className={"text-xs font-light"}>(I'm trying to not use any stock images, those are no fun to use. I want to
            make them myself)</p>
    </footer>

}