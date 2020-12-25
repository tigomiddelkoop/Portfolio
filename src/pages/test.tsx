import Button from "../components/button";
import Pill from "../components/pill";

export default function Test() {
    return (
        <div>
            <h1 className={"text-center text-3xl mb-4"}>This page will be used to test all the components I made
                visually</h1>
            <div>
                <h1>Buttons</h1>
                <div className={"flex"}>
                    <Button color={"primary"}>Primary</Button>
                    <Button color={"secondary"}>Secondary</Button>
                    <Button color={"danger"}>Danger</Button>
                    <Button color={"warning"}>Warning</Button>
                    <Button color={"success"}>Success</Button>
                    <Button color={"info"}>Info</Button>
                </div>
            </div>
            <div>
                <h1>Pills</h1>
                <div className={"flex"}>
                    <Pill color={"primary"}>Primary</Pill>
                    <Pill color={"secondary"}>Secondary</Pill>
                    <Pill color={"danger"}>Danger</Pill>
                    <Pill color={"warning"}>Warning</Pill>
                    <Pill color={"success"}>Success</Pill>
                    <Pill color={"info"}>Info</Pill>
                </div>
            </div>
        </div>
    )
}