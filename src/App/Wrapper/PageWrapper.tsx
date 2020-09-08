
import * as React from 'react';
import { connect } from 'react-redux';

import RocketLogo from '../../assets/branding/rocket.svg';
import { getRootPath, isSurveyPath } from '../../utilities/pathFunctions';
import '../../styles/PageWrapper.scss';
import '../../styles/loader.scss';

import { Link } from 'react-router-dom';

import { ReduxStore } from '../../utilities/reduxTypes';

interface PageWrapperComponentProps {
    children: React.ReactChild;
}

function PageWrapperComponent(props: PageWrapperComponentProps) {

    const logoURL: string = isSurveyPath(window.location.pathname) ?
        getRootPath(window.location.pathname) :
        '/';

    return (
        <React.Fragment>
            <header>
                <Link to={logoURL}>
                    <div className='FastSurveyIcon'>
                        <img src={RocketLogo} alt='FastSurvey Icon'/>
                    </div>
                </Link>
            </header>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    fetching: state.fetching,
    formConfig: state.formConfig,
});

const PageWrapper = connect(mapStateToProps, () => ({}))(PageWrapperComponent);

export default PageWrapper;
