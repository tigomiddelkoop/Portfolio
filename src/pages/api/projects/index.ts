import * as fs from "fs";

export default async (req, res) => {

    if (req.method === "GET") {
        const projects = await getProjects();

        res.statusCode = 200;
        res.json(projects);
    }

}

export async function getProjectList() {

}

export async function getProjects() {

    const folderPath = process.cwd() + "/data/projects/";
    const files = fs.readdirSync(folderPath, {encoding: "utf8"});

    return files.map((projectFile, index) => {

        const rawFile: string = fs.readFileSync(folderPath + projectFile, {encoding: "utf8"});
        const file = JSON.parse(rawFile);

        return {
            id: index,
            title: file.title,
            image: file.image || null,
            slug: file.slug,
            short_description: file.short_description,
            languages: file.languages,
            github: file.source_control.github
        }

    })

}