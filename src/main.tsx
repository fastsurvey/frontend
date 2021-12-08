import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';

import PageRouter from './page-router';

import 'typeface-quicksand';
import '/src/styles/tailwind.css';

// only use sentry when image was built with docker
if (import.meta.env.MODE === 'production') {
    Sentry.init({
        dsn: `${import.meta.env.VITE_SENTRY_API}`,
        environment: `${import.meta.env.VITE_ENV}`,
        release: `${import.meta.env.VITE_COMMIT_SHA}`,
        sampleRate: 1.0,
    });
}

ReactDOM.render(
    <React.StrictMode>
        <PageRouter />
    </React.StrictMode>,
    document.getElementById('root'),
);
