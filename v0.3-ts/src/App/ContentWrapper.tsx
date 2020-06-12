import React from 'react';
import RocketLogo from '../assets/branding/rocket.svg';
import './ContentWrapper.scss';
import {isSurveyPath, getSurveyRootPath} from "../functions/pathFunctions";

import PropTypes, {InferProps} from "prop-types";
import {ReduxStore} from "./ReduxWrapper";
import {connect} from "react-redux";


function ContentWrapperComponent(
    {children, fetchingConfig, submittingData}:
        InferProps<typeof ContentWrapperComponent.propTypes>
) {

    let logoURL: string;
    if (isSurveyPath(window.location.pathname)) {
        logoURL = getSurveyRootPath(window.location.pathname);
    } else {
        logoURL = "/";
    }

    return (
        <React.Fragment>
            <header>
                {(!fetchingConfig && !submittingData) && (
                    <div className="FastSurveyIcon" style={{ cursor: "pointer" }}>
                        <a href={logoURL}>
                            <img src={RocketLogo} alt="FastSurvey Icon"/>
                        </a>
                    </div>
                )}
                {(fetchingConfig || submittingData) && (
                    <div  className="FastSurveyIcon" style={{ cursor: "wait" }}>
                        <img src={RocketLogo} alt="FastSurvey Icon"/>
                    </div>
                )}
            </header>
            <main>
                {children}
            </main>
        </React.Fragment>
    );
}

ContentWrapperComponent.propTypes = {
    children: PropTypes.element.isRequired,
    fetchingConfig: PropTypes.bool,
    submittingData: PropTypes.bool,
};

const mapStateToProps = (state: ReduxStore) => ({
    fetchingConfig: state.fetchingConfig,
    submittingData: state.submittingData
});

const ContentWrapper = connect(mapStateToProps, () => {})(ContentWrapperComponent);

export default ContentWrapper;
