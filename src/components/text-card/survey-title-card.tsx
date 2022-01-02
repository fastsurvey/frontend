import React from 'react';
import {icons} from '/src/assets/icons';
import TextPanel from './components/text-panel';

function SurveyTitleCard(props: {
    title: string;
    surveyRequiresVerification: boolean;
}) {
    return (
        <TextPanel
            title={props.title}
            appendix={
                props.surveyRequiresVerification ? (
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
                ) : undefined
            }
            appendixIcon={icons.info}
        />
    );
}

export default SurveyTitleCard;
