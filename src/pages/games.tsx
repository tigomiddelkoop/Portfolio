import Head from "next/head";
import {Fragment} from "react";
import * as fs from "fs";
import Card from "../components/card";

export default function index({games}) {

    console.log(games);

    return <Fragment>
        <Head>
            <title>Tigo Middelkoop - Games</title>
        </Head>
        <div className={"text-center mb-4 dark:text-white"}>
            <h1 className={"text-4xl font-semibold"}>Games</h1>
            <h5 className={"text-xs"}>You have found a easteregg!</h5>
            <h5 className={"text-xs"}>These are the Games I play</h5>

            <div className={"md:m-4 flex flex-wrap justify-center"}>

                {games.map(game => {
                    return (
                        <div className={"w-full sm:w-64 p-1"}>
                            <Card>
                                <img className={"p-2"} src={game.image} alt={game.name + " icon"} />

                                <p className={"font-semibold m-1 border-t border-gray-300 dark:border-gray-600 text-xl"}>{game.name}</p>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>
    </Fragment>
}


export async function getStaticProps() {

    const games: string = JSON.parse(fs.readFileSync(process.cwd() + "/data/games.json", {encoding: "utf8"}))

    return {props: {games}}

}