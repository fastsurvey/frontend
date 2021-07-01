import React from 'react';
import {LandingSection1, LandingSection3, LandingSection4} from '@components';

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
