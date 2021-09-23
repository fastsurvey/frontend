import React from 'react';
import {VisualTextCard, VisualInfoCard} from '@components';
import {Link} from 'react-router-dom';

function SurveyVerifyPage() {
    const email = new URLSearchParams(window.location.search).get('email');

    return (
        <div className='w-full max-w-xl space-y-4'>
            <VisualTextCard title={'Verify now!'}>
                Please log into your email account and click on the verification
                link in the email named <strong>"FastSurvey Submission"</strong>
            </VisualTextCard>
            <VisualInfoCard
                variant='change-later'
                email={email === null ? undefined : email}
            />
        </div>
    );
}

export default SurveyVerifyPage;
