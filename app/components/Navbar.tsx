"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"
import React, { Fragment } from "react"
import Link from "next/link"
import Button from "@/app/components/Button"
import Separator from "@/app/components/Separator"

interface Props {
    changeTheme?: any
    theme: string
}

export default function Navbar(props: Props): React.JSX.Element {
    const router = useRouter()
    const [navBarOpen, setNavBarOpen] = useState(false)

    return (
        <div className={"fixed top-0 w-full backdrop-blur-3xl"}>
            <div className={"flex w-full items-center justify-center"}>
                <div
                    className={
                        "grid h-16 w-full grid-cols-2 items-center justify-between px-4 md:grid-cols-4 lg:w-3/4"
                    }
                >
                    <Link href={"/"}>
                        <div className={"flex h-10 items-center"}>
                            <Image
                                className={
                                    "h-10 w-10 rounded-full border border-purple-600 bg-black/[0.2] shadow-lg dark:border-slate-600"
                                }
                                alt="Tigo"
                                src={"/img/pf_new.jpg"}
                                style={{ objectFit: "cover" }}
                                height={64}
                                width={64}
                            />
                            <div
                                className={
                                    "ml-2 bg-gradient-to-br from-white to-purple-600 bg-clip-text text-2xl font-bold text-transparent dark:to-slate-600 xl:flex"
                                }
                            >
                                <h1>
                                    <span className={"font-black"}>T</span>igo
                                    <span className={"font-black"}>M</span>
                                    iddelkoop
                                </h1>
                            </div>
                        </div>
                    </Link>

                    <div
                        className={
                            "col-span-2 hidden items-center justify-center md:flex"
                        }
                    >
                        {getNavbar()}
                    </div>

                    <div className={"flex justify-end space-x-2"}>
                        <Button
                            onClick={props.changeTheme}
                            className={"xl:min-w-32"}
                        >
                            {props.theme == "light" ? (
                                <div
                                    className={
                                        "block xl:flex xl:min-w-32 xl:items-center xl:justify-center"
                                    }
                                >
                                    <FontAwesomeIcon
                                        className={"h-4"}
                                        icon={faMoon}
                                    />
                                    <p className={"ml-2 hidden xl:block"}>
                                        Activate Night
                                    </p>
                                </div>
                            ) : (
                                <div
                                    className={
                                        "block xl:flex xl:min-w-32 xl:items-center xl:justify-center"
                                    }
                                >
                                    <FontAwesomeIcon
                                        className={"h-4"}
                                        icon={faSun}
                                    />
                                    <p className={"ml-2 hidden xl:block"}>
                                        Activate Day
                                    </p>
                                </div>
                            )}
                        </Button>
                    </div>
                </div>
            </div>

            <div
                className={
                    "col-span-2 mb-2 flex w-full items-center justify-center md:hidden"
                }
            >
                {getNavbar()}
            </div>

            <Separator />
        </div>
    )
}

function getNavbar() {
    return (
        <div
            className={
                "text-md xl:overflow-none scroll-hidden mx-4 flex justify-center space-x-2 overflow-auto rounded-full border border-purple-600 bg-black/[0.2] px-6 py-2 shadow-lg dark:border-slate-600 xl:space-x-6 xl:px-8"
            }
        >
            <Link
                href={"/#experiences"}
                className={"hover:text-purple-600 dark:hover:text-slate-600"}
            >
                Experiences
            </Link>
            <Link
                href={"/#projects"}
                className={"hover:text-purple-600 dark:hover:text-slate-600"}
            >
                Projects
            </Link>
            <Link
                href={"/"}
                className={"hover:text-purple-600 dark:hover:text-slate-600"}
            >
                Socials
            </Link>
        </div>
    )
}
