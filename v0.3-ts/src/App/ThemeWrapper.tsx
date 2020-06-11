import React from 'react';
import App from "./App";
import RocketLogo from '../assets/branding/rocket.svg';
import './ThemeWrapper.scss';
import {isSurveyPath, getSurveyRootPath} from "../functions/pathFunctions";

function ThemeWrapper() {

    let logoURL: string;
    if (isSurveyPath(window.location.pathname)) {
        logoURL = getSurveyRootPath(window.location.pathname);
    } else {
        logoURL = "/";
    }

    return (
        <React.Fragment>
            <header>
                <div  className="FastSurveyIcon">
                    <img src={RocketLogo} alt="FastSurvey Icon"/>
                </div>
            </header>
            <main>
                <App/>
            </main>
        </React.Fragment>
    );
}

export default ThemeWrapper;
