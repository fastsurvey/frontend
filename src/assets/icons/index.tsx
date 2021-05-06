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
    close: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z'
            />
        </svg>
    ),
};
