import React from 'react';
import {icons} from '@assets/icons';
import {pathUtils} from '@utilities';
import {Link} from 'react-router-dom';

function VisualInfoCard(props: {
    variant: 'email-auth' | 'change-later';
    email?: string;
}) {
    let content: React.ReactNode;
    const logoURL = pathUtils.getRootPath(window.location.pathname);

    switch (props.variant) {
        case 'email-auth':
            content = (
                <>
                    <div className='mb-3'>
                        This survey requires you to{' '}
                        <strong className='font-weight-700 text-grey-700'>
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
        case 'change-later':
            content = (
                <>
                    If there is a typo in your email
                    {props.email && (
                        <>
                            {' '}
                            (<strong>{props.email}</strong>)
                        </>
                    )}
                    , or you want to change your answers, just fill out the form
                    again{' '}
                    <Link
                        to={`${logoURL}/form`}
                        className='text-blue-600 underline'
                    >
                        here
                    </Link>
                    .
                </>
            );
            break;
    }
    return (
        <div
            className={
                'w-full p-3 pr-4 lg:pr-6 text-justify flex-row-top space-x-2 ' +
                'rounded shadow bg-gray-50 text-gray-800'
            }
        >
            <div className='flex-shrink-0 w-6 h-6 mr-0.5 md:mr-0 md:w-5 md:h-5 icon-blue'>
                {icons.info}
            </div>
            <div className='text-base md:text-sm font-weight-500'>
                {content}
            </div>
        </div>
    );
}

export default VisualInfoCard;
