import styles from './layout.module.scss'
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({children, theme, changeTheme}) {
    return (
        // It might be a bit weird, but the dark:bg-gray-800 under here is just to make sure nothing weird happens
        <div className={theme + " flex flex-col min-h-screen h-screen dark:bg-gray-800"}>
            <Navbar theme={theme} changeTheme={changeTheme}/>
            <div className={"flex-1 p-4 dark:bg-gray-800"}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}
