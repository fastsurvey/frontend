import React from 'react';
import {
    LandingSectionIntro,
    LandingSectionWhy,
    LandingSectionDemo,
    LandingSectionPricing,
    LandingSectionLinks,
    LandingSectionQuestions,
} from '/src/components';

const VITE_ENV = import.meta.env.VITE_ENV;
let baseUrl =
    VITE_ENV === 'development' ? 'dev.fastsurvey.de' : 'fastsurvey.de';

function LandingPage() {
    return (
        <div className='relative'>
            <main className='w-full bg-gray-950 centering-col'>
                <LandingSectionIntro index={0} baseUrl={baseUrl} />
                <LandingSectionWhy index={1} />
                <LandingSectionDemo index={2} />
                <LandingSectionPricing index={3} baseUrl={baseUrl} />
                <LandingSectionQuestions index={4} />
                <LandingSectionLinks index={5} baseUrl={baseUrl} />
            </main>
            <footer className='absolute bottom-0 left-0 z-0 w-full flex-row-center'>
                <div className='py-1 text-sm text-gray-500 font-weight-500'>
                    {import.meta.env.MODE === 'development' && <>development</>}
                    {import.meta.env.MODE === 'production' && (
                        <>version {import.meta.env.VITE_COMMIT_SHA}</>
                    )}
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;
