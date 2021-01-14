import * as fs from "fs";

export default async (req, res) => {

    if (req.method === "GET") {
        const clients = await getClients();

        res.statusCode = 200;
        res.json(clients);
    }

}

export async function getClients() {

    const folderPath = process.cwd() + "/data/clients"
    const files = fs.readdirSync(folderPath, {encoding: "utf8"});

    const clients = files.map((clientFile, index) => {

        // console.log(folderPath + "/" + clientFile);
        const rawFile: string = fs.readFileSync(folderPath + "/" + clientFile, {encoding: "utf8"});
        const file = JSON.parse(rawFile)
        return {id: index, ...file};

    })

    return clients;
}