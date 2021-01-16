import Card from "../card";
import CardBody from "../cardbody";
import Pill from "../pill";

export default function Clientcard({client}) {

    return <div key={client.id} className={"w-96 p-1 text-center items-center"}>
        <Card>
            <CardBody>
                <div className={"flex flex-col items-center"}>
                    <img className={"h-32"} src={client.logo} alt={`${client.name}'s Logo`}/>
                    <div>
                        <h3 className={"font-semibold"}>{client.name}</h3>
                        <p className={"text-xs"}>{client.about}</p>
                        <div className={"flex flex-wrap justify-center my-1"}>{client.services.map(service => <div key={service} className={"mx-0.5 my-0.5"}>
                            <Pill key={service}
                                  color={"info"}>{service}</Pill>
                        </div>)}
                        </div>
                    </div>
                </div>
            </CardBody>

            <div className={"flex"}>
                <a href={client.website} target={"_blank"} rel={"nofollow noreferrer"}
                   className={"flex-1 rounded-bl-lg border-t border-r p-2 font-semibold bg-gray-100 hover:bg-gray-200 dark:border-gray-600 cursor-pointer dark:hover:bg-gray-900 dark:bg-gray-800"}>Visit
                    site</a>
                <p className={"flex-1 rounded-br-lg border-t p-2 font-semibold bg-gray-100 hover:bg-gray-200 dark:border-gray-600 cursor-not-allowed dark:hover:bg-gray-900 dark:bg-gray-800"}>See
                    project</p>
            </div>

        </Card>
    </div>

}