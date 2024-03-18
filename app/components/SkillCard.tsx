import React from "react"
import { DateTime, Duration } from "luxon"
import Separator from "@/app/components/Separator"

interface Props {
    data: {
        name: string
        description?: string
        image?: string
        entries: [
            {
                name: string
                extra: string
                date: string
                confidence: number
            },
        ]
    }
}
export default function SkillCard(props: Props): React.JSX.Element {
    return (
        <div
            className={
                "col-span-1 flex flex-col rounded-lg border-2 border-purple-600 bg-black bg-opacity-25 backdrop-blur-3xl dark:border-slate-600"
            }
        >
            <div
                className={`flex h-40 flex-col justify-center rounded-t-lg border-b-2 border-purple-600 bg-cover dark:border-slate-600`}
                style={{ backgroundImage: `url('${props.data.image}')` }}
            >
                <h1 className={"text-4xl font-bold"}>{props.data.name}</h1>
                <p className={"text-sm font-bold"}>{props.data.description}</p>
            </div>
            <div className={"flex flex-col"}>
                {props.data.entries.map((skill) => {
                    return (
                        <div key={skill.name}>
                            <div
                                className={
                                    "flex h-16 items-center justify-between border-purple-600 p-2 dark:border-slate-600"
                                }
                            >
                                <div className={"flex flex-col text-left"}>
                                    <p className={"font-bold"}>{skill.name}</p>
                                    {skill.extra !== undefined ? (
                                        <p className={"text-xs font-light"}>
                                            {skill.extra}
                                        </p>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className={"flex flex-col text-right"}>
                                    <p
                                        className={
                                            skill.confidence !== undefined
                                                ? "text-sm"
                                                : "text-md"
                                        }
                                    >
                                        {calculateTime(skill.date)} experience
                                    </p>
                                    <p
                                        className={`text-sm ${skill.confidence == undefined ? "hidden" : ""}`}
                                    >
                                        {calculateConfidence(skill.confidence)}{" "}
                                        confidence{" "}
                                        <span className={"font-light"}>
                                            ({skill.confidence}%)
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <Separator />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function calculateConfidence(confidencePercentage: number) {
    let confidence
    if (confidencePercentage >= 0 && confidencePercentage < 10)
        confidence = "No"
    else if (confidencePercentage >= 10 && confidencePercentage < 25)
        confidence = "Low"
    else if (confidencePercentage >= 25 && confidencePercentage < 50)
        confidence = "Meh"
    else if (confidencePercentage >= 50 && confidencePercentage < 75)
        confidence = "I could do it"
    else if (confidencePercentage >= 75 && confidencePercentage < 99)
        confidence = "I can do it"
    else if (confidencePercentage === 100) confidence = "Lets do it!"

    return confidence
}

function calculateTime(date: string) {
    // Get now and then via the dates
    let now = DateTime.fromJSDate(new Date())
    let then = DateTime.fromISO(date)

    // Calculate the difference
    let diff: Duration = now.diff(then, ["years", "months"])

    let years: string = diff.years.toFixed()
    let months: string = diff.months.toFixed()

    return (
        <span>
            {years !== "0" ? (
                <span>
                    {years} year{years !== "1" ? "s" : ""}{" "}
                </span>
            ) : (
                ""
            )}
            {years !== "0" && months !== "0" ? " and " : ""}
            {months !== "0" ? (
                <span>
                    {months} month{months !== "1" ? "s" : ""}{" "}
                </span>
            ) : (
                ""
            )}
            {months == "0" && years == "0" ? <span>{">"}1 month </span> : ""}
        </span>
    )
}
