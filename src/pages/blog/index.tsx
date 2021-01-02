import Link from "next/link"

export default function Login() {

    return (
        <div className={"dark"}>
            <div className={"dark dark:text-white dark:bg-black h-screen flex flex-col justify-center"}>
                <div className={"m-4"}>
                    <h1 className={"text-6xl mb-1"}>Blog work in progress</h1>
                    <Link href={"/"}>Go home</Link>
                </div>
            </div>
        </div>
    )

}