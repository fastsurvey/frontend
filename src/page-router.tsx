import React, {useState} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ReduxStore from './redux-store';

import {Message, MainContent} from '/components';
import {pathUtils} from '/utilities';

import SurveyProvider from '/pages/survey-provider';
import SurveyIndexPage from '/pages/survey-page/index';
import SurveyFormPage from '/pages/survey-page/form';
import SurveyVerifyPage from '/pages/survey-page/verify';
import SurveySuccessPage from '/pages/survey-page/success';
import LandingPage from '/pages/landing-page/landing-page';
import NotFoundPage from '/pages/not-found-page';
import {useEffect} from 'react';
import Cookies from 'js-cookie';
import {types} from 'types';
import MaintenancePage from '/components/layout/maintenance-page';

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
