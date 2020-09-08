import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {REGEX_SURVEY_APPENDIX, REGEX_SURVEY_ROOT} from '../../utilities/regexSnippets';
import ReduxWrapper from './ReduxWrapper';
import SurveyRouter from '../Survey/SurveyRouter';
import PageWrapper from './PageWrapper';
import SurveyIndex from '../Survey/SurveyIndex';

function Router() {

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
                            path={REGEX_SURVEY_ROOT + REGEX_SURVEY_APPENDIX}
                        >
                            <ReduxWrapper>
                                <SurveyRouter>
                                    <Switch>
                                        <Route exact path={REGEX_SURVEY_ROOT + ''}>
                                            <SurveyIndex/>
                                        </Route>
                                        <Route exact path={REGEX_SURVEY_ROOT + '/form'}>
                                            <div>Form</div>
                                        </Route>
                                        <Route exact path={REGEX_SURVEY_ROOT + '/verify'}>
                                            <div>Verify</div>
                                        </Route>
                                        <Route exact path={REGEX_SURVEY_ROOT + '/success'}>
                                            <div>Success</div>
                                        </Route>
                                        <Route exact path={REGEX_SURVEY_ROOT + '/results'}>
                                            <div>Results</div>
                                        </Route>
                                    </Switch>
                                </SurveyRouter>
                            </ReduxWrapper>
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

export default Router;
