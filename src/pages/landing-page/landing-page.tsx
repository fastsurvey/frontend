import React from 'react';
import {
    LandingSectionIntro,
    LandingSectionDemo,
    LandingSectionPricingForIndividuals,
    LandingSectionPricingForBusinesses,
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
                <LandingSectionPricingForIndividuals
                    index={2}
                    baseUrl={baseUrl}
                />
                <LandingSectionPricingForBusinesses index={3} />
                <LandingSectionQuestions index={4} />
                <LandingSectionLinks index={5} baseUrl={baseUrl} />
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;
