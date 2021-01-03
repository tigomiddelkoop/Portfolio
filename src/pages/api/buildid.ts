import * as fs from "fs";

export default async (req, res) => {
    const filePath = process.cwd() + "/.next/BUILD_ID"
    let buildId = "";
    try {
        buildId = await fs.readFileSync(filePath, "utf8");
    } catch (e) {
        console.log(e)

        res.statusCode = 200;
        res.json({"buildId": "unknown"})
        return;
    }

    res.statusCode = 200;
    res.json({buildId})

}