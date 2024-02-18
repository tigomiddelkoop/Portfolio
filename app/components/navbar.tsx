"use client"
import Image from "next/image"
import {useRouter} from 'next/navigation';

import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faExternalLinkAlt, faMoon, faSun, faUser} from "@fortawesome/free-solid-svg-icons";
import React, {Fragment} from "react";
import Link from "next/link";
import Button from "@/app/components/button";

export default function Navbar(props: { changeTheme?: any, theme: string}) {

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
                <Link href={"/"}>
                    <div className={"h-10 flex items-center"}>

                        <Image
                            className={"rounded-full bg-black/[0.2] border border-purple-600 dark:border-slate-600 shadow-lg h-10 w-10"}
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
                </Link>

                <div
                    className={"col-span-2 flex justify-center items-center "}>
                    <div
                        className={"flex py-2 px-6 xl:px-8 text-md bg-black/[0.2] border border-purple-600 dark:border-slate-600 rounded-full shadow-lg space-x-2 xl:space-x-6 overflow-auto xl:overflow-none scroll-hidden"}>
                        <Link href={"/"}
                              className={"hover:text-purple-600 dark:hover:text-slate-600"}>Skills</Link>
                        <Link href={"/"} className={"hover:text-purple-600 dark:hover:text-slate-600"}>Projects</Link>
                        <Link href={"/"} className={"hover:text-purple-600 dark:hover:text-slate-600"}>Socials</Link>
                    </div>
                </div>

                <div
                    className={"flex justify-end"}>
                    <Button
                        onClick={props.changeTheme}
                        className={"xl:min-w-32"}
                        >
                        {props.theme == "light" ?
                            <div className={"block xl:min-w-32 xl:flex xl:items-center xl:justify-center"}>
                                <FontAwesomeIcon className={"h-4"} icon={faMoon}/>
                                <p className={"hidden xl:block ml-2"}>Activate Night</p>
                            </div>
                            :
                            <div className={"block xl:min-w-32 xl:flex xl:items-center xl:justify-center"}>
                                <FontAwesomeIcon className={"h-4"} icon={faSun}/>
                                <p className={"hidden xl:block ml-2"}>Activate Day</p>
                            </div>
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}


