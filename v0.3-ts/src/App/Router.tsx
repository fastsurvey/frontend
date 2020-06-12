import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';

function Router() {
    return (
        <BrowserRouter>
            <Route>
                <Switch>
                    <Route exact path={'/'}>
                        <ContentWrapper>
                            <div>FastSurvey Landing Page</div>
                        </ContentWrapper>
                    </Route>
                    <Route exact path={`/([a-zA-Z0-9-]{1,20})/([a-zA-Z0-9-]{1,20})`}>
                        <ContentWrapper>
                            <div>Survey Index</div>
                        </ContentWrapper>
                    </Route>
                    <Route exact path={`/([a-zA-Z0-9-]{1,20})/([a-zA-Z0-9-]{1,20})/form`}>
                        <ContentWrapper>
                            <div>Form</div>
                        </ContentWrapper>
                    </Route>
                    <Route exact path={`/([a-zA-Z0-9-]{1,20})/([a-zA-Z0-9-]{1,20})/verify`}>
                        <ContentWrapper>
                            <div>Verify</div>
                        </ContentWrapper>
                    </Route>
                    <Route exact path={`/([a-zA-Z0-9-]{1,20})/([a-zA-Z0-9-]{1,20})/success`}>
                        <ContentWrapper>
                            <div>Success</div>
                        </ContentWrapper>
                    </Route>
                    <Route exact path={`/([a-zA-Z0-9-]{1,20})/([a-zA-Z0-9-]{1,20})/results`}>
                        <ContentWrapper>
                            <div>Results</div>
                        </ContentWrapper>
                    </Route>
                    <Route>
                        <ContentWrapper>
                            <div>404</div>
                        </ContentWrapper>
                    </Route>
                </Switch>
            </Route>
        </BrowserRouter>
    );
}

export default Router;
