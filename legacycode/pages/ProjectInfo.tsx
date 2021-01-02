import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import * as _ from "lodash";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export default class ProjectInfo extends React.Component {

    state = {
        projects: []
    }

    componentDidMount(): void {

        fetch(process.env.PUBLIC_URL + "/data/projects.json", {
            method: "GET"
        }).then(response => response.json().then(data => this.setState({projects: data})));

        console.log("test");

    }

    render() {

        const id = parseInt(_.get(this.props, "match.params.id"));

        console.log(id)

        const project = _.find(this.state.projects, (data: any) => {
            return data.key === id;
        });

        console.log(project);

        return (
            <Fragment>
                <div>

                </div>
            </Fragment>
        )
    };
};