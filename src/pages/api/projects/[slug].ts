import * as fs from "fs";

export default async (req, res) => {

    if (req.method === "GET") {
        const project = await getProject(req.query.slug)

        res.statusCode = 200;
        res.json(project);
    }

}

export async function getProject(slug: string) {

    const folderPath = process.cwd() + "/data/projects/";
    let rawFile: string;

    try {
        rawFile = fs.readFileSync(folderPath + `${slug}.json`, {encoding: "utf8"});
    } catch (e) {

        // It most likely does not exist but we'll check for the error code
        if (e.code === "ENOENT") {
            console.log(`Project: ${slug}.json does not exist`)
        }
        return null;
    }

    return JSON.parse(rawFile);

}