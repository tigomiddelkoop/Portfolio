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
import ProjectCard from "@/app/components/ProjectCard"
import Grid from "@/app/components/Grid"

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
                <div className="mb-3 flex flex-col items-center justify-center md:flex-row ">
                    <Image
                        className={
                            "h-24 w-24 rounded-full border-2 border-purple-900 shadow-lg dark:border-slate-900 xl:mr-4 xl:h-32 xl:w-32"
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
                            <span className={"font-black"}>T</span>
                            <span className={"font-normal"}>igo</span>
                            <span className={"font-black"}>M</span>
                            <span className={"font-normal"}>iddelkoop</span>
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

            <Separator className={"mb-8"} />

            <Container>
                <div>
                    <Title>About me</Title>
                    <SubTitle>Who am I? You'll read below!</SubTitle>
                </div>

                <p className={"p-2 font-normal"}>
                    Hi! I'm, as you have probably seen up top, Tigo. I
                    specialise in building Clouds using mostly Kubernetes. I
                    also love doing stuff with baremetal servers
                </p>
                {/*
            Talk about yourself a bit more, what you do, your hobbies and your current work. Might also be interesting to show of your home setup using TALOS,
            Maybe run this whole site on there including SystemManager and everything else :)
            */}
            </Container>

            <Separator className={"my-8 w-1/2"} />

            <Container id={"experience"}>
                <div className={"text-center"}>
                    <Title>Experience</Title>
                    <SubTitle>
                        The software, tooling and others I have experience with
                    </SubTitle>
                </div>

                <Grid>
                    {projects.map((project: any) => {
                        return <SkillCard key={project.name} data={project} />
                    })}
                </Grid>
            </Container>

            <Separator className={"my-8"} />

            <Container id={"projects"}>
                <div className={"text-center"}>
                    <Title>Projects</Title>
                    <SubTitle>Projects i've built</SubTitle>
                </div>

                <Grid>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </Grid>
            </Container>
        </Fragment>
    )
}
