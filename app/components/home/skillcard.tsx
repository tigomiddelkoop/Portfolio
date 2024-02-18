// import styles from "./skillcard.module.scss";
// import React from "react";
// import SkillsCardEntry from "./skillcardEntry";
//
// interface props {
//     entries?: {
//         enabled: boolean
//         name: string
//         extras: Array<string>
//         confidence: number
//         date: string
//     },
//     image: string,
//     name: string,
//     subname: string
// }
//
// export default function Skillcard(props: props) {
//
//     const entries: any = props.entries || [];
//     const image: string = `_next/image?url=${encodeURIComponent(props.image)}&w=640&q=75`
//
//     return (
//         <div key={"skillcard" + props.name} className={"rounded-lg w-full sm:w-96"}>
//             <div style={{backgroundImage: `url("${image}")`}}
//                  className={styles.background + " text-white relative flex flex-col items-center justify-center p-2 h-32 border-l border-r border-t border-gray-300 border-b bg-gray-400 rounded-t-lg dark:bg-gray-900 dark:border-gray-600"}>
//
//                 <h1 className={"font-bold text-3xl jetbrains"}>{props.name}</h1>
//
//                 {props.subname !== undefined ? <p className={"font-light text-xs jetbrains"}>{props.subname}</p> : ""}
//                 {props.image == null ?
//                     <div className={"p-1 text-xs font-light absolute bottom-0 right-0 text-right"}>
//                         <p>tigo.tech</p>
//                     </div> : ""}
//             </div>
//             <div
//                 className={"bg-gray-50 border-gray-300 border-b border-l border-r rounded-b-lg dark:bg-gray-700 dark:border-gray-600 shadow-lg"}>
//
//                 {/*{entries.map((entry, index, array) => {*/}
//                 {/**/}
//                 {/*    if (entry.enabled !== null && entry.enabled) {*/}
//                 {/*        return (null)*/}
//                 {/*    }*/}
//                 {/*    const lastEntry: boolean = entries.length == (index + 1);*/}
//                 {/**/}
//                 {/*    return (*/}
//                 {/*        <SkillsCardEntry entry={entry} lastEntry={lastEntry}/>*/}
//                 {/*    )*/}
//                 {/**/}
//                 {/*})}*/}
//
//             </div>
//         </div>
//     )
// }