import * as React from 'react';
import {ReduxStore} from '../functions/reduxInterfaces';
import {connect} from 'react-redux';

import RocketLogo from '../assets/branding/rocket.svg';
import {getSurveyRootPath, isSurveyPath} from '../functions/pathFunctions';
import './ContentWrapper.scss';
import '../styles/loader.scss';
import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
}));

interface ContentWrapperComponentProps {
    children: React.ReactChild;
    fetching: boolean;
    submitting: boolean;
    validSurveyId: boolean;
}

function ContentWrapperComponent(props: ContentWrapperComponentProps) {

    const classes = useStyles();

    const logoURL: string = isSurveyPath(window.location.pathname) ?
        getSurveyRootPath(window.location.pathname) :
        '/';

    let content: React.ReactChild;

    if (['', '/'].includes(window.location.pathname)) {
        content = (
            <main>Landing Page</main>
        );
    } else {
        content = (
            <div className={classes.container}>
                <Fade in={props.fetching} timeout={200}>
                    <main>
                        <div className='lds-ripple'>
                            <div/>
                            <div/>
                        </div>
                    </main>
                </Fade>
                <Fade in={!props.fetching && props.validSurveyId} timeout={300} style={{transitionDelay: '200ms'}}>
                    <main>{props.children}</main>
                </Fade>
                <Fade in={!props.fetching && !props.validSurveyId} timeout={300} style={{transitionDelay: '200ms'}}>
                    <main>404</main>
                </Fade>
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
    validSurveyId: state.validSurveyId,
    submitting: state.submitting,
});

const ContentWrapper = connect(mapStateToProps, () => ({}))(ContentWrapperComponent);

export default ContentWrapper;
