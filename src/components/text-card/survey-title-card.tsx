import React from 'react';
import {icons} from '/src/assets/icons';

function SurveyTitleCard(props: {
    title: string;
    surveyRequiresVerification: boolean;
}) {
    return (
        <div
            className={
                'overflow-hidden rounded shadow-sm ' +
                'bg-white dark:bg-gray-700 '
            }
        >
            <h1
                className={
                    'text-2xl font-weight-700 ' +
                    'text-gray-700 dark:text-gray-100 ' +
                    'w-full text-center p-4 shadow-sm '
                }
            >
                {props.title}
            </h1>

            {props.surveyRequiresVerification && (
                <div
                    className={
                        'w-full p-3 pr-4 lg:pr-6 text-justify flex-row-top space-x-2 ' +
                        'bg-gray-75 text-gray-800 border-t ' +
                        'border-gray-300 dark:border-gray-500 ' +
                        'dark:bg-gray-800 dark:text-gray-300'
                    }
                >
                    <div className='flex-shrink-0 w-6 h-6 mr-0.5 md:mr-0 md:w-5 md:h-5 svg-info-card'>
                        {icons.info}
                    </div>
                    <div className='flex-grow text-base md:text-sm font-weight-500'>
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
                    </div>
                </div>
            )}
        </div>
    );
}

export default SurveyTitleCard;
