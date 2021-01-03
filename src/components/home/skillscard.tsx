import {DateTime} from "luxon";
import styles from "./skillscard.module.scss";

interface props {
    entries?: any,
    image: string,
    name: string
}

export default function Skillscard(props: props) {

    let entries = props.entries;
    if (entries == undefined) entries = []

    return (
        <div className={"rounded-lg w-full lg:w-96 mb-4 lg:mx-1"}>
            <div style={{backgroundImage: `url("${props.image}")`}}
                 className={styles.background + " shadow-lg flex items-center justify-center p-2 h-32 border-l border-r border-t border-gray-300 border-b bg-gray-400 rounded-t-lg dark:bg-gray-900 dark:border-gray-600"}>
                <h1 className={"font-bold ml-1 text-3xl text-white"}>{props.name}</h1>
            </div>
            <div
                className={"bg-gray-50 border-gray-300 border-b border-l border-r rounded-b-lg dark:bg-gray-700 dark:border-gray-600 shadow-lg "}>

                {entries.map(entry => {
                    return renderEntry(entry)
                })}

            </div>
        </div>
    )

}

function renderEntry(entry) {

    // Get now and then via the dates
    let now = DateTime.fromJSDate(new Date());
    let then = DateTime.fromISO(entry.date);

    // Calculate the difference
    let diff = now.diff(then, "years");

    // LET IT RENDER WHOOOOOOOOOOOO
    return (
        <div className={"flex border-gray-300 dark:border-gray-600 py-3 px-3 items-center"}>
            <div className={"flex-1"}>
                {Array.isArray(entry.name) ? entry.name.map(name => {
                    if (name == entry.name[0]) return <p>{name}</p>
                    return <p className={"text-xs font-light"}>{name}</p>

                }) : <p>{entry.name}</p>}

            </div>
            <div className={"font-light text-sm"}>
                <p>{diff.years.toFixed()} year{diff.years.toFixed() !== '1' ? 's' : ''} experience</p>
            </div>
        </div>
    )
}