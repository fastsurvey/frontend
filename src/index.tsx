import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/tailwind.out.css';
import ReduxWrapper from './App/Wrapper/ReduxWrapper';
import Router from './App/Wrapper/Router';

ReactDOM.render(
    <React.StrictMode>
        <ReduxWrapper>
            <Router />
        </ReduxWrapper>
    </React.StrictMode>,
    document.getElementById('root'),
);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
        .then((registration) => {
            registration.unregister();
        })
        .catch((error) => {
            console.error(error.message);
        });
}
