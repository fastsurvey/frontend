import React from 'react';
import {
    LandingSectionIntro,
    LandingSectionWhy,
    LandingSectionDemo,
    LandingSectionPricing,
    LandingSectionLinks,
    LandingSectionQuestions,
} from '/src/components';
import Footer from '/src/components/layout/footer';

const VITE_ENV = import.meta.env.VITE_ENV;
let baseUrl =
    VITE_ENV === 'development' ? 'dev.fastsurvey.de' : 'fastsurvey.de';

function LandingPage() {
    return (
        <div className='relative'>
            <main className='w-full bg-gray-950 centering-col'>
                <LandingSectionIntro index={0} baseUrl={baseUrl} />
                <LandingSectionDemo index={1} />
                <LandingSectionPricing index={2} baseUrl={baseUrl} />
                <LandingSectionQuestions index={3} />
                <LandingSectionLinks index={4} baseUrl={baseUrl} />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
