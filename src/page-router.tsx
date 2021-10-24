import React, {useState, useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ReduxStore from './redux-store';
import Cookies from 'js-cookie';

import {Message, MainContent} from '/src/components';
import {pathUtils} from '/src/utilities';

import SurveyProvider from '/src/pages/survey-provider';
import SurveyIndexPage from '/src/pages/survey-page/index';
import SurveyFormPage from '/src/pages/survey-page/form';
import SurveyVerifyPage from '/src/pages/survey-page/verify';
import SurveySuccessPage from '/src/pages/survey-page/success';
import LandingPage from '/src/pages/landing-page/landing-page';
import NotFoundPage from '/src/pages/not-found-page';
import {types} from '/src/types';
import MaintenancePage from '/src/components/layout/maintenance-page';

function PageRouter() {
    function systemIsDark() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    const toggleCookie: string | undefined = Cookies.get('darkModeToggle');
    const [darkModeToggle, setDarkModeToggle] = useState<types.darkModeSetting>(
        toggleCookie === 'light' || toggleCookie === 'dark'
            ? toggleCookie
            : 'auto',
    );
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        // Switching between dark/light theme in html
        setDarkMode(
            darkModeToggle === 'dark' ||
                (darkModeToggle === 'auto' && systemIsDark()),
        );

        // Store preferred setting in cookie
        Cookies.set('darkModeToggle', darkModeToggle, {expires: 365});
    }, [darkModeToggle]);

    const darkModeAttributes = {
        darkModeToggle,
        setDarkModeToggle,
        darkMode,
    };
    if (import.meta.env.VITE_MAINTENANCE === 'true') {
        return (
            <MaintenancePage {...darkModeAttributes}>
                we will be back shortly
            </MaintenancePage>
        );
    } else {
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
                            <MainContent {...darkModeAttributes}>
                                <ReduxStore>
                                    <Message />
                                    <SurveyProvider>
                                        <Switch>
                                            <Route
                                                exact
                                                path={
                                                    pathUtils.regex.surveyRoot +
                                                    ''
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
                            <MainContent {...darkModeAttributes}>
                                <NotFoundPage />
                            </MainContent>
                        </Route>
                    </Switch>
                </Route>
            </BrowserRouter>
        );
    }
}

export default PageRouter;
