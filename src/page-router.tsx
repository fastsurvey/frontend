import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {pathUtils} from 'utilities';
import MainContent from './components/main-content/main-content';
import ReduxStore from 'redux-store';
import SurveyProvider from './pages/survey-provider';
import SurveyIndexPage from './pages/survey-page/index';
import SurveyFormPage from './pages/survey-page/form';
import SurveyVerifyPage from './pages/survey-page/verify';
import SurveySuccessPage from './pages/survey-page/success';
import Message from 'components/message/message';

function PageRouter() {
    return (
        <BrowserRouter>
            <Route>
                <MainContent>
                    <Switch>
                        <Route exact path={'/'}>
                            <div>Landing Page</div>
                        </Route>
                        <Route
                            exact
                            path={
                                pathUtils.regex.surveyRoot +
                                pathUtils.regex.surveyAppendix
                            }
                        >
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
                        </Route>
                        <Route>
                            <div>404</div>
                        </Route>
                    </Switch>
                </MainContent>
            </Route>
        </BrowserRouter>
    );
}

export default PageRouter;
