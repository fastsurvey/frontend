import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import {REGEX_SURVEY_APPENDIX, REGEX_SURVEY_ROOT} from '../../utilities/regexSnippets';

function Router() {

    return (
        <BrowserRouter>
            <Route>
                <ContentWrapper>
                    <Switch>
                        <Route exact path={'/'}>
                            <div>FastSurvey Landing Page</div>
                        </Route>
                        <Route
                            exact
                            path={REGEX_SURVEY_ROOT + REGEX_SURVEY_APPENDIX}
                        >
                            <Switch>
                                <Route exact path={REGEX_SURVEY_ROOT + ''}>
                                    <div>Survey Index</div>
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
                        </Route>
                        <Route>
                            <div>404</div>
                        </Route>
                    </Switch>
                </ContentWrapper>
            </Route>
        </BrowserRouter>
    );
}

export default Router;
