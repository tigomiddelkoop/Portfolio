import Head from 'next/head';
import Button from "../components/button";
import Image from "next/image";
import Skillscard from "../components/home/skillscard";
import {getData} from "./api/home";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

interface CVState {
    progress: "success" | "info" | "danger";
    message?: string;

}

export default function Home({skills}) {

    return (
        <div>
            <div>
                <Head>
                    <title>Tigo Middelkoop - Home</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className={"h-full dark:text-white"}>
                    <div className={"flex flex-col lg:flex-row mb-4 items-center "}>
                        <div className="flex mb-4 items-cente rounded-lg">
                            <div className="">
                                <div className={"flex flex-col sm:flex-row items-center mb-1"}>
                                    <div className="rounded-full mr-2">
                                        <Image
                                            className={"rounded-full shadow-lg h-16 w-16"}
                                            alt="Tigo"
                                            src={"/img/profilepicture.png"}
                                            height={64}
                                            width={64}
                                        />
                                    </div>
                                    <h1 className="jetbrains text-4xl font-light md:text-5xl items-center">
                                        <span className={"jetbrains font-bold"}>Tigo</span>Middelkoop
                                    </h1>
                                </div>

                                <div className={"items-center text-center sm:text-left"}>
                                    <p className="jetbrains text-xs mb-1">Fullstack Developer and Cloud Engineer</p>
                                    <p className="jetbrains text-xs mb-1">PHP, JavaScript/TypeScript & Rust</p>
                                </div>

                                <div className={"flex mb-0.5"}>

                                    <a rel={"noreferrer noopener _blank"}
                                       className={"mr-1"}
                                       href={"https://github.com/tigomiddelkoop"}>
                                        <Button color={"primary"}>
                                            <FontAwesomeIcon height={16} icon={faGithub}/>
                                            <span>GitHub</span>
                                        </Button>
                                    </a>

                                    <a rel={"noreferrer noopener _blank"}
                                       className={"mr-1"}
                                       href={"https://linkedin.com/in/tigo-middelkoop-92067a15b/"}>
                                        <Button color={"primary"}>
                                            <FontAwesomeIcon height={16} icon={faLinkedin}/>
                                            <span>LinkedIn</span>
                                        </Button>
                                    </a>

                                    <a rel={"noreferrer noopener _blank"}
                                       className={"mr-1"}
                                       href={"https://discord.gg/Tx3CKJB2QY"}>
                                        <Button color={"primary"}>
                                            <FontAwesomeIcon height={16} icon={faDiscord}/>
                                            <span>Discord</span>
                                        </Button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={"text-center mb-4"}>
                            <h1 className={"jetbrains text-4xl font-bold"}>Tools<span className={"jetbrains font-light"}>&</span>Languages</h1>
                            <h5 className={"jetbrains text-1xl text-xs"}>Tools I can use (and those I use regularly)</h5>
                        </div>
                        {/*<div className={"flex flex-wrap mx-auto justify-center 2xl:w-3/4 "}>*/}
                        <div className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center grid-"}>

                            {skills.map(card => <Skillscard key={card.name} name={card.name} subname={card.subname}
                                                            image={card.image}
                                                            entries={card.entries}/>)}

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const skills = await getData();

    return {props: {skills}, revalidate: 1};

}

