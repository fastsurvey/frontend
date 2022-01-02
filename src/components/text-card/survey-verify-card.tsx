import React from 'react';
import {icons} from '/src/assets/icons';
import TextPanel from './components/text-panel';
import {Link} from 'react-router-dom';
import {pathUtils} from '/src/utilities';

function SurveyVerifyCard(props: {email?: string}) {
    const logoURL = pathUtils.getRootPath(window.location.pathname);

    return (
        <TextPanel
            title='Verification required!'
            appendix={
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
            }
            appendixIcon={icons.info}
        />
    );
}

export default SurveyVerifyCard;
