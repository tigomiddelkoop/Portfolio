import Pill from "./pill";
import styles from "./footer.module.scss"
import {useEffect, useState} from "react";

export default function Footer() {

    const [buildId, setBuildId] = useState("")

    useEffect(() => {
        fetch("/api/buildid").then(response => response.json().then(data => setBuildId(data.buildId)))
    }, [buildId])

    return <footer
        className={"align-bottom p-4 border-t border-b border-gray-100 items-center justify-center text-center dark:bg-gray-800 dark:border-gray-500 dark:text-white"}>
        <h1 className={"text-2xl"}>tigo.tech</h1>
        <div className={"flex flex-col lg:flex-row items-center justify-center text-center"}>
            <div className={styles.footerCategoryContainer}>
                <p className={styles.footerCategoryTitle}>Sites</p>
                <div className={"flex items-center"}><a href={"https://tigo.tech"}
                                                        className={"mr-1"}>tigo.tech</a><Pill color={"info"}>You're
                    here</Pill></div>
                <div className={"flex items-center"}><a href={"https://genericdevelopment.nl"}>GenericDevelopment</a>
                </div>
                <div className={"flex items-center"}><a href={"https://systemmanager.io"}>SystemManager Core</a></div>
            </div>

            <div className={styles.footerCategoryContainer}>
                <p className={styles.footerCategoryTitle}>Socials</p>
                <p className={styles.footerCategorySubTitle}>These socials I am willing to give</p>
                <div><a rel={"noreferrer noopener _blank"} href={"https://github.com/tigomiddelkoop"}>GitHub</a></div>
                <div><a rel={"noreferrer noopener _blank"}
                        href={"https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"}>LinkedIn</a></div>
                {/*<div><a>Twitter</a></div>*/}
            </div>

            <div className={styles.footerCategoryContainer}>
                <div className={"mb-2"}>
                    <p className={styles.footerCategoryTitle}>Kubernetes info</p>
                    <div className={styles.footerCategorySubTitle}>
                        <p className={"text-xs"}>Its not in kubernetes yet</p>
                        {/*<p className={"text-xs"}>That's right! It's deployed in kubernetes!</p>*/}
                        {/*<p className={"text-xs"}>I'm even learning kubernetes</p>*/}
                    </div>
                    <div className={"flex items-center justify-center"}>
                        <p className={"mr-1"}>Served from node: </p>
                        <Pill>unknown</Pill>
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
        <p className={"text-xs"}>All the pictures on this site are made by Tigo and are of the code of this site and the
            servers it is hosted on, the site might also contain pictures of projects he has done.</p>
    </footer>

}