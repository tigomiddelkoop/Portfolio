import Link from "next/link"
import Image from "next/image"
import styles from "./navbar.module.scss"
import Pill from "./pill";
import {useRouter} from 'next/router';

import {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faMoon} from "@fortawesome/free-solid-svg-icons";

// @TODO put more in the module.css file of this file to clean it up of css statements and easy manipulation without searching
const darkHover = " dark:hover:bg-gray-800"
const inactiveNav = styles.navItemInactive + darkHover;
const activeNav = styles.navItemActive + darkHover;
const navButton = styles.navButton + darkHover

export default function Navbar(props, test) {

    const router = useRouter();
    const [navBarOpen, setNavBarOpen] = useState(false);
    const path = router.pathname;

    return (
        <div className={styles.navbar + " dark:bg-gray-900 dark:text-white dark:border-gray-500"}>

            <div className={"flex flex-1 border-b-1 border-gray-100 md:border-b-0"}>
                <Link href={"/"}>
                    <div className={"px-4 w-auto flex w-48 items-center cursor-pointer"}>
                        <Image
                            alt={"Picture of tigo"}
                            src={"/img/profilepicture.png"}
                            height={32}
                            width={32}
                            className={"rounded-full"}
                        />
                        <p className={"ml-2"}>Tigo Middelkoop</p>
                    </div>
                </Link>
                <div className={"flex flex-1 lg:text-xl dark:text-white items-center justify-center"}>
                    <p className={"hidden lg:block animate-pulse text-red-500"}>Work in Progress, thought I might share the progress</p>
                </div>
                <div>
                    <button onClick={() => setNavBarOpen(!navBarOpen)}
                            className={styles.navMenuButton + " self-center"}>
                        <Image height={24}
                               width={16}
                               src={"/bars-solid.svg"}/>
                    </button>
                </div>
            </div>

            <div
                className={!navBarOpen ? "hidden lg:block" : "block"}>
                <div className={"flex flex-col lg:flex-row lg:items-center border-red-700"}>
                    <Link href={"/"}>
                        <div className={path == "/" ? activeNav : inactiveNav}>
                            <p>Home</p>
                        </div>
                    </Link>
                    <Link href={"/clients"}>
                        <div className={path == "/clients" ? activeNav : inactiveNav}>
                            <p className={"mr-1"}>Clients</p>
                            <Pill color={"success"}>New!</Pill>
                        </div>
                    </Link>
                    <Link href={"/projects"}>
                        <div className={path == "/projects" ? activeNav : inactiveNav}>
                            <p className={"mr-1"}>Projects</p>
                            <Pill color={"success"}>New!</Pill>
                        </div>
                    </Link>
                    <Link href={"/blog"}>
                        <div className={path == "/blog" ? activeNav : inactiveNav}>
                            <p className={"mr-1"}>Blog</p>
                            <Pill color={"danger"}>Expected</Pill>
                        </div>
                    </Link>
                    <div className={"flex"}>
                        <Link href={"/login"}>
                            <div className={navButton}>
                            <Image height={24}
                                   width={16}
                                   src={"/svg/user-solid.svg"}/>
                            </div>
                        </Link>
                        <button className={navButton}>
                            <Image height={24}
                                   width={16}
                                   src={"/svg/moon-solid.svg"}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
