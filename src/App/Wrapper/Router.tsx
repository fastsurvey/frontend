import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import {REGEX_SURVEY_APPENDIX, REGEX_SURVEY_ROOT} from '../../utilities/regexSnippets';
import ReduxWrapper from './ReduxWrapper';
import FormWrapper from '../Survey/FormWrapper';

function Router() {

    return (
        <BrowserRouter>
            <Route>
                <ContentWrapper>
                    <Switch>
                        <Route exact path={'/'}>
                            <div>Landing Page</div>
                        </Route>
                        <Route
                            exact
                            path={REGEX_SURVEY_ROOT + REGEX_SURVEY_APPENDIX}
                        >
                            <ReduxWrapper>
                                <FormWrapper>
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
                                </FormWrapper>
                            </ReduxWrapper>
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
