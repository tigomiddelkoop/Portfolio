import Head from 'next/head';
import Button from "./components/button";
import Image from "next/image";
// import SkillsCard from "./components/home/skillcard";
// import {getData} from "./api/home";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import React, {Fragment} from "react";
import SkillsCard from "@/app/components/home/SkillsCard";

export default function Home() {


    const skills: Array<
        {
            name: string,
            subname: string,
            // image?: string,
            image: string,
            entries: {
                enabled: boolean
                name: string
                extras: Array<string>
                confidence: number
                date: string
            }
        }
    > = [{
        name: "Developing",
        subname: "Is Cool",
        image: "none",
        entries: {
            enabled: true,
            name: "Developing",
            extras: ["Is Cool"],
            confidence: 50,
            date: "2024-01-01"
        }
    }];

    return (
        <div
            className={"w-full flex flex-col items-center"}>

            {/* Name part */}
            <div
                className={"h-screen flex flex-col justify-center items-center border-b-2 dark:border-gray-600 mb-4 px-4 py-6 xl:px-12 xl:py-10 w-full xl:w-auto"}>
                <div className="flex flex-row  mb-3 justify-center items-center">
                    <Image
                        className={"rounded-full border-2 dark:border-gray-400 shadow-lg xl:h-32 xl:w-32 h-24 w-24 mr-4"}
                        alt="Tigo"
                        src={"/img/pf_new.jpg"}
                        style={{objectFit: "cover"}}
                        height={256}
                        width={256}
                    />

                    <div className={"bg-clip-text text-transparent bg-gradient-to-br from-white dark:to-slate-500 to-purple-500 text-center"}>
                        <h1
                            className="text-4xl md:text-6xl font-light mb-1">
                            <span className={"font-bold"}>Tigo</span>Middelkoop
                        </h1>
                        <h4
                            className="text-1xl md:text-2xl">
                            Cloud Engineer & Fullstack Developer
                        </h4>
                    </div>
                </div>

                 {/*Job function and quick summary of languages*/}
                <div
                    className={"mb-2 p-0 h-auto text-s text-center text-wrap"}>
                    <p>
                        <span className={"font-bold"}>Languages: </span> PHP, JavaScript/TypeScript & Rust
                    </p>
                    <p>
                        <span className={"font-bold"}>Hosting: </span> Kubernetes & Docker
                    </p>
                </div>

                <div className={"flex justify-center space-x-1"}>
                    <a rel={"noreferrer noopener _blank"}
                       href={"https://github.com/tigomiddelkoop"}>
                        <Button color={"primary"}>
                            <div className={"flex items-center space-x-1"}>
                                <FontAwesomeIcon height={12} icon={faGithub}/>
                                <p className={"text-sm"}>GitHub</p>
                            </div>
                        </Button>
                    </a>

                    <a rel={"noreferrer noopener _blank"}
                       href={"https://linkedin.com/in/tigo-middelkoop-92067a15b/"}>
                        <Button color={"primary"}>
                            <div className={"flex items-center space-x-1"}>
                                <FontAwesomeIcon height={16} icon={faLinkedin}/>
                                <p className={"text-sm"}>LinkedIn</p>
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
            {/*Skills section*/}
            <div className={"space-y-2"}>
                <div className={"text-center space-y-1"}>
                    <h1 className={"text-4xl"}>
                        My Experience
                    </h1>
                    <h5 className={"text-xs"}>
                        The stuff I have experience with.
                    </h5>
                </div>
                <div className={"flex  gap-2 flex-wrap justify-center"}>
                    {/*{skills.map(card =>*/}
                    {/*    <SkillsCard*/}
                    {/*        key={card.name}*/}
                    {/*        name={card.name}*/}
                    {/*        subname={card.subname}*/}
                    {/*        image={card.image}*/}
                    {/*        entries={card.entries}*/}
                    {/*    />*/}
                    {/*)}*/}
                </div>
            </div>
        </div>
    )
}
