import Head from 'next/head';
import Button from "../components/button";
import Image from "next/image";
import Skillscard from "../components/home/skillscard";
import {useEffect, useState} from "react";
import {production} from "./_app";
import {DateTime} from "luxon";
import {getData} from "./api/home";
import {useRouter} from "next/router";

interface CVState {
    progress: "success" | "info" | "danger";
    message?: string;

}

export default function Home({skills}) {

    const [cv, setCv] = useState<CVState>({progress: "success", message: "Download CV"})
    const router = useRouter();


    const handleKeypress = (event: KeyboardEvent) => {

        if (!event.ctrlKey) {
            if (event.code === "KeyG") {
                router.push("/games");
            }

            if (event.ctrlKey && event.code === "KeyP") {
                event.preventDefault();
                generateCV();
            }
        }
    }

    const downloadCVBeforePrint = (event: Event) => {
        event.preventDefault();
        generateCV();
    }


    useEffect(() => {
        window.addEventListener("keydown", handleKeypress)
        return () => {
            window.removeEventListener("keydown", handleKeypress)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("beforeprint", downloadCVBeforePrint)
        return () => {
            window.removeEventListener("beforeprint", downloadCVBeforePrint)
        }
    }, [])


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
                                <p className="jetbrains text-xs">Fullstack Developer | PHP & JavaScript/TypeScript</p>
                            </div>
                        </div>
                        <div className={"flex flex-1 justify-center"}>
                            <div className={"justify-center text-center"}>
                                <p className={"mb-0.5"}>Interested in my CV?</p>
                                <div onClick={generateCV}>
                                    <Button className={"w-64 text-center"} color={cv.progress}>
                                        <div className={"flex items-center justify-center"}>
                                            {cv.progress == "info" ? <div
                                                className={"mr-1.5 h-4 w-4 bg-blue-400 rounded-full animate-pulse items-center"}/> : ""}
                                            <div>{cv.message}</div>

                                        </div>
                                    </Button>
                                </div>
                                <p className={"text-xs font-light text-gray-400 mt-1"}>or press CTRL + P</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"text-center mb-4"}>
                            <h1 className={"text-4xl font-semibold"}>Tools and languages</h1>
                            <h5 className={"text-1xl text-xs"}>Tools I can use (and those I use regularly)</h5>
                        </div>
                        <div className={"flex flex-wrap lg:flex-row justify-center mb-4 2xl:mx-72"}>

                            {skills.map(card => <Skillscard key={card.name} name={card.name} subname={card.subname}
                                                            image={card.image}
                                                            entries={card.entries}/>)}

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )

    async function generateCV() {
        setCv({progress: "info", message: "Downloading CV"})

        const timeGenerated = DateTime.local().setZone("Europe/Amsterdam");
        const filename = `TigoMiddelkoop (CV) [Generated at ${timeGenerated.toLocaleString(DateTime.DATE_SHORT)}].pdf`

        fetch("/api/generatecv").then(response => {

            if (response.status == 502) {
                setCv({progress: "danger", message: "Downloading CV failed"})
                return
            }
            response.blob().then(pdfBlob => {

                let pdf = new File([pdfBlob], filename)
                const objUrl = window.URL.createObjectURL(pdf);

                let link = document.createElement("a")
                link.href = objUrl;
                link.download = filename;
                link.click();
                setCv({progress: "success", message: "Downloaded"});


                setTimeout(() => setCv({progress: "success", message: "Download CV"}), 5000);
                setTimeout(() => {
                    window.URL.revokeObjectURL(objUrl);
                }, 250);
            })
        }).catch(err => {
            console.error(err);
            setCv({progress: "danger", message: "Downloading CV failed"})
        });
    }

}

export async function getStaticProps() {

    const skills = await getData();

    return {props: {skills}, revalidate: 1};

}

