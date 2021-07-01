import React from 'react';
import LandingSection1 from '../../components/landing-section/landing-section-1';
import LandingSection3 from '../../components/landing-section/landing-section-3';
import LandingSection4 from '../../components/landing-section/landing-section-4';

function LandingPage() {
    return (
        <div className='w-full bg-gray-900 centering-col'>
            <LandingSection1 />
            <LandingSection3 />
            <LandingSection4 />
        </div>
    );
}

export default LandingPage;
