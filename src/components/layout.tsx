import styles from './layout.module.scss'
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children, theme, changeTheme}) {
    return (
        <div className={theme + " transform transition-200 h-screen"}>
            <Navbar theme={theme} changeTheme={changeTheme}/>
            <div className={"dark:bg-gray-800"}>
                <div className={"p-4 min-h-full"}>
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}
