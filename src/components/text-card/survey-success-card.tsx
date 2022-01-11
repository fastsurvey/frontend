import React from 'react';
import {icons} from '/src/assets/icons';
import TextPanel from './components/text-panel';
import {Link} from 'react-router-dom';
import {pathUtils} from '/src/utilities';

function SurveySuccessCard(props: {surveyRequiresVerification: boolean}) {
    const logoURL = pathUtils.getRootPath(window.location.pathname);

    return (
        <TextPanel
            title='Success!'
            content={
                <>
                    {props.surveyRequiresVerification
                        ? 'Your submission is now verified. '
                        : 'Your submission has been counted. '}
                    Thank you for using{' '}
                    <Link
                        to='/'
                        className='underline font-weight-600 text-rose-600 dark:text-blue-200'
                    >
                        FastSurvey
                    </Link>
                    !
                </>
            }
            appendix={
                props.surveyRequiresVerification ? (
                    <>
                        If you want to change your answers, just fill out the
                        form again{' '}
                        <Link
                            to={`${logoURL}/form`}
                            className='text-blue-600 underline dark:text-blue-300'
                        >
                            here
                        </Link>
                        .
                    </>
                ) : undefined
            }
            appendixIcon={icons.info}
        />
    );
}

export default SurveySuccessCard;
