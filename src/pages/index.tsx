import Head from 'next/head';
import Pill from "../components/pill"
import Button from "../components/button";
import Image from "next/image";
import Skillscard from "../components/home/skillscard";
import {useState} from "react";

interface CVState {
    progress: "success" | "info" | "danger";
    message?: string;

}

export default function Home({skills}) {

    const [cv, setCv] = useState<CVState>({progress: "success", message: "Generate CV"})

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
                                    <h1 className="text-4xl md:text-5xl font-light mb-0.5">Tigo</h1>
                                    <h1 className="text-4xl md:text-5xl font-bold">Middelkoop</h1>
                                </div>
                                <p className="text-xs">Fullstack Developer | PHP & JavaScript/TypeScript</p>
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
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={"text-center mb-4"}>
                            <h1 className={"text-4xl font-semibold"}>Tools and languages</h1>
                            <h5 className={"text-1xl text-xs"}>Tools I can use (and those I use regularly)</h5>
                        </div>
                        <div className={"flex flex-col flex-wrap lg:flex-row justify-center mb-4"}>

                            {skills.map(card => <Skillscard key={card.name} name={card.name} image={card.image}
                                                            entries={card.entries}/>)}

                        </div>
                        {/*<Card>*/}
                        {/*    <div className={"flex m-1"}>*/}
                        {/*        <div className={"w-4 mr-1 h-4 bg-red-700 rounded-full"}/>*/}
                        {/*        <div className={"w-4 h-4 bg-yellow-500 rounded-full"}/>*/}
                        {/*        <div className={"w-4 ml-1 h-4 bg-green-600 rounded-full"}/>*/}
                        {/*        <div className={"flex-1 text-xs text-center"}>Tigo's Portfolio</div>*/}
                        {/*    </div>*/}
                        {/*</Card>*/}
                    </div>
                </main>
            </div>
        </div>
    )

    async function generateCV() {
        setCv({progress: "info", message: "Generating CV"})

        fetch("/api/generatecv").then(response => {

            if(response.status == 502) {
                setCv({progress: "danger", message: "Generating CV failed"})
                return
            }
            response.blob().then(pdfBlob => {

                let pdf = new File([pdfBlob], "TigoMiddelkoopCV.pdf")

                const objUrl = window.URL.createObjectURL(pdf);

                let link = document.createElement("a")
                link.href = objUrl;
                link.download = "cv.pdf"
                link.click();
                setCv({progress: "success", message: "CV generated, downloading"})

                setTimeout(() => {
                    window.URL.revokeObjectURL(objUrl);
                }, 250);
            })
        }).catch(err => {
            setCv({progress: "danger", message: "Generating CV failed"})
        });
    }

}

export async function getStaticProps() {

    // I want to this another way, I do not feel comfy doing it this way!
    // Either the backend is already there or we do it with process.cwd();
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? 'http://localhost:3000' : 'https://tigo.tech';

    const skills = await fetch(server + "/home.json").then(response => response.json())
    return {props: {skills}, revalidate: 1};

}

