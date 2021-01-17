import * as fs from "fs";

export default async (req, res) => {

    console.log(new Date(), "NEW REQUEST");

    const dev = process.env.NODE_ENV !== 'production';
    let buildId = "";
    if (!dev) {

        const filePath = process.cwd() + "/.next/BUILD_ID"
        try {
            buildId = await fs.readFileSync(filePath, "utf8");
        } catch (e) {
            console.log(e)

            res.statusCode = 200;
            res.json({"buildId": "unknown"})
            return;
        }
    } else {
        buildId = "development"
    }

    res.statusCode = 200;
    res.json({buildId})

}