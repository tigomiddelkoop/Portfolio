import Button from "./components/Button";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faAnglesDown} from "@fortawesome/free-solid-svg-icons";
import React, {Fragment} from "react";
import Separator from "@/app/components/Separator";
import Navbar from "@/app/components/Navbar";

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
        <Fragment>
            {/*<div className={"m-4 flex items-center justify-center"}>*/}
            {/*    <Navbar></Navbar>*/}
            {/*</div>*/}
            <div
                className={"w-full flex flex-col items-center"}>
                <div
                    className={"h-screen flex flex-col justify-center items-center dark:border-gray-600 mb-4 px-4 py-6 xl:px-12 xl:py-10"}>
                    <div className="flex flex-row mb-3 justify-center items-center">
                        <Image
                            className={"rounded-full border-2 border-purple-900 dark:border-slate-900 shadow-lg xl:h-32 xl:w-32 h-24 w-24 mr-4"}
                            alt="Tigo"
                            src={"/img/pf_new.jpg"}
                            style={{objectFit: "cover"}}
                            height={256}
                            width={256}
                        />

                        <div
                            className={"bg-clip-text text-transparent bg-gradient-to-br from-white dark:to-slate-600 to-purple-600 text-center"}>
                            <h1
                                className="text-4xl md:text-6xl mb-1">
                                <span className={"font-black"}>Tigo</span>
                                <span className={"font-light"}>Middelkoop</span>
                            </h1>
                            <h4
                                className="text-1xl md:text-2xl font-bold">
                                Cloud Engineer & Fullstack Developer
                            </h4>
                        </div>
                    </div>

                    {/*Job function and quick summary of languages*/}
                    <div
                        className={"mb-2 p-0 h-auto text-wrap dark:text-slate-300 text-purple-300 font-black text-center"}>
                        <p>PHP, TypeScript<span className={"text-xs font-light"}>/JavaScript</span>, Rust, Linux <span className={"text-xs font-light"}>(Arch, Debian)</span>, Kubernetes & Docker</p>
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

                <div className={"absolute flex flex-col bottom-5 animate-bounce dark:text-slate-300 text-purple-300"}>
                    <p className={"text-xs font-bold mb-2"}>Skills, Projects & Socials</p>
                    <FontAwesomeIcon height={16} icon={faAnglesDown}/>
                </div>

                <Separator classNames={"mb-2"}/>

                <div className={"w-full flex flex-col items-center my-2"}>
                    <div className={"text-center"}>
                        <h1 className={"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white dark:to-slate-600 to-purple-600 text-center"}>
                            About me
                        </h1>
                        <h5 className={"text-xl font-bold dark:text-slate-300 text-purple-300"}>WHO AM I?!?!?!?!?!</h5>

                </div>
                <p className={"font-normal"}>Hi! I'm, as you have probably seen up top, Tigo. I specialise in building Clouds using mostly Kubernetes.</p>
            {/*
            Talk about yourself a bit more, what you do, your hobbies and your current work. Might also be intresting to show of your home setup using TALOS,
            Maybe run this whole site on there including SystemManager and everything else :)
            */}
            </div>

                <Separator classNames={"w-1/2 my-2"}/>

                <div className={"w-full flex flex-col items-center my-2"}>
                    <div className={"text-center"}>
                        <h1 className={"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white dark:to-slate-600 to-purple-600 text-center"}>
                            Experiences
                        </h1>
                        <h5 className={"text-xl font-bold dark:text-slate-300 text-purple-300"}>The stuff I have experience in</h5>
                    </div>

                    <div
                        className={"p-2 xl:p-0 w-full md:w-3/4 lg:w-5/6 xl:w-7/8 2xl:w-4/6 grid grid-flow-dense grid-cols-1 lg:grid-cols-3 gap-4 mt-5 text-center"}>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Experience 1
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Experience 2
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Experience 3
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1 lg:col-span-2"}>
                            Experience 4
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Experience 5
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Experience 6
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1 lg:col-span-2"}>
                            Experience 7
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1 lg:col-span-2"}>
                            Experience 8
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Experience 9
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Experience 10
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1 lg:col-span-2"}>
                            Experience 11
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1 lg:col-span-2"}>
                            Experience 12
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Experience 13
                        </div>
                    </div>
                </div>

                <Separator classNames={"w-1/2 my-2"}/>


                <div className={"w-full flex flex-col items-center my-2"}>
                    <div className={"text-center"}>
                        <h1 className={"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white dark:to-slate-600 to-purple-600 text-center"}>
                            Projects
                        </h1>
                        <h5 className={"text-xl font-bold dark:text-slate-300 text-purple-300"}>Projects i've built</h5>
                    </div>

                    <div
                        className={"p-2 xl:p-0 w-full md:w-3/4 lg:w-5/6 xl:w-7/8 2xl:w-4/6 grid grid-flow-dense grid-cols-1 lg:grid-cols-3 gap-4 mt-5 text-center"}>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Project 1
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Project 2
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Project 3
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Project 4
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Project 5
                        </div>
                        <div
                            className={"p-2 border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>
                            Project 6
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
