import {DateTime, Duration} from "luxon";
import styles from "./skillscard.module.scss";

interface props {
    entries?: any,
    image: string,
    name: string,
    subname: string
}

export default function SkillsCard(props: props) {

    const entries: any = props.entries || [];
    const image: string = `_next/image?url=${encodeURIComponent(props.image)}&w=640&q=75`

    return (
        <div key={props.name} className={"rounded-lg w-full sm:w-96"}>
            <div style={{backgroundImage: `url("${image}")`}}
                 className={styles.background + " text-white relative flex flex-col items-center justify-center p-2 h-32 border-l border-r border-t border-gray-300 border-b bg-gray-400 rounded-t-lg dark:bg-gray-900 dark:border-gray-600"}>

                <h1 className={"font-bold text-3xl jetbrains"}>{props.name}</h1>

                {props.subname !== undefined ? <p className={"font-light text-xs jetbrains"}>{props.subname}</p> : ""}
                {props.image == null ?
                    <div className={"p-1 text-xs font-light absolute bottom-0 right-0 text-right"}>
                        <p>tigo.tech</p>
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
    const now: DateTime = DateTime.fromJSDate(new Date());
    const then: DateTime = DateTime.fromISO(entry.date);

    // Calculate the difference
    const diff: Duration = now.diff(then, ["years", "months"]);

    const confidence: string = calculateConfidence(entry.confidence);

    const years: string = diff.years.toFixed()
    const months: string = diff.months.toFixed()

    return (
        <div key={"entry" + entry.name} className={"flex py-3 px-3 items-center"}>

            <div className={"flex-1"}>
                {Array.isArray(entry.name) ?
                    entry.name.map((name, index) => {
                        if (index == 0) return <p key={name} className={"jetbrains font-bold text-xs"}>{name}</p> // Make first name bold
                        return <p key={name} className={"jetbrains font-light text-xs"}>{name}</p> // Make other names smaller and lighter
                    }) :
                    <p key={entry.name} className={"jetbrains font-semibold"}>{entry.name}</p>}
            </div>

            <div className={"text-right font-light"}>

                <p key={"experience" + entry.name} className={"text-xs jetbrains"}>
                    {years !== "0" ? <span className={"jetbrains"}>{years} year{years !== '1' ? 's' : ''} </span> : ""}
                    {years !== "0" && months !== "0" ? "and " : ""}
                    {months !== "0" ?
                        <span className={"jetbrains"}>{months} month{months !== '1' ? 's' : ''} </span> : ""}
                    {months == "0" && years == "0" ? <span>{">"}1 month </span> : ""}
                </p>

                {entry.confidence !== undefined ?
                    <p key={"confidence" + entry.name} className={"jetbrains text-xs"}>Confidence: {confidence}</p>
                    :
                    null

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