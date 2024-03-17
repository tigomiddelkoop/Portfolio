"use client"

import Button from "./components/Button"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons"
import React, { Fragment, useEffect, useState } from "react"
import Separator from "@/app/components/Separator"
import SkillCard from "./components/SkillCard"
import Title from "@/app/components/Title"
import SubTitle from "@/app/components/SubTitle"
import Container from "@/app/components/Container"

export default function Home() {
    const [projects, setProjects] = useState([])

    useEffect((): void => {
        async function fetchData(): Promise<void> {
            const response = await fetch("/api/projects")
            const result = await response.json()
            setProjects(result)
        }

        fetchData().then(() => console.log("Projects Retrieved"))
    }, [])

    return (
        <Fragment>
            <div
                className={
                    "flex h-screen flex-col items-center justify-center px-4 py-6 dark:border-gray-600 xl:px-12 xl:py-10"
                }
            >
                <div className="mb-3 flex flex-row items-center justify-center ">
                    <Image
                        className={
                            "mr-4 h-24 w-24 rounded-full border-2 border-purple-900 shadow-lg dark:border-slate-900 xl:h-32 xl:w-32"
                        }
                        alt="Tigo"
                        src={"/img/pf_new.jpg"}
                        style={{ objectFit: "cover" }}
                        height={256}
                        width={256}
                    />

                    <div
                        className={
                            "bg-gradient-to-br from-white to-purple-600 bg-clip-text text-center text-transparent dark:to-slate-600"
                        }
                    >
                        <h1 className="mb-1 text-4xl md:text-6xl">
                            <span className={"font-black"}>Tigo</span>
                            <span className={"font-light"}>Middelkoop</span>
                        </h1>
                        <h4 className="text-1xl font-bold md:text-2xl">
                            Cloud Engineer & Fullstack Developer
                        </h4>
                    </div>
                </div>

                {/*Job function and quick summary of languages*/}
                <div
                    className={
                        "mb-2 h-auto text-wrap p-0 text-center font-black text-purple-300 dark:text-slate-300"
                    }
                >
                    <p>
                        PHP, TypeScript
                        <span className={"text-xs font-light"}>
                            /JavaScript
                        </span>
                        , Rust, Linux{" "}
                        <span className={"text-xs font-light"}>
                            (Arch, Debian)
                        </span>
                        , Kubernetes & Docker
                    </p>
                </div>

                <div className={"flex justify-center space-x-1"}>
                    <a
                        rel={"noreferrer noopener _blank"}
                        href={"https://github.com/tigomiddelkoop"}
                    >
                        <Button color={"primary"}>
                            <div className={"flex items-center space-x-1"}>
                                <FontAwesomeIcon height={12} icon={faGithub} />
                                <p className={"text-sm"}>GitHub</p>
                            </div>
                        </Button>
                    </a>

                    <a
                        rel={"noreferrer noopener _blank"}
                        href={
                            "https://linkedin.com/in/tigo-middelkoop-92067a15b/"
                        }
                    >
                        <Button color={"primary"}>
                            <div className={"flex items-center space-x-1"}>
                                <FontAwesomeIcon
                                    height={16}
                                    icon={faLinkedin}
                                />
                                <p className={"text-sm"}>LinkedIn</p>
                            </div>
                        </Button>
                    </a>
                </div>
            </div>

            <div
                className={
                    "absolute bottom-5 -z-10 flex w-full animate-bounce flex-col text-center text-purple-300 dark:text-slate-300"
                }
            >
                <p className={"mb-2 text-xs font-bold"}>
                    Skills, Projects & Socials
                </p>
                <FontAwesomeIcon height={16} icon={faAnglesDown} />
            </div>

            <Separator classNames={"mb-8"} />

            <Container>
                <div>
                    <Title>About me</Title>
                    <SubTitle>WHO AM I?!?!?!?!?!</SubTitle>
                </div>

                <p className={"font-normal"}>
                    Hi! I'm, as you have probably seen up top, Tigo. I
                    specialise in building Clouds using mostly Kubernetes. I
                    also love doing stuff with baremetal servers
                </p>
                {/*
            Talk about yourself a bit more, what you do, your hobbies and your current work. Might also be intresting to show of your home setup using TALOS,
            Maybe run this whole site on there including SystemManager and everything else :)
            */}
            </Container>

            <Separator classNames={"w-1/2 my-8"} />

            <Container id={"experiences"}>
                <div>
                    <Title>Experiences</Title>
                    <SubTitle>The things I have experience in</SubTitle>
                </div>

                <div
                    className={
                        "xl:w-7/8 xl2:grid-cols-4 -z-10 mt-5 grid w-full grid-flow-dense grid-cols-1 gap-2 p-2 text-center md:w-3/4 lg:w-5/6 lg:grid-cols-2 xl:grid-cols-3 xl:p-0 2xl:w-4/6"
                    }
                >
                    {projects.map((project: any) => {
                        return <SkillCard key={project.name} data={project} />
                    })}
                </div>
            </Container>

            <Separator classNames={"my-8"} />

            <Container id={"projects"}>
                <div className={"text-center"}>
                    <Title>Projects</Title>
                    <SubTitle>Projects i've built</SubTitle>
                </div>

                <div
                    className={
                        "xl:w-7/8 mt-5 grid w-full grid-flow-dense grid-cols-1 gap-4 p-2 text-center md:w-3/4 lg:w-5/6 lg:grid-cols-3 xl:p-0 2xl:w-4/6"
                    }
                >
                    <div
                        className={
                            "col-span-1 rounded-lg border-2 border-purple-600 p-2 dark:border-slate-600"
                        }
                    >
                        Project 1
                    </div>
                    <div
                        className={
                            "col-span-1 rounded-lg border-2 border-purple-600 p-2 dark:border-slate-600"
                        }
                    >
                        Project 2
                    </div>
                    <div
                        className={
                            "col-span-1 rounded-lg border-2 border-purple-600 p-2 dark:border-slate-600"
                        }
                    >
                        Project 3
                    </div>
                    <div
                        className={
                            "col-span-1 rounded-lg border-2 border-purple-600 p-2 dark:border-slate-600"
                        }
                    >
                        Project 4
                    </div>
                    <div
                        className={
                            "col-span-1 rounded-lg border-2 border-purple-600 p-2 dark:border-slate-600"
                        }
                    >
                        Project 5
                    </div>
                    <div
                        className={
                            "col-span-1 rounded-lg border-2 border-purple-600 p-2 dark:border-slate-600"
                        }
                    >
                        Project 6
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}
