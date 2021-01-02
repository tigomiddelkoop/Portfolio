import Head from 'next/head';
import Pill from "../components/pill"
import Button from "../components/button";
import Image from "next/image";
import Skillscard from "../components/home/skillscard";

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
                        <h2 className={"text-1xl mb-4"}>Tools I can use (and those I use regularly)</h2>

                        <div className={"flex flex-col flex-wrap lg:flex-row justify-center mb-4"}>

                            {skills.map(card => <Skillscard key={card.name} name={card.name} image={card.image} entries={card.entries}/>)}

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    // I want to this another way, I do not feel comfy doing it this way!
    // Either the backend is already there or we do it with process.cwd();
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev ? 'http://localhost:3000' : 'https://tigo.tech';

    const skills = await fetch(server + "/home.json").then(response => response.json())
    return {props: {skills}};

}