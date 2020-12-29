import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {

        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}

    }


    render() {

        // @TODO Implement dark mode here?


        return (
            <Html className={""}>
                <Head/>
                <body className={"h-screen"}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument