import React from 'react';
import VisualTextCard from '../../components/text-card/visual-text-card';
import VisualInfoCard from '../../components/info-card/visual-info-card';

function SurveyVerifyPage() {
    return (
        <div className='w-full max-w-xl space-y-4'>
            <VisualTextCard title={'Verify now!'}>
                Please log into your email account and click on the verification
                link in the email <strong>"FastSurvey Submission"</strong>.
            </VisualTextCard>
            <VisualInfoCard variant='change-later' />
        </div>
    );
}

export default SurveyVerifyPage;
