import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ContentWrapper from './ContentWrapper';


const REGEX_SURVEY_ROOT = '/([a-zA-Z0-9-]{3,20})/([a-zA-Z0-9-]{3,20})';

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
                            path={REGEX_SURVEY_ROOT + '(|/form|/verify|/success|/results)'}
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
