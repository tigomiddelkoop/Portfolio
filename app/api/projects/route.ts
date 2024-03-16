import * as fs from "fs"

export const dynamic = "force-dynamic" // defaults to auto
export async function GET(request: Request) {
    const skillFiles = fs.readdirSync(process.cwd() + "/data/skills/")

    const projects = skillFiles.map((data) => {
        const skillData: string = fs.readFileSync(
            process.cwd() + "/data/skills/" + data,
            "utf-8"
        )
        const parsed: [] = JSON.parse(skillData)
        return parsed
    })

    return Response.json(projects)
}
