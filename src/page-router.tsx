import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ReduxStore from 'redux-store';
import SurveyProvider from './pages/survey-provider';
import PageWrapper from './App/Wrapper/PageWrapper';
import IndexPage from './App/SurveyPages/IndexPage';
import FormPage from './App/SurveyPages/FormPage';

import {pathUtils} from 'utilities';

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
                                        >
                                            <IndexPage />
                                        </Route>
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot +
                                                '/form'
                                            }
                                        >
                                            <FormPage />
                                        </Route>
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot +
                                                '/verify'
                                            }
                                        >
                                            <div>Verify</div>
                                        </Route>
                                        <Route
                                            exact
                                            path={
                                                pathUtils.regex.surveyRoot +
                                                '/success'
                                            }
                                        >
                                            <div>Success</div>
                                        </Route>
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
