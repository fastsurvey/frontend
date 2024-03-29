import React from 'react';

const SVG = (props: {children: React.ReactNode; id?: string}) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' id={props.id}>
        {props.children}
    </svg>
);
export const icons = {
    info: (
        <SVG>
            <path
                className='primary'
                d='M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z'
            />
            <path
                className='secondary'
                d='M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
            />
        </SVG>
    ),
    check: (
        <SVG>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z'
            />
        </SVG>
    ),
    compass: (
        <SVG>
            <g>
                <path
                    className='secondary'
                    d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
                />
                <path
                    className='primary'
                    d='M13.71 13.03a2 2 0 0 0-2.75-2.75l5.39-4.03c.92-.7 2.1.48 1.4 1.4l-4.04 5.38zm-.3.38zm-.38.3l-5.38 4.04c-.92.7-2.1-.48-1.4-1.4l4.04-5.38a2 2 0 0 0 2.75 2.75zM10.6 10.6z'
                />
            </g>
        </SVG>
    ),
    error: (
        <SVG>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z'
            />
        </SVG>
    ),
    checkboxEmpty: (
        <SVG>
            <g transform='matrix(0.989012,0,0,1.03872,0.241731,-0.851784)'>
                <path
                    d='M22,4.671C22,3.608 21.094,2.745 19.978,2.745L3.8,2.745C2.684,2.745 1.778,3.608 1.778,4.671L1.778,20.075C1.778,21.137 2.684,22 3.8,22L19.978,22C21.094,22 22,21.137 22,20.075L22,4.671Z'
                    className='fill-gray-300'
                />
            </g>
        </SVG>
    ),
    checkboxFilled: (
        <SVG>
            <g transform='matrix(0.989012,0,0,1.03872,0.241731,-0.851784)'>
                <path
                    d='M22,4.671C22,3.608 21.094,2.745 19.978,2.745L3.8,2.745C2.684,2.745 1.778,3.608 1.778,4.671L1.778,20.075C1.778,21.137 2.684,22 3.8,22L19.978,22C21.094,22 22,21.137 22,20.075L22,4.671Z'
                    className='fill-blue-100'
                />
            </g>
            <path
                d='M10,14.59L16.3,8.29C16.48,8.138 16.709,8.054 16.945,8.054C17.494,8.054 17.945,8.505 17.945,9.054C17.945,9.295 17.858,9.528 17.7,9.71L10.7,16.71C10.314,17.089 9.686,17.089 9.3,16.71L6.3,13.71C6.142,13.528 6.055,13.295 6.055,13.054C6.055,12.505 6.506,12.054 7.055,12.054C7.291,12.054 7.52,12.138 7.7,12.29L10,14.59Z'
                className='fill-blue-900'
            />
        </SVG>
    ),
    circle: (
        <SVG>
            <circle cx='12' cy='12' r='10' className='primary' />
        </SVG>
    ),
    close: (
        <SVG>
            <path
                className='secondary'
                fillRule='evenodd'
                d='M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z'
            />
        </SVG>
    ),
    closeCircle: (
        <SVG>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z'
            />
        </SVG>
    ),
    light: (
        <SVG>
            <path
                className='primary'
                d='M5 8a7 7 0 1 1 10.62 6l-.64 3.2a1 1 0 0 1-.98.8h-4a1 1 0 0 1-.98-.8L8.38 14A7 7 0 0 1 5 8zm12 0a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 0 0 2 0z'
            />
            <path
                className='secondary'
                d='M15 21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z'
            />
        </SVG>
    ),
    download: (
        <SVG>
            <path
                className='primary'
                d='M15 15v-3a3 3 0 0 0-6 0v3H6a4 4 0 0 1-.99-7.88 5.5 5.5 0 0 1 10.86-.82A4.49 4.49 0 0 1 22 10.5a4.5 4.5 0 0 1-4.5 4.5H15z'
            />
            <path
                className='secondary'
                d='M11 18.59V12a1 1 0 0 1 2 0v6.59l1.3-1.3a1 1 0 0 1 1.4 1.42l-3 3a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l1.3 1.3z'
            />
        </SVG>
    ),
    addUser: (
        <SVG>
            <path className='primary' d='M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8z' />
            <path
                className='secondary'
                d='M17 9V7a1 1 0 0 1 2 0v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2zm-1 10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z'
            />
        </SVG>
    ),
    discount: (
        <SVG>
            <path
                className='primary'
                d='M10.75 21.19l-.85.28c-1.21.4-2.53-.15-3.1-1.29l-.4-.8a4 4 0 0 0-1.78-1.77l-.8-.4a2.57 2.57 0 0 1-1.29-3.1l.28-.86a4 4 0 0 0 0-2.5l-.28-.85c-.4-1.21.15-2.53 1.29-3.1l.8-.4a4 4 0 0 0 1.77-1.78l.4-.8a2.57 2.57 0 0 1 3.1-1.29l.86.28a4 4 0 0 0 2.5 0l.85-.28c1.21-.4 2.53.15 3.1 1.29l.4.8a4 4 0 0 0 1.78 1.77l.8.4a2.57 2.57 0 0 1 1.29 3.1l-.28.86a4 4 0 0 0 0 2.5l.28.85c.4 1.21-.15 2.53-1.29 3.1l-.8.4a4 4 0 0 0-1.77 1.78l-.4.8a2.57 2.57 0 0 1-3.1 1.29l-.86-.28a4 4 0 0 0-2.5 0z'
            />
            <path
                className='secondary'
                d='M8.7 16.7a1 1 0 1 1-1.4-1.4l8-8a1 1 0 0 1 1.4 1.4l-8 8zm6.8.3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-7-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z'
            />
        </SVG>
    ),
    currencyEuro: (
        <SVG>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M7.1 11H13a1 1 0 0 1 0 2H7.1a5 5 0 0 0 8.44 2.54 1 1 0 0 1 1.41 1.41A7 7 0 0 1 5.07 13H5a1 1 0 0 1 0-2h.07a7 7 0 0 1 11.88-3.95 1 1 0 1 1-1.41 1.41A5 5 0 0 0 7.1 11z'
            />
        </SVG>
    ),
    package: (
        <SVG>
            <g>
                <polygon
                    className='secondary'
                    points='15 3.333 15 4.67 18.008 4.67 21 6 14 12 12 22 3 18 3 6 12 2'
                />
                <path
                    className='primary'
                    d='M21 6v12l-9 4V10l9-4zM9 8.67v3l-3-1.34v-3l9-4 3 1.34-9 4z'
                />
            </g>
        </SVG>
    ),
    calculator: (
        <SVG>
            <path
                className='primary'
                d='M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm2 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-8 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-4 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
            />
            <rect
                width='2'
                height='6'
                x='15'
                y='13'
                className='secondary'
                rx='1'
            />
        </SVG>
    ),
    creditCard: (
        <SVG>
            <path
                className='primary'
                d='M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm13 12a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zm-6 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2z'
            />
            <rect width='20' height='4' x='2' y='7' className='secondary' />
        </SVG>
    ),
    security: (
        <SVG>
            <path
                className='primary'
                d='M4 4l8-2 8 2v9.06a8 8 0 0 1-4.42 7.15L12 22l-3.58-1.79A8 8 0 0 1 4 13.06V4z'
            />
            <path
                className='secondary'
                d='M6 12V5.56l6-1.5V12H6zm6 7.76V12h6v1.06a6 6 0 0 1-3.32 5.36L12 19.76z'
            />
        </SVG>
    ),
    chart: (
        <SVG>
            <path
                className='primary'
                d='M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm11 4a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z'
            />
            <path
                className='secondary'
                d='M8 11a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm4-2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z'
            />
        </SVG>
    ),
    edit: (
        <SVG>
            <path
                className='primary'
                d='M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z'
            />
            <rect
                width='20'
                height='2'
                x='2'
                y='20'
                className='secondary'
                rx='1'
            />
        </SVG>
    ),
    link: (
        <SVG>
            <path
                className='secondary'
                d='M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z'
            />
            <path
                className='primary'
                d='M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z'
            />
        </SVG>
    ),
    launch: (
        <SVG>
            <g>
                <path
                    className='secondary'
                    d='M14.57 6.96a2 2 0 0 1 2.47 2.47c.29.17.5.47.5.86v7.07a1 1 0 0 1-.3.71L13 22.31a1 1 0 0 1-1.7-.7v-3.58l-.49.19a1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16l.19-.48H2.39A1 1 0 0 1 1.7 11l4.24-4.24a1 1 0 0 1 .7-.3h7.08c.39 0 .7.21.86.5zM13.19 9.4l-2.15 2.15a3 3 0 0 1 .84.57 3 3 0 0 1 .57.84l2.15-2.15A2 2 0 0 1 13.2 9.4zm6.98-6.61a1 1 0 0 1 1.04 1.04c-.03.86-.13 1.71-.3 2.55-.47-.6-1.99-.19-2.55-.74-.55-.56-.14-2.08-.74-2.55.84-.17 1.7-.27 2.55-.3z'
                />
                <path
                    className='primary'
                    d='M7.23 10.26A16.05 16.05 0 0 1 17.62 3.1a19.2 19.2 0 0 1 3.29 3.29 15.94 15.94 0 0 1-7.17 10.4 19.05 19.05 0 0 0-6.51-6.52zm-.86 5.5a16.2 16.2 0 0 1 1.87 1.87 1 1 0 0 1-.47 1.6c-.79.25-1.6.42-2.4.54a1 1 0 0 1-1.14-1.13c.12-.82.3-1.62.53-2.41a1 1 0 0 1 1.6-.47zm7.34-5.47a2 2 0 1 0 2.83-2.83 2 2 0 0 0-2.83 2.83z'
                />
            </g>
        </SVG>
    ),
    chat: (
        <SVG>
            <path
                className='primary'
                d='M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2z'
            />
            <path
                className='secondary'
                d='M6 7h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm0 4h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z'
            />
        </SVG>
    ),
    chevronLeftCircle: (
        <SVG id='chevron-left-circle'>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M13.7 15.3a1 1 0 0 1-1.4 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.4 1.4L10.42 12l3.3 3.3z'
            />
        </SVG>
    ),
    chevronRightCircle: (
        <SVG id='chevron-right-circle'>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z'
            />
        </SVG>
    ),
    globe: (
        <SVG>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M2.05 11A10 10 0 0 1 15 2.46V6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-1 1.73V12h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v2.14A9.97 9.97 0 0 1 12 22v-4h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1-2-2v-1H2.05z'
            />
        </SVG>
    ),
    widgetAdd: (
        <SVG>
            <path
                className='primary'
                d='M5 13h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zm10 0h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2zM5 3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2z'
            />
            <path
                className='secondary'
                d='M18 6h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V8h-2a1 1 0 0 1 0-2h2V4a1 1 0 0 1 2 0v2z'
            />
        </SVG>
    ),
    time: (
        <SVG>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z'
            />
        </SVG>
    ),

    certificate: (
        <SVG>
            <path
                className='primary'
                d='M4 3h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm16 12V7a2 2 0 0 1-2-2H6a2 2 0 0 1-2 2v8a2 2 0 0 1 2 2h12c0-1.1.9-2 2-2zM8 7h8a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2z'
            />
            <path
                className='secondary'
                d='M11.65 18.23a4 4 0 1 1 4.7 0l2.5 3.44-2.23-.18-1.48 1.68-.59-4.2a4.04 4.04 0 0 1-1.1 0l-.6 4.2-1.47-1.68-2.23.18 2.5-3.44zM14 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
            />
        </SVG>
    ),
    chatGroup: (
        <SVG>
            <rect
                width='16'
                height='13'
                x='2'
                y='2'
                className='secondary'
                rx='2'
            />
            <path
                className='primary'
                d='M6 16V8c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v13a1 1 0 0 1-1.7.7L16.58 18H8a2 2 0 0 1-2-2z'
            />
        </SVG>
    ),
    gitHub: (
        <SVG>
            <path
                className='primary'
                fillRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                clipRule='evenodd'
            />
        </SVG>
    ),
    heart: (
        <SVG>
            <circle cx='12' cy='12' r='10' className='primary' />
            <path
                className='secondary'
                d='M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z'
            />
        </SVG>
    ),
    lock: (
        <SVG>
            <g>
                <path
                    className='secondary'
                    d='M12 10v3a2 2 0 0 0-1 3.73V18a1 1 0 0 0 1 1v3H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h7z'
                />
                <path
                    className='primary'
                    d='M12 19a1 1 0 0 0 1-1v-1.27A2 2 0 0 0 12 13v-3h3V7a3 3 0 0 0-6 0v3H7V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7v-3z'
                />
            </g>
        </SVG>
    ),
    paint: (
        <SVG>
            <path
                className='secondary'
                d='M13 14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1v-1.4a3 3 0 0 1 2.35-2.92l5.87-1.3A1 1 0 0 0 20 7.4V7a1 1 0 0 0-1-1h-1V4h1a3 3 0 0 1 3 3v.4a3 3 0 0 1-2.35 2.92l-5.87 1.3a1 1 0 0 0-.78.98V14z'
            />
            <rect
                width='17'
                height='6'
                x='2'
                y='2'
                className='primary'
                rx='2'
            />
        </SVG>
    ),
};
