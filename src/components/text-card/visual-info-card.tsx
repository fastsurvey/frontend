import React from 'react';
import {icons} from '/src/assets/icons';
import {pathUtils} from '/src/utilities';
import {Link} from 'react-router-dom';

function VisualInfoCard(props: {
    variant: 'email-auth' | 'verify' | 'success';
    email?: string;
    title?: string;
}) {
    let content: React.ReactNode;
    const logoURL = pathUtils.getRootPath(window.location.pathname);

    switch (props.variant) {
        case 'email-auth':
            content = (
                <>
                    <div className='mb-3'>
                        This survey requires you to{' '}
                        <strong className='text-gray-900 dark:text-gray-200 font-weight-700'>
                            verify your identity via an email confirmation.
                        </strong>
                    </div>
                    <div>
                        You will be asked to enter your email. After your
                        submission you will receive an email with a link to
                        verify your submission.
                    </div>
                </>
            );
            break;
        case 'verify':
            content = (
                <>
                    If there is a typo in your email
                    {props.email && (
                        <>
                            {' '}
                            (
                            <strong className='text-gray-900 dark:text-gray-200 font-weight-700'>
                                {props.email}
                            </strong>
                            )
                        </>
                    )}
                    , or you want to change your answers, just fill out the form
                    again{' '}
                    <Link
                        to={`${logoURL}/form`}
                        className='text-blue-600 underline dark:text-blue-300'
                    >
                        here
                    </Link>
                    .
                </>
            );
            break;
        case 'success':
            content = (
                <>
                    If you want to change your answers, just fill out the form
                    again{' '}
                    <Link
                        to={`${logoURL}/form`}
                        className='text-blue-600 underline dark:text-blue-300'
                    >
                        here
                    </Link>
                    .
                </>
            );
            break;
    }
    return (
        <div className='overflow-hidden rounded shadow-sm'>
            {props.title !== undefined && (
                <h1
                    className={
                        'text-2xl font-weight-700 ' +
                        'text-gray-700 dark:text-gray-300 bg-white ' +
                        'w-full text-center p-6 shadow-sm  rounded ' +
                        'border-b border-gray-300'
                    }
                >
                    {props.title}
                </h1>
            )}
            <div
                className={
                    'w-full p-3 pr-4 lg:pr-6 text-justify flex-row-top space-x-2 ' +
                    'bg-gray-50 text-gray-800 ' +
                    'dark:bg-gray-800 dark:text-gray-300'
                }
            >
                <div className='flex-shrink-0 w-6 h-6 mr-0.5 md:mr-0 md:w-5 md:h-5 svg-info-card'>
                    {icons.info}
                </div>
                <div className='flex-grow text-base md:text-sm font-weight-500'>
                    {content}
                </div>
            </div>
        </div>
    );
}

export default VisualInfoCard;
