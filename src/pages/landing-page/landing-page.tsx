import React from 'react';
import {
    LandingSection1Intro,
    LandingSection2Demo,
    LandingSection3Pricing,
    LandingSection4Sitemap,
} from '@components';

function LandingPage() {
    return (
        <div className='w-full bg-gray-900 centering-col'>
            <LandingSection1Intro />
            <LandingSection2Demo />
            <LandingSection3Pricing />
            <LandingSection4Sitemap />
        </div>
    );
}

export default LandingPage;
