import * as fs from "fs";
import pdf from "pdf-creator-node";

export default async (req, res) => {

    const filePath = process.cwd() + "/templates/cv.html"
    let html = fs.readFileSync(filePath, 'utf8');

    let options = {
        format: "A4",
        orientation: "portrait",
    }

    let document = {
        html,
        data: {
            name: "Tigo",
            lastname: "Middelkoop"
        },
        path: process.cwd() + "/public/cv.pdf"
    }
    
    pdf.create(document, options);

    let file = process.cwd() + "/public/cv.pdf";

    res.setHeader("Content-type", "application/pdf");
    res.setHeader("Content-disposition", `attachment; filename="CV Tigo Middelkoop.pdf"`);

    res.statusCode = 200;
    let filestream = fs.createReadStream(file);
    filestream.pipe(res);
    return;

}