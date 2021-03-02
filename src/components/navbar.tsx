import Link from "next/link"
import Image from "next/image"
import styles from "./navbar.module.scss"
import {useRouter} from 'next/router';

import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExternalLinkAlt, faMoon, faSun, faUser} from "@fortawesome/free-solid-svg-icons/";
import Button from "./button";
import {DateTime} from "luxon";
import React, {Fragment} from "react";

// @TODO put more in the module.css file of this file to clean it up of css statements and easy manipulation without searching
const darkHover = " dark:hover:bg-gray-700 dark:border-white"
const inactiveNav = styles.navItemInactive + darkHover;
const activeNav = styles.navItemActive + darkHover;
const navButton = styles.navButton + darkHover

interface CVState {
    progress: "success" | "info" | "danger";
    message?: string;

}

export default function Navbar(props) {

    const router = useRouter();
    const [navBarOpen, setNavBarOpen] = useState(false);
    const [cv, setCv] = useState<CVState>({progress: "success", message: "Download CV"})

    const path = router.pathname;

    const handleKeypress = (event: KeyboardEvent) => {

        if (!event.ctrlKey) {
            if (event.code === "KeyG") {
                router.push("/games");
            }
        }

        if (event.ctrlKey && event.code === "KeyP") {
            event.preventDefault();
            generateCV();

        }
    }

    const downloadCVBeforePrint = (event: Event) => {
        event.preventDefault();
        generateCV();
    }


    useEffect(() => {
        window.addEventListener("keydown", handleKeypress)
        return () => {
            window.removeEventListener("keydown", handleKeypress)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("beforeprint", downloadCVBeforePrint)
        return () => {
            window.removeEventListener("beforeprint", downloadCVBeforePrint)
        }
    }, [])

    return (
        <div className={styles.navbar + " dark:bg-gray-800 dark:text-white dark:border-gray-500"}>

            <div className={"flex flex-1 border-b-1 border-gray-100 lg:border-b-0"}>
                <Link href={"/"}>
                    <div className={"px-4 w-auto flex w-48 items-center border-gray-100 cursor-pointer"}>
                        <Image
                            alt={"Picture of tigo"}
                            src={"/img/profilepicture.png"}
                            height={32}
                            width={32}
                            className={"rounded-full"}
                        />
                        <p className={"ml-2 jetbrains"}>Tigo Middelkoop</p>
                    </div>
                </Link>
                <div className={"flex flex-1"}/>
                <div className={"h-14"}>
                    <button onClick={() => setNavBarOpen(!navBarOpen)}
                            className={styles.navMenuButton + " self-center h-14"}>
                        <FontAwesomeIcon icon={faBars}/>
                    </button>
                </div>
            </div>
            <div className={!navBarOpen ? "hidden lg:block" : "block"}>
                <div className={"flex flex-col lg:flex-row lg:items-center border-red-700"}>
                    <Link href={"/"}>
                        <div className={path == "/" ? activeNav : inactiveNav}>
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link href={"/clients"}>
                        <div className={path.includes("/clients") ? activeNav : inactiveNav}>
                            <p>Clients</p>
                        </div>
                    </Link>
                    <Link href={"/projects"}>
                        <div className={path.includes("/projects") ? activeNav : inactiveNav}>
                            <p>Projects</p>
                        </div>
                    </Link>
                    <Link href={"https://blog.tigo.tech"}>
                        <div className={path == "/blog" ? activeNav : inactiveNav}>
                            <p className={"mr-1"}>Blog</p>
                            <FontAwesomeIcon className={"h-3 text-gray-500"} icon={faExternalLinkAlt}/>
                        </div>
                    </Link>
                    <Link href={"https://infra.tigo.tech"}>
                        <div>
                            <div className={`${path == "/blog" ? activeNav : inactiveNav}`}>
                                <p className={"mr-1"}>Infrastructure</p>
                                <FontAwesomeIcon className={"h-3 text-gray-500"} icon={faExternalLinkAlt}/>
                            </div>
                        </div>
                    </Link>
                    <div>
                        <div onClick={generateCV}>
                            <Button className={"w-auto mx-2 my-2 lg:my-0 lg:w-48 text-center"} color={cv.progress}>
                                <div className={"flex items-center justify-center"}>
                                    {cv.progress == "info" ? <div
                                        className={"mr-1.5 h-4 w-4 bg-blue-400 rounded-full animate-pulse items-center"}/> : ""}
                                    <div>{cv.message}</div>

                                </div>
                            </Button>
                        </div>
                    </div>
                    <div className={"flex h-14"}>
                        <button onClick={props.changeTheme} className={navButton}>
                            {props.theme == "light" ?
                                <Fragment><FontAwesomeIcon className={"h-4"} icon={faMoon}/><span className={"ml-2 lg:hidden"}>Toggle Darkmode</span></Fragment> :
                                <Fragment><FontAwesomeIcon className={"h-4"} icon={faSun}/><span className={"ml-2 lg:hidden"}>Toggle Lightmode</span></Fragment>}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

    async function generateCV() {
        setCv({progress: "info", message: "Downloading CV"})

        const timeGenerated = DateTime.local().setZone("Europe/Amsterdam");
        const filename = `TigoMiddelkoop (CV) [Generated at ${timeGenerated.toLocaleString(DateTime.DATE_SHORT)}].pdf`

        fetch("/api/generatecv").then(response => {

            if (response.status == 502) {
                setCv({progress: "danger", message: "Downloading CV failed"})
                return
            }
            response.blob().then(pdfBlob => {

                let pdf = new File([pdfBlob], filename)
                const objUrl = window.URL.createObjectURL(pdf);

                let link = document.createElement("a")
                link.href = objUrl;
                link.download = filename;
                link.click();
                setCv({progress: "success", message: "CV Downloaded"});


                setTimeout(() => setCv({progress: "success", message: "Download CV"}), 5000);
                setTimeout(() => {
                    window.URL.revokeObjectURL(objUrl);
                }, 250);
            })
        }).catch(err => {
            console.error(err);
            setCv({progress: "danger", message: "Downloading CV failed"})
        });
    }
}


