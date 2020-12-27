import Head from 'next/head';
import {Fragment} from 'react';
import Button from "../components/button";
import Image from "next/image";

export default function Home() {
    return (
        <Fragment>
            <div>
                <Head>
                    <title>Tigo Middelkoop - Home</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main>
                    <div className="md:flex mb-4">

                        <img className="shadow border-2 h-64 w-64 mx-auto md:mx-0 md:mr-6 rounded-full"
                             alt="Tigo" src={"/img/profilepicture.png"}/>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-semibold">Tigo Middelkoop</h1>
                            <h3 className="text-2xl font-light">Fullstack Developer</h3>
                            <h4 className="text-sm font-light">Languages I can use: PHP & JavaScript/TypeScript</h4>
                            <h4 className="text-xs font-light mb-6">Interested in Learning: C++, C, Objective-C,
                                Java &
                                Rust</h4>
                                <h1 className={"text-xl"}>Interested in my CV?</h1>
                                <Button color={"success"}>Generate CV</Button>
                        </div>
                    </div>

                    <h1 className={"text-4xl"}>Tools and languages</h1>
                    <h1 className={"text-1xl"}>Tools I can use (and I probably use on the regular)</h1>
                </main>
            </div>
        </Fragment>
    )
}
