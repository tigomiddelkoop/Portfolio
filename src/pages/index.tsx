import Head from 'next/head';
import {Fragment} from 'react';
import Button from "../components/button";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <div>
                <Head>
                    <title>Tigo Middelkoop - Home</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className={"h-full dark:text-white"}>
                    <div className={"flex flex-col"}>
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
                        <div className={"flex flex-col"}>
                            <p>Interested in my CV? Generate one!</p>
                            <Button className={"lg:8w-32 text-center"} color={"success"}>Generate CV</Button>
                        </div>
                    </div>
                    <div>
                        <h1 className={"text-4xl"}>Tools and languages</h1>
                        <h1 className={"text-1xl"}>Tools I can use (and I probably use on the regular)</h1>
                    </div>
                </main>
            </div>
        </div>
    )
}

{/*<h4 className="text-sm font-light">Languages I can use: </h4>*/
}
{/*<h4 className="text-xs font-light mb-6">Interested in Learning: C++, C, Objective-C,*/
}
{/*    Java &*/
}
{/*    Rust</h4>*/
}
{/*<h1 className={"text-xl"}>Interested in my CV?</h1>*/
}
{/*<Button color={"success"}>Generate CV</Button>*/
}