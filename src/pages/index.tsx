import Head from 'next/head';
import {Fragment} from 'react';
import Button from "../components/button";

export default function Home() {
    return (
        <Fragment>
            <div>
                <Head>
                    <title>Tigo Middelkoop - Home</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main>
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
                            <div className="mb-4 flex">
                                <a className={"mr-1"}
                                   href="https://systemmanager.io"><Button color={"primary"}>Core</Button></a>
                                <a
                                    href="https://systemmanager.cloud"><Button color={"primary"}>Cloud</Button></a>
                            </div>
                            <div className={"mb-4 flex"}>
                                <a className={"mr-1"}
                                   href="https://www.linkedin.com/in/tigo-middelkoop-92067a15b/"><Button>LinkedIn</Button></a>
                                <a
                                    href="https://github.com/tigomiddelkoop">
                                    <Button>GitHub</Button></a>
                            </div>
                        </div>
                    </div>
                    <h1 className={"text-4xl"}>Tools and languages</h1>
                    <h1 className={"text-1xl"}>Tools I can use (and I probably use on the regular)</h1>
                </main>
            </div>
        </Fragment>
    )
}
