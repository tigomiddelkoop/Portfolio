import Card from "../components/card";
import CardTitle from "../components/cardtitle";
import CardBody from "../components/cardbody";
import Button from "../components/button";
import Pill from "../components/pill";

export default function Login() {

    return (
        <div className={"h-screen flex items-center justify-center dark:bg-gray-800 p-4"}>
            <div draggable={"true"} className={"w-full lg:w-4/12"}>
                <Card>
                    <CardTitle><span className={"mr-1"}>You need to Login</span><Pill color={"info"}>Beta</Pill></CardTitle>
                    <CardBody>
                        {/* Poly fill*/}
                        <div className={"m-2"}>
                            <input name={"username"} placeholder={"User"} type={"text"}/>
                            <input name={"password"} placeholder={"Password"} type={"password"}/>
                            <Button color={"info"}>Login</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )

}