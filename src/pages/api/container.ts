export default async (req, res) => {

    const dev = process.env.NODE_ENV !== 'production';
    let container = "";
    if (!dev) {
        container = process.env.HOSTNAME
    } else {
        container = "DEVELOPMENT-864b557fb6-5ghw6"
    }

    res.statusCode = 200;
    res.json({container})

}