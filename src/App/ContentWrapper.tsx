
import * as React from 'react';
import {ReduxStore} from '../utilities/reduxTypes';
import {connect} from 'react-redux';

import RocketLogo from '../assets/branding/rocket.svg';
import {getRootPath, isSurveyPath} from '../utilities/pathFunctions';
import './ContentWrapper.scss';
import '../styles/loader.scss';

import {Link} from 'react-router-dom';
import {ConfigInterface} from '../utilities/fieldTypes';

interface ContentWrapperComponentProps {
    children: React.ReactChild;
    fetching: boolean;
    submitting: boolean;
    config: ConfigInterface;
}

function ContentWrapperComponent(props: ContentWrapperComponentProps) {

    const logoURL: string = isSurveyPath(window.location.pathname) ?
        getRootPath(window.location.pathname) :
        '/';

    let content: React.ReactChild;

    if (['', '/'].includes(window.location.pathname)) {
        content = (
            <main>Landing Page</main>
        );
    } else {
        content = (
            <div>
                {props.fetching && (
                    <main>
                        <div className='lds-ripple'>
                            <div/>
                            <div/>
                        </div>
                    </main>
                )}
                {(!props.fetching && props.config !== undefined) && (
                    <main>{props.children}</main>
                )}
                {(!props.fetching && props.config === undefined) && (
                    <main>404</main>
                )}
            </div>
        );
    }

    return (
        <React.Fragment>
            <header>
                <Link to={logoURL}>
                    <div className='FastSurveyIcon'>
                        <img src={RocketLogo} alt='FastSurvey Icon'/>
                    </div>
                </Link>
            </header>
            {content}
        </React.Fragment>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    fetching: state.fetching,
    submitting: state.submitting,
    config: state.config
});

const ContentWrapper = connect(mapStateToProps, () => ({}))(ContentWrapperComponent);

export default ContentWrapper;
