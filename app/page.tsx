import Button from "./components/Button";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faAnglesDown} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Separator from "@/app/components/Separator";

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
                    <p>PHP, JavaScript/TypeScript, Rust, Kubernetes & Docker</p>
                    {/*<p>*/}
                    {/*    <span className={"font-bold"}>Languages: </span>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*    <span className={"font-bold"}>Hosting: </span> Kubernetes & Docker*/}
                    {/*</p>*/}
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
            <div className={"absolute flex flex-col bottom-5 animate-bounce"}>
                <p className={"text-xs font-bold mb-2"}>Skills, Projects & Socials</p>
                <FontAwesomeIcon height={16} icon={faAnglesDown}/>
            </div>

            <Separator classNames={"mb-2"}/>

            <div className={"w-full flex flex-col items-center"}>
                <div className={"text-center space-y-1"}>
                    <h1 className={"text-4xl font-normal"}>
                        My skills
                    </h1>
                    <h5 className={"text-xs"}>
                        The tooling and programming languages I have experience in
                    </h5>
                </div>
                <div className={"w-1/2 grid grid-flow-dense grid-cols-1 xl:grid-cols-3 gap-4"}>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>1</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>2</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>2</div>

                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>3</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-2"}>4</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-2"}>5</div>

                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>5</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-2"}>7</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-2"}>8</div>

                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>9</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>10</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-2"}>11</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-2"}>12</div>
                    <div className={"border dark:border-slate-600 border-purple-600 rounded-lg col-span-1"}>13</div>
                </div>
            </div>
        </div>
    )
}
