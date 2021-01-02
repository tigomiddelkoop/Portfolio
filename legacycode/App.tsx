import React from 'react';

import Homepage from './pages/Homepage';
import {Route, Switch} from 'react-router-dom';
import Notfound from "./pages/Notfound";
// import ProjectInfo from "./pages/ProjectInfo";

export default class App extends React.Component {


    render() {

        return (
            <div className={"bg-gray-800 min-h-screen text-white"}>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route component={Notfound}/>
                </Switch>

            </div>
        );
    }
};
