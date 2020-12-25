import Link from "next/link"
import Image from "next/image"
import styles from "./navbar.module.scss"
import Pill from "./pill";
import {useRouter} from 'next/router'

import {useState} from "react";

// @TODO put more in the module.css file of this file to clean it up of css statements and easy manipulation without searching

export default function Navbar(props, test) {

    const router = useRouter();
    const [navBarOpen, setNavBarOpen] = useState(false);
    const path = router.pathname;

    return (
        <div className={styles.navbar}>

            <div className={"flex flex-1 border-b border-gray-100 md:border-b-0"}>
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
                <div className={"flex-1"}/>
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
                        <div className={path == "/" ? styles.navItemActive : styles.navItemInactive}>Home</div>
                    </Link>
                    <Link href={"/clients"}>
                        <div className={path == "/clients" ? styles.navItemActive : styles.navItemInactive}>
                            <p className={"mr-1"}>Clients</p>
                            <Pill>New!</Pill>
                        </div>
                    </Link>
                    <Link href={"/projects"}>
                        <div className={path == "/projects" ? styles.navItemActive : styles.navItemInactive}>
                            <p className={"mr-1"}>Projects</p>
                            <Pill>New!</Pill>
                        </div>
                    </Link>
                    <div className={"flex"}>
                        <button className={styles.navButton + " w-12 justify-center"}>
                            <Image height={24}
                                   width={16}
                                   src={"/user-solid.svg"}/>
                        </button>
                        <button className={styles.navButton}>
                            <Image height={24}
                                   width={16}
                                   src={"/moon-solid.svg"}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
