"use client"
import Image from "next/image"
import styles from "./navbar.module.scss"
import {useRouter} from 'next/navigation';

import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExternalLinkAlt, faMoon, faSun, faUser} from "@fortawesome/free-solid-svg-icons";
import React, {Fragment} from "react";
import Link from "next/link";

// @TODO put more in the module.css file of this file to clean it up of css statements and easy manipulation without searching
const darkHover = " dark:hover:bg-gray-700 dark:border-white"
const inactiveNav = styles.navItemInactive + darkHover;
const activeNav = styles.navItemActive + darkHover + " dark:bg-gray-700";
const navButton = styles.navButton + darkHover

export default function Navbar(props: { changeTheme?: any, theme: "dark" | "light" }) {

    const router = useRouter();
    const [navBarOpen, setNavBarOpen] = useState(false);


    const handleKeypress = (event: KeyboardEvent) => {
        if (!event.ctrlKey) {
            if (event.code === "KeyG") {
                router.push("/games");
            }
        }
    }


    useEffect(() => {
        window.addEventListener("keydown", handleKeypress)
        return () => {
            window.removeEventListener("keydown", handleKeypress)
        }
    }, [])

    return (
        <div className={"fixed top-5 flex items-center"}>
            <div className={"h-10 flex items-center"}>
                <Image
                    className={"rounded-full border-2 shadow-lg border-purple-600 dark:border-slate-700 h-10 w-10"}
                    alt="Tigo"
                    src={"/img/pf_new.jpg"}
                    style={{objectFit: "cover"}}
                    height={64}
                    width={64}
                />
                {/*<div className={"text-2xl hidden xl:flex"}>*/}
                {/*    <h1><span className={"font-black"}>Tigo</span></h1>*/}
                {/*    <h1><span className={"font-light"}>Middelkoop</span></h1>*/}
                {/*</div>*/}
            </div>

            <div
                className={"h-10 text-md mx-2 flex justify-center items-center border-2 py-2 px-4 rounded-full border-purple-600 dark:border-slate-700 shadow-lg space-x-2"}>
                <Link href={"/"} className={"hover:text-purple-600 dark:hover:text-slate-600"}>Experiences</Link>
                <Link href={"/"} className={"hover:text-purple-600 dark:hover:text-slate-600"}>Projects</Link>
                <Link href={"/"} className={"hover:text-purple-600 dark:hover:text-slate-600"}>Socials</Link>
            </div>
            {/*<button onClick={props.changeTheme} className={navButton}>*/}
            <div className={"h-10 w-10 border-2 flex justify-center items-center rounded-full shadow-lg border-purple-600 dark:border-slate-600"}>
                <button>
                    {props.theme == "light" ?
                        <Fragment>
                            <FontAwesomeIcon className={"h-4"} icon={faMoon}/>
                        </Fragment>
                        :
                        <Fragment>
                            <FontAwesomeIcon className={"h-4"} icon={faSun}/>
                        </Fragment>
                    }
                </button>
            </div>

        </div>
    )
}


