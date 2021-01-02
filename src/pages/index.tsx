import Head from 'next/head';
import Pill from "../components/pill"
import Button from "../components/button";
import Image from "next/image";
import {DateTime} from "luxon";

export default function Home() {

    const dateThen = DateTime.fromISO("2019");
    const dateNow = DateTime.fromJSDate(new Date());

    console.log(dateNow.year, dateThen.year)
    const diff = dateNow.diff(dateThen, "years").toObject();

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
                                <Button className={" w-64 text-center"} color={"success"}>
                                    <div className={"flex items-center justify-center"}><p className={'mr-1'}>Generate
                                        CV</p><Pill color={"danger"}>WIP</Pill>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className={"text-4xl"}>Tools and languages</h1>
                        <h2 className={"text-1xl"}>Tools I can use (and those I use regularly)</h2>

                        <div className={"flex flex-col lg:flex-row justify-center mb-4"}>

                            <div className={"w-full lg:w-96 mr-4"}>
                                <div
                                    className={"flex items-center justify-center p-2 h-32  border-l border-r border-t border-gray-300 border-b bg-gray-400 rounded-t-lg"}>
                                    <h1 className={"font-bold ml-1 text-3xl text-black"}>Frameworks</h1>
                                </div>
                                <div
                                    className={"bg-gray-50 border-gray-300 border-b border-l border-r rounded-b-lg"}>
                                    <div className={"border-b border-gray-300 py-3 px-3"}>GraphQL</div>
                                    <div className={"border-b border-gray-300 py-3 px-3"}>React</div>
                                    <div className={"border-b border-gray-300 py-3 px-3"}>ExpressJS</div>
                                    <div className={"flex border-b border-gray-300 py-3 px-3 items-center"}>
                                        <div className={"flex-1"}>
                                            <p>Javascript</p>
                                            <p className={"text-xs"}>TypeScript</p>
                                        </div>
                                        <div className={"text-xs"}>
                                            <p>{diff.years.toFixed()} year{diff.years.toFixed() !== '1' ? 's' : ''} experience</p>
                                        </div>
                                    </div>
                                    <div className={"py-3 px-3"}>NextJS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}