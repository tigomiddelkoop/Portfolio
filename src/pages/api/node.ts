export default async (req, res) => {

    const dev = process.env.NODE_ENV !== 'production';
    let node = "";
    if (!dev) {
        node = process.env.NODENAME
    } else {
        node = "scw-DEVELOPMENT-default-310ffc2fe53b43dd8705c4754"
    }

    res.statusCode = 200;
    res.json({node})

}