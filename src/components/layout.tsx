import styles from './layout.module.scss'
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <div>
            <Navbar/>
            <div className={"m-4"}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
