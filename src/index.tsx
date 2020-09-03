
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import ReduxWrapper from './App/Wrapper/ReduxWrapper';
import Router from './App/Wrapper/Router';

ReactDOM.render(
    <React.StrictMode>
        <ReduxWrapper>
            <Router/>
        </ReduxWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
