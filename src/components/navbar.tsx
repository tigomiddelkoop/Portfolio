import Link from "next/link"
import Image from "next/image"
import styles from "./navbar.module.scss"
import Pill from "./Pill";

export default function Navbar() {
    return (
        <div className={styles.navbar}>

            <div className={"flex flex-1 py-3 px-4 border-b border-gray-100 md:border-b-0"}>
                <Link href={"/"}>
                    <div className={"flex w-48 items-center cursor-pointer"}>
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
                {/*<div className={styles.navHamburger}><button><Image height={16}*/}
                {/*                                                    width={16}*/}
                {/*                                                    src={"/bars-solid.svg"}/></button></div>*/}
            </div>

            <div className={"flex flex-col md:flex md:flex-row md:items-center border-red-700"}>
                <Link href={"/"}>
                    <div className={styles.navItemInactive}>Home</div>
                </Link>
                <Link href={"/clients"}>
                    <div className={styles.navItemActive + " flex items-center"}>
                        <p className={"mr-1"}>Clients</p>
                        <Pill>New!</Pill>

                    </div>
                </Link>
                <Link href={"/projects"}>
                    <div className={styles.navItemInactive + " flex items-center"}>
                        <p className={"mr-1"}>Projects</p>
                        <Pill>New!</Pill>
                    </div>
                </Link>
                {/*<div className={styles.navButton}>*/}
                {/*    <button className={"flex items-center"}>*/}
                {/*        <Image height={16}*/}
                {/*               width={16}*/}
                {/*               src={"/moon-solid.svg"}/>*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    )

}