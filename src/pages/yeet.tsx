import {useEffect, useState} from "react";
import {DateTime} from "luxon";
import {any} from "prop-types";

export default function yeet() {

    const dateThen = DateTime.fromISO("0000");
    const dateNow = DateTime.fromJSDate(new Date());

    const [date, setDate] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            const dateNow = DateTime.fromJSDate(new Date());

            console.log(dateNow.diff(dateThen, "years").years.toString().length);
            setDate(dateNow.diff(dateThen, "years").years)
        }, 100);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className={"bg-black text-white h-screen flex items-center text-center justify-center"}>
            <div>
                <p style={{fontSize: "6em"}}>When will it be 2021?</p>
                <p style={{fontSize: "11em"}}>{date.toString().substring(0, 16)}</p>
            </div>
        </div>
    )
}