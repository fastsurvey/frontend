import React from 'react';

export const icons = {
    info: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path
                className='primary'
                d='M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z'
            />
            <path
                className='secondary'
                d='M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
            />
        </svg>
    ),
    check: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z'
            />
        </svg>
    ),
    error: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z'
            />
        </svg>
    ),
    checkboxEmpty: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <g transform='matrix(0.989012,0,0,1.03872,0.241731,-0.851784)'>
                <path
                    d='M22,4.671C22,3.608 21.094,2.745 19.978,2.745L3.8,2.745C2.684,2.745 1.778,3.608 1.778,4.671L1.778,20.075C1.778,21.137 2.684,22 3.8,22L19.978,22C21.094,22 22,21.137 22,20.075L22,4.671Z'
                    className='fill-grey-200'
                />
            </g>
        </svg>
    ),
    checkboxFilled: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <g transform='matrix(0.989012,0,0,1.03872,0.241731,-0.851784)'>
                <path
                    d='M22,4.671C22,3.608 21.094,2.745 19.978,2.745L3.8,2.745C2.684,2.745 1.778,3.608 1.778,4.671L1.778,20.075C1.778,21.137 2.684,22 3.8,22L19.978,22C21.094,22 22,21.137 22,20.075L22,4.671Z'
                    className='fill-blue-800'
                />
            </g>
            <path
                d='M10,14.59L16.3,8.29C16.48,8.138 16.709,8.054 16.945,8.054C17.494,8.054 17.945,8.505 17.945,9.054C17.945,9.295 17.858,9.528 17.7,9.71L10.7,16.71C10.314,17.089 9.686,17.089 9.3,16.71L6.3,13.71C6.142,13.528 6.055,13.295 6.055,13.054C6.055,12.505 6.506,12.054 7.055,12.054C7.291,12.054 7.52,12.138 7.7,12.29L10,14.59Z'
                className='fill-blue-100'
            />
        </svg>
    ),
    close: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path
                className='secondary'
                fill-rule='evenodd'
                d='M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z'
            />
        </svg>
    ),
    download: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path
                className='primary'
                d='M15 15v-3a3 3 0 0 0-6 0v3H6a4 4 0 0 1-.99-7.88 5.5 5.5 0 0 1 10.86-.82A4.49 4.49 0 0 1 22 10.5a4.5 4.5 0 0 1-4.5 4.5H15z'
            />
            <path
                className='secondary'
                d='M11 18.59V12a1 1 0 0 1 2 0v6.59l1.3-1.3a1 1 0 0 1 1.4 1.42l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l1.3 1.3z'
            />
        </svg>
    ),
    addUser: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path className='primary' d='M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z' />
            <path
                className='secondary'
                d='M17 9V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2zm-1 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'
            />
        </svg>
    ),
};
