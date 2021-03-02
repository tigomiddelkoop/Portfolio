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
                    <div className={"flex flex-col lg:flex-row mb-4 items-center"}>
                        <div className="flex mb-4 items-center">

                            <div className="flex rounded-full shadow-lg">
                                <Image
                                    className={"rounded-full"}
                                    alt="Tigo"
                                    src={"/img/profilepicture.png"}
                                    height={192}
                                    width={192}
                                />
                            </div>
                            <div className="ml-4">
                                <div className={"mb-1"}>
                                    <h1 className="jetbrains text-4xl md:text-5xl font-light mb-0.5">Tigo</h1>
                                    <h1 className="jetbrains text-4xl md:text-5xl font-bold">Middelkoop</h1>
                                </div>
                                <div className={"flex flex-wrap items-center"}>
                                    <p className="jetbrains text-xs mb-1 sm:border-r sm:pr-2">Fullstack Developer </p>
                                    <p className="jetbrains text-xs mb-1 sm:pl-2">PHP, JavaScript/TypeScript & C#</p>
                                </div>
                                <div className={"flex mb-0.5"}>
                                    <a rel={"noreferrer noopener _blank"}
                                       className={"mr-1"}
                                       href={"https://github.com/tigomiddelkoop"}>
                                        <Button color={"primary"}>
                                            <FontAwesomeIcon height={16} icon={faGithub}/>
                                        </Button>
                                    </a>

                                    <a rel={"noreferrer noopener _blank"}
                                       className={"mr-1"}
                                       href={"https://linkedin.com/in/tigo-middelkoop-92067a15b/"}>
                                        <Button color={"primary"}>
                                            <FontAwesomeIcon height={16} icon={faLinkedin}/>
                                        </Button>
                                    </a>

                                    <a rel={"noreferrer noopener _blank"}
                                       className={"mr-1"}
                                       href={"https://twitter.com/__Tigo__"}>
                                        <Button color={"primary"}>
                                            <FontAwesomeIcon height={16} icon={faTwitter}/>
                                        </Button>
                                    </a>

                                    <a rel={"noreferrer noopener _blank"}
                                       className={"mr-1"}
                                       href={"https://discord.gg/Tx3CKJB2QY"}>
                                        <Button color={"primary"}>
                                            <FontAwesomeIcon height={16} icon={faDiscord}/>
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"text-center mb-4"}>
                            <h1 className={"text-4xl font-semibold"}>Tools and languages</h1>
                            <h5 className={"text-1xl text-xs"}>Tools I can use (and those I use regularly)</h5>
                        </div>
                        <div className={"flex flex-wrap lg:flex-row justify-center mb-4 xl:mx-6 2xl:mx-24 3xl:mx-48"}>

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

