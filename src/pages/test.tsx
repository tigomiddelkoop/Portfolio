import Button from "../components/button";

export default function Test() {
    return (
        <div>
            <h1 className={"text-center text-3xl mb-4"}>This page will be used to test all the components I made visually</h1>
            <div className={"flex"}>
                <Button color={"primary"}>Test</Button>
                <Button color={"secondary"}>Test</Button>
                <Button color={"danger"}>Test</Button>
                <Button color={"warning"}>Test</Button>
                <Button color={"success"}>Test</Button>
                <Button color={"info"}>Test</Button>
            </div>
        </div>
    )
}