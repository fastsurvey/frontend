import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';

function Router() {
    return (
        <BrowserRouter>
            <Route>
                <Switch>
                    <Route exact strict path='^/([a-z]|[A-Z]|[0-9]|-){1,20}/([a-z]|[A-Z]|[0-9]|-){1,20}(|/)$'>
                        <ContentWrapper>
                            <div>Index</div>
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
