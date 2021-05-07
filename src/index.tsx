import 'styles/tailwind.out.css';
import 'typeface-rubik';
import 'typeface-montserrat';

import React from 'react';
import ReactDOM from 'react-dom';
import PageRouter from 'page-router';

ReactDOM.render(
    <React.StrictMode>
        <PageRouter />
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
