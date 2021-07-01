import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ReduxStore from './redux-store';

import {Message, MainContent} from '@components';
import {pathUtils} from '@utilities';

import SurveyProvider from '@pages/survey-provider';
import SurveyIndexPage from '@pages/survey-page/index';
import SurveyFormPage from '@pages/survey-page/form';
import SurveyVerifyPage from '@pages/survey-page/verify';
import SurveySuccessPage from '@pages/survey-page/success';
import LandingPage from '@pages/landing-page/landing-page';

function PageRouter() {
    return (
        <BrowserRouter>
            <Route>
                <Switch>
                    <Route exact path={'/'}>
                        <LandingPage />
                    </Route>
                    <Route
                        exact
                        path={
                            pathUtils.regex.surveyRoot +
                            pathUtils.regex.surveyAppendix
                        }
                    >
                        <MainContent>
                            <ReduxStore>
                                <Message />
                                <SurveyProvider>
                                    <Switch>
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot + ''
                                            }
                                            component={SurveyIndexPage}
                                        />
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot +
                                                '/form'
                                            }
                                            component={SurveyFormPage}
                                        />
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot +
                                                '/verify'
                                            }
                                            component={SurveyVerifyPage}
                                        />
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot +
                                                '/success'
                                            }
                                            component={SurveySuccessPage}
                                        />
                                    </Switch>
                                </SurveyProvider>
                            </ReduxStore>
                        </MainContent>
                    </Route>
                    <Route>
                        <MainContent>
                            <div>404</div>
                        </MainContent>
                    </Route>
                </Switch>
            </Route>
        </BrowserRouter>
    );
}

export default PageRouter;
