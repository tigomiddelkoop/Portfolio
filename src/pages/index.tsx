import Head from 'next/head';
import Link from "next/link";
import {Fragment} from 'react';
import {motion} from "framer-motion"

export default function Home() {
    return (
        <Fragment>
            <div>
                <Head>
                    <title>Tigo Middelkoop</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main>
                    <div className={""}>

                        <div className="md:flex">
                            <img className="shadow border-2 h-64 w-64 mx-auto md:mx-0 md:mr-6 rounded-full"
                                 alt="Tigo" src={"/img/profilepicture.png"}/>
                            <div className="text-center md:text-left">
                                <h1 className="text-4xl md:text-5xl font-semibold">Tigo Middelkoop</h1>
                                <h3 className="text-2xl font-light">Backend Developer</h3>
                                <h4 className="text-sm font-light">Languages I can use: PHP & JavaScript/TypeScript</h4>
                                <h4 className="text-xs font-light mb-6">Interested in Learning: C++, C, Objective-C,
                                    Java &
                                    Rust</h4>
                                <div className="mb-4">
                                    <p className={"block font-semibold md:inline mb-2 md:mb-0 md:mr-2"}>SystemManager<span
                                        className={"hidden md:inline"}>:</span></p>
                                    <a className="shadow bg-gray-100 border-gray-300 border mr-1 font-semibold hover:bg-gray-600 px-4 py-1.5 rounded-lg"
                                       href="https://systemmanager.io">Core</a>
                                    <a className="shadow bg-gray-100 border-gray-300 border mr-1 font-semibold hover:bg-gray-600 px-4 py-1.5 rounded-lg"
                                       href="https://systemmanager.cloud">Cloud</a>
                                </div>
                                <div className={"mb-4"}>
                                    <p className={"block md:inline mb-2 md:mb-0 md:mr-2"}>Social<span
                                        className={"hidden md:inline"}>:</span></p>
                                    <a className="shadow bg-gray-100 border-gray-300 border mr-1 font-semibold hover:bg-gray-600 px-4 py-1.5 rounded-lg"
                                       href="https://www.linkedin.com/in/tigo-middelkoop-92067a15b/">LinkedIn</a>
                                    <a className="shadow bg-gray-100 border-gray-300 border mr-1 font-semibold hover:bg-gray-600 px-4 py-1.5 rounded-lg"
                                       href="https://github.com/tigomiddelkoop">
                                        GitHub</a>
                                </div>
                            </div>
                        </div>
                        <div className={"flex"}>
                            <h1 className={"font-bold text-6xl"}>Hi!</h1>
                            <h1 className={"font-bold text-6xl"}>I'm Tigo</h1>
                        </div>
                    </div>
                </main>
                <footer>

                </footer>
            </div>
        </Fragment>
    )
}
