import React from 'react';
import ReactDOM from 'react-dom';

import 'typeface-quicksand';
import '/src/styles/tailwind.css';

import PageRouter from './page-router';

ReactDOM.render(
    <React.StrictMode>
        <PageRouter />
    </React.StrictMode>,
    document.getElementById('root'),
);
