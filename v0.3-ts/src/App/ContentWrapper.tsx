
import React from 'react';
import PropTypes, { InferProps} from 'prop-types';
import { ReduxStore} from '../functions/reduxInterfaces';
import { connect} from 'react-redux';

import RocketLogo from '../assets/branding/rocket.svg';
import { getSurveyRootPath, isSurveyPath } from '../functions/pathFunctions';
import './ContentWrapper.scss';
import {Link} from 'react-router-dom';

function ContentWrapperComponent(
    { children, fetchingConfig, validSurveyId, submittingData }: InferProps<typeof ContentWrapperComponent.propTypes>
) {

    const logoURL: string = isSurveyPath(window.location.pathname) ?
        getSurveyRootPath(window.location.pathname) :
        '/';

    function Content() {
        if ((!fetchingConfig && validSurveyId) || ['', '/'].includes(window.location.pathname)) {
            return children;
        } else if (fetchingConfig) {
            return <div>Fetching</div>;
        } else {
            return <div>404</div>;
        }
    }

    return (
        <React.Fragment>
            <header>
                {(!fetchingConfig && !submittingData) && (
                    <div className='FastSurveyIcon' style={{cursor: 'pointer'}}>
                        <Link to={logoURL}>
                            <img src={RocketLogo} alt='FastSurvey Icon'/>
                        </Link>
                    </div>
                )}
                {(fetchingConfig || submittingData) && (
                    <div className='FastSurveyIcon' style={{cursor: 'wait'}}>
                        <img src={RocketLogo} alt='FastSurvey Icon'/>
                    </div>
                )}
            </header>
            <main>
                <Content/>
            </main>
        </React.Fragment>
    );
}

ContentWrapperComponent.propTypes = {
    children: PropTypes.element.isRequired,
    fetchingConfig: PropTypes.bool,
    validSurveyId: PropTypes.bool,
    submittingData: PropTypes.bool,
};

const mapStateToProps = (state: ReduxStore) => ({
    fetchingConfig: state.fetchingConfig,
    validSurveyId: state.validSurveyId,
    submittingData: state.submittingData,
});

const ContentWrapper = connect(mapStateToProps, () => ({}))(ContentWrapperComponent);

export default ContentWrapper;
