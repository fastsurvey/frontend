import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ReduxStore from 'redux-store';
import SurveyProvider from './pages/survey-provider';
import PageWrapper from './App/Wrapper/PageWrapper';

import {pathUtils} from 'utilities';
import SurveyIndexPage from './pages/survey-page/index';

function PageRouter() {
    return (
        <BrowserRouter>
            <Route>
                <PageWrapper>
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
                                            component={SurveyIndexPage}
                                        />
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot +
                                                '/verify'
                                            }
                                            component={SurveyIndexPage}
                                        />
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot +
                                                '/success'
                                            }
                                            component={SurveyIndexPage}
                                        />
                                    </Switch>
                                </SurveyProvider>
                            </ReduxStore>
                        </Route>
                        <Route>
                            <div>404</div>
                        </Route>
                    </Switch>
                </PageWrapper>
            </Route>
        </BrowserRouter>
    );
}

export default PageRouter;
