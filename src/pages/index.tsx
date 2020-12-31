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
                    <div className={"flex flex-col mb-4"}>
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
                            <Button className={"lg:w-32 text-center"} color={"success"}>Generate CV</Button>
                        </div>
                    </div>
                    <div>
                        <h1 className={"text-4xl"}>Tools and languages</h1>
                        <h2 className={"text-1xl"}>Tools I can use (and I probably use on the regular)</h2>

                        <div className={"flex justify-center mb-4"}>


                            <div className={"w-64"}>
                                <div className={"p-2 bg-red-600 h-32  border-l border-r border-t border-red-500 rounded-t-lg"}>
                                    {/*<Image*/}
                                    {/*    className={""}*/}
                                    {/*    alt="Tigo"*/}
                                    {/*    src={"/js-brands.svg"}*/}
                                    {/*    height={64}*/}
                                    {/*    width={64}*/}
                                    {/*/>*/}
                                    <h1 className={"font-bold ml-1 text-2xl text-white"}>Frameworks</h1>
                                </div>
                                <div
                                    className={"bg-gray-50 border-gray-300 border-b border-l border-r rounded-b-lg"}>
                                    <div className={"border-b border-gray-300 py-3 px-3"} >GraphQL</div>
                                    <div className={"border-b border-gray-300 py-3 px-3"} >React</div>
                                    <div className={"border-b border-gray-300 py-3 px-3"} >ExpressJS</div>
                                    <div className={"py-3 px-3"} >NextJS</div>
                                </div>
                            </div>
                            <div
                                className={"w-64 rounded-lg"}>
                                <h1 className={"text-center"}>Languages</h1>
                                <div className={"border-gray-300 bg-gray-50 p-4 border"}>
                                    <p>test</p>
                                    <p>test</p>
                                    <p>test</p>
                                    <p>test</p>
                                    <p>test</p>
                                    <p>test</p>
                                </div>
                            </div>
                            <div className={"w-64 rounded-lg"}>
                                <h1 className={"text-center"}>Tools</h1>
                                <div className={"border-gray-300 bg-gray-50 p-4 border "}>
                                    <p>test</p>
                                    <p>test</p>
                                    <p>test</p>
                                    <p>test</p>
                                    <p>test</p>
                                    <p>test</p>
                                </div>
                            </div>

                        </div>
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