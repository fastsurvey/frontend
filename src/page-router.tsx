import React, {useState, useEffect} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Cookies from 'js-cookie';
import {pathUtils} from '/src/utilities';
import {types} from '/src/types';

import SurveyProvider from './survey-provider';
import ReduxStore from './redux-store';

import {MainContent, MessageQueue} from '/src/components';
import {LandingPage, NotFoundPage, MaintenancePage} from '/src/pages';

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
                        <Route exact path='/'>
                            <LandingPage />
                        </Route>
                        <Route
                            exact
                            path={
                                pathUtils.regex.surveyRoot +
                                pathUtils.regex.surveyAppendix
                            }
                        >
                            <ReduxStore>
                                <MessageQueue />
                                <MainContent {...darkModeAttributes}>
                                    <SurveyProvider />
                                </MainContent>
                            </ReduxStore>
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
