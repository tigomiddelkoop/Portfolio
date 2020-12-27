import styles from './layout.module.scss'
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <div>
            <Navbar/>
            <div className={"dark:bg-gray-800"}>
                <div className={"p-4"}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
