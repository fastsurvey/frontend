
import React from 'react';
import PropTypes, { InferProps} from 'prop-types';
import { ReduxStore} from '../functions/reduxInterfaces';
import { connect} from 'react-redux';

import RocketLogo from '../assets/branding/rocket.svg';
import { getSurveyRootPath, isSurveyPath } from '../functions/pathFunctions';
import './ContentWrapper.scss';

function ContentWrapperComponent(
    { children, fetchingConfig, submittingData }: InferProps<typeof ContentWrapperComponent.propTypes>
) {

    const logoURL: string = isSurveyPath(window.location.pathname) ?
        getSurveyRootPath(window.location.pathname) :
        '/';

    return (
        <React.Fragment>
            <header>
                {(!fetchingConfig && !submittingData) && (
                    <div className='FastSurveyIcon' style={{cursor: 'pointer'}}>
                        <a href={logoURL}>
                            <img src={RocketLogo} alt='FastSurvey Icon'/>
                        </a>
                    </div>
                )}
                {(fetchingConfig || submittingData) && (
                    <div className='FastSurveyIcon' style={{cursor: 'wait'}}>
                        <img src={RocketLogo} alt='FastSurvey Icon'/>
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
    submittingData: state.submittingData,
});

const ContentWrapper = connect(mapStateToProps, () => {
})(ContentWrapperComponent);

export default ContentWrapper;
