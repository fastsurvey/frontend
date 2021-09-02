import React from 'react';
import {
    LandingSection1Intro,
    LandingSection2Demo,
    LandingSection3Pricing,
    LandingSectionLinks,
    LandingSectionFAQ,
} from '@components';

function LandingPage() {
    return (
        <div className='w-full bg-gray-900 centering-col'>
            <LandingSection1Intro />
            <LandingSection2Demo />
            <LandingSection3Pricing />
            <LandingSectionFAQ />
            <LandingSectionLinks />
        </div>
    );
}

export default LandingPage;
