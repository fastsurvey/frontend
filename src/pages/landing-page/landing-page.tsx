import React from 'react';
import {
    LandingSection1Intro,
    LandingSection2Demo,
    LandingSection3Pricing,
    LandingSection4Philosophy,
    LandingSection5Sitemap,
} from '@components';

function LandingPage() {
    return (
        <div className='w-full bg-gray-900 centering-col'>
            <LandingSection1Intro />
            <LandingSection2Demo />
            <LandingSection3Pricing />
            <LandingSection4Philosophy />
            <LandingSection5Sitemap />
        </div>
    );
}

export default LandingPage;
