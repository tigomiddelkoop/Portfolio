import React, {Fragment} from "react";
import Projects from "../components/Projects";
import ProgrammingLanguages from "../components/ProgrammingLanguages";
import DesignerMessage from "../components/DesignerMessage";
import PersonalInfo from "../components/PersonalInfo";
import CV from "../components/CV";
import Frameworks from "../components/Frameworks";

export default class Homepage extends React.Component {

    /**
     *
     * Renders the elements that are going to be displayed on the page
     *
     * @return {JSX.Element} The element that needs to be rendered
     *
     */

    componentDidMount() {
        window.addEventListener("beforeprint", (event) => {
            event.preventDefault();
            window.location.assign("/data/CV.pdf")
        });

        window.addEventListener("keydown", (event) => {
            if (event.ctrlKey && event.code === "KeyP") {
                event.preventDefault();
                window.location.assign("/data/CV.pdf")

            }
        })
    }

    componentWillUnmount() {

    }

    render(): JSX.Element {
        return (
            <Fragment>
                <CV/>
                <div className={"p-5"}>

                    <DesignerMessage/>

                    <div>
                        <PersonalInfo/>
                    </div>

                    <div>
                        <ProgrammingLanguages/>
                    </div>
                    <div>
                        <Frameworks/>
                    </div>
                    <div>
                        <Projects/>
                    </div>
                </div>
            </Fragment>
        )
    }
}