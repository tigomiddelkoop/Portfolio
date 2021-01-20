import * as fs from "fs";

export default async (req, res) => {

    const dev = process.env.NODE_ENV !== 'production';
    let node = "";
    if (!dev) {
        node = process.env.NODENAME
    } else {
        node = "development"
    }

    res.statusCode = 200;
    res.json({node})

}