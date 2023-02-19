import {DateTime} from "luxon";
import styles from "./skillscard.module.scss";

interface props {
    entries?: any,
    image: string,
    name: string,
    subname: string
}

export default function Skillscard(props: props) {

    let entries = props.entries;
    if (entries == undefined) entries = []

    return (
        <div key={props.name} className={"rounded-lg w-full sm:w-96 p-0 mb-4 md:mx-1"}>
            {/*Fun window close buttons*/}
            {/*<div*/}
            {/*    className={"flex u h-6 justify-center bg-gray-50 border-gray-300 border rounded-t-lg dark:bg-gray-700 dark:border-gray-600 shadow-lg"}>*/}
            {/*    <div className={"jetbrains flex-1 font-light"}>{props.name}</div>*/}
            {/*    <div className={"justify-end flex"}>*/}
            {/*        <div className={"mx-0.5 bg-gray-500 h-4 w-4 rounded-lg"}></div>*/}
            {/*        <div className={"mx-0.5 bg-gray-500 h-4 w-4 rounded-lg"}></div>*/}
            {/*        <div className={"mx-0.5 bg-gray-500 h-4 w-4 rounded-lg"}></div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div style={{backgroundImage: `url("_next/image?url=${encodeURIComponent(props.image)}&w=640&q=75")`}}
                 className={styles.background + " text-white relative flex flex-col items-center justify-center p-2 h-32 border-l border-r border-t border-gray-300 border-b bg-gray-400 rounded-t-lg dark:bg-gray-900 dark:border-gray-600"}>

                <h1 className={"font-bold text-3xl jetbrains"}>{props.name}</h1>

                {props.subname !== undefined ? <p className={"font-light text-xs jetbrains"}>{props.subname}</p> : ""}
                {props.image == null ?
                    <div className={"p-1 text-xs font-light absolute bottom-0 right-0 text-right"}>
                        <p>No image available yet</p>
                    </div> : ""}
            </div>
            <div
                className={"bg-gray-50 border-gray-300 border-b border-l border-r rounded-b-lg dark:bg-gray-700 dark:border-gray-600 shadow-lg"}>

                {entries.map((entry, index, array) => {
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
    let diff = now.diff(then, ["years", "months"]);

    let confidence = calculateConfidence(entry.confidence);

    let years = diff.years.toFixed()
    let months = diff.months.toFixed()

    return (
        <div key={"entry" + entry.name} className={"flex border-gray-300 dark:border-gray-600 py-3 px-3 items-center"}>

            <div className={"flex-1"}>
                {Array.isArray(entry.name) ? entry.name.map((name, index) => {
                    if (index == 0) return <p key={name} className={"font-semibold flex"}>{name}</p>
                    return <p key={name} className={"text-xs font-light"}>{name}</p>

                }) : <p key={entry.name} className={"font-semibold"}>{entry.name}</p>}
            </div>

            <div className={"text-right font-light"}>

                <p key={"experience" + entry.name} className={"text-xs jetbrains"}>
                    {years !== "0" ? <span className={"jetbrains"}>{years} year{years !== '1' ? 's' : ''} </span> : ""}
                    {years !== "0" && months !== "0" ? "and " : ""}
                    {months !== "0" ?
                        <span className={"jetbrains"}>{months} month{months !== '1' ? 's' : ''} </span> : ""}
                    {months == "0" && years == "0" ? <span>{">"}1 month </span> : ""}
                    experience
                </p>

                {entry.confidence !== undefined ?
                    <p key={"confidence" + entry.name} className={"jetbrains text-xs"}>Confidence: {confidence}</p>
                    :
                    ""
                }
            </div>

        </div>
    )
}

function calculateConfidence(confidencePercentage) {

    let confidence;
    if (confidencePercentage >= 0 && confidencePercentage < 10) confidence = "None"
    else if (confidencePercentage >= 10 && confidencePercentage < 25) confidence = "Barely, just started";
    else if (confidencePercentage >= 25 && confidencePercentage < 50) confidence = "Getting comfy"
    else if (confidencePercentage >= 50 && confidencePercentage < 75) confidence = "Quite comfortable";
    else if (confidencePercentage >= 75 && confidencePercentage < 99) confidence = "Really comfy"
    else if (confidencePercentage === 100) confidence = "Whoooo!";

    return confidence;
}