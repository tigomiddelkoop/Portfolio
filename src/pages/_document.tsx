import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {

    state = {
        theme: "dark"
    }

    static async getInitialProps(ctx) {

        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}

    }

    componentDidMount() {
    }

    componentWillMount() {
    }

    changeDarkMode() {
        if(this.state.theme == "dark") this.setState({theme: "light"});
        else if(this.state.theme == "light") this.setState({theme: "dark"});
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