"use client"
import Image from "next/image"
import {useRouter} from 'next/navigation';

import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExternalLinkAlt, faMoon, faSun, faUser} from "@fortawesome/free-solid-svg-icons";
import React, {Fragment} from "react";
import Link from "next/link";

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
        <div className={"fixed top-0 w-full xl:w-3/4 backdrop-blur border-b border-purple-600 dark:border-slate-600"}>
            <div className={"px-4 grid grid-cols-4 justify-between h-16 items-center"}>
                <div className={"h-10 flex items-center"}>
                    <Image
                        className={"rounded-full border border-purple-600 dark:border-slate-600 shadow-lg h-10 w-10"}
                        alt="Tigo"
                        src={"/img/pf_new.jpg"}
                        style={{objectFit: "cover"}}
                        height={64}
                        width={64}
                    />
                    <div className={"text-2xl hidden xl:flex ml-2"}>
                        <h1><span className={"font-black"}>Tigo</span></h1>
                        <h1><span className={"font-light"}>Middelkoop</span></h1>
                    </div>
                </div>

                <div
                    className={"col-span-2 flex justify-center items-center "}>
                    <div className={"flex py-2 px-6 text-md bg-black/[0.2] border border-purple-600 dark:border-slate-600 rounded-full shadow-lg space-x-2 overflow-auto xl:overflow-none scroll-hidden"}>
                        <Link href={"/"}
                              className={"hover:text-purple-600 dark:hover:text-slate-600"}>Experiences</Link>
                        <Link href={"/"} className={"hover:text-purple-600 dark:hover:text-slate-600"}>Projects</Link>
                        <Link href={"/"} className={"hover:text-purple-600 dark:hover:text-slate-600"}>Socials</Link>
                    </div>
                </div>
                {/*<button onClick={props.changeTheme} className={navButton}>*/}
                <div
                    className={"flex justify-end"}>
                    <button
                        className={"h-10 w-10 border border-purple-600  dark:border-slate-600 rounded-full shadow-lg"}>
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
        </div>
    )
}


