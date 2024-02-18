// import React from "react";
// import {DateTime, Duration} from "luxon";
// import {number} from "prop-types";
//
// export default function SkillsCardEntry(props: {
//     entry: {
//         enabled: boolean
//         name: string
//         extras: Array<string>
//         confidence: number
//         date: string
//     },
//     lastEntry: boolean
// }) {
//
//     const {entry, lastEntry} = props;
//     let entryClass = "flex py-3 px-3 items-center"
//     if (!lastEntry) {
//         entryClass += " border-b border-gray-300 dark:border-gray-600";
//     }
//
//     return (
//         <div className={entryClass}>
//
//             <div className={"flex-1"}>
//
//                 <p className={"jetbrains font-bold text-xs"}>{entry.name}</p>
//
//                 {Array.isArray(entry.extras) ?
//                     entry.extras.map((name) => {
//                         return <p key={name} className={"jetbrains font-light text-xs"}>{name}</p>
//                     }) : null
//                 }
//
//             </div>
//
//             <div className={"text-right font-light"}>
//
//                 <p key={"experience" + entry.name}
//                    hidden={entry.date == undefined}
//                    className={"text-xs jetbrains"}>
//                     {formatExperience(entry.date)}
//                 </p>
//
//                 <p key={"confidence" + entry.name}
//                    hidden={entry.confidence == undefined}
//                    className={"jetbrains text-xs font-light"}>
//                     Confidence: {calculateConfidence(entry.confidence)}
//                 </p>
//
//             </div>
//
//         </div>
//     )
// }
//
// function calculateConfidence(confidencePercentage): string {
//
//     let confidence = "None";
//     if (confidencePercentage >= 10 && confidencePercentage < 25) confidence = "Barely, just started";
//     else if (confidencePercentage >= 25 && confidencePercentage < 50) confidence = "Getting comfy"
//     else if (confidencePercentage >= 50 && confidencePercentage < 75) confidence = "Quite comfortable";
//     else if (confidencePercentage >= 75 && confidencePercentage < 99) confidence = "Really comfy"
//     else if (confidencePercentage === 100) confidence = "\"Mastered\"";
//
//     return confidence;
//
// }
//
// function formatExperience(date: string): string {
//     const now: DateTime = DateTime.fromJSDate(new Date());
//     const then: DateTime = DateTime.fromISO(date);
//
//     const diff: Duration = now.diff(then, ["years", "months"]);
//
//
//     const years: number = diff.years
//     const months: number = Math.round(diff.months)
//
//     let yearWord = "year"
//     let monthWord = "month"
//
//     if (years === 0 || years > 1) {
//         yearWord = `years`
//     }
//
//     if (months === 0 || months > 1) {
//         monthWord = `months`
//     }
//
//     if (years === 0) {
//         return `${months} ${monthWord}`;
//     }
//
//     if (years > 0 && months === 0) {
//         return `${years} ${yearWord}`;
//     }
//
//
//     return `${years} ${yearWord} and ${months} ${monthWord}`;
//
// }