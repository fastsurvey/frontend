import React from 'react';
import {icons} from '../../assets/icons';

function VisualInfoCard(props: {variant: 'email-auth' | 'change-later'}) {
    let content: React.ReactNode;

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
                    If you want to change your submission later, just fill out
                    the survey again using the same email address.
                </>
            );
            break;
    }
    return (
        <div
            className={
                'w-full p-3 pr-4 lg:pr-6 text-justify flex-row-top space-x-2 ' +
                'rounded shadow-md bg-grey-050 text-grey-600'
            }
        >
            <div className='flex-shrink-0 w-6 h-6 icon-grey'>{icons.info}</div>
            <div className='text-base font-weight-500'>{content}</div>
        </div>
    );
}

export default VisualInfoCard;
