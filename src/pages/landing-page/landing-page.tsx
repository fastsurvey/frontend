import React from 'react';
import LandingSection1 from 'components/landing-section/landing-section-1';
import LandingSection3 from 'components/landing-section/landing-section-3';

function LandingPage() {
    return (
        <div className='w-full bg-gray-900 centering-col'>
            <LandingSection1 />
            <LandingSection3 />
        </div>
    );
}

export default LandingPage;
