import styles from './layout.module.scss'
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children}) {
    return <div>
        <div>
            <Navbar/>
        </div>
        <div className={"m-4"}>
            {children}
        </div>
        {/*<div>*/}
        {/*    <Footer/>*/}
        {/*</div>*/}
    </div>
}
