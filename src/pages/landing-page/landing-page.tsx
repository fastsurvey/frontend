import React from 'react';

function LandingPage() {
    return (
        <div className='w-full centering-col'>
            <div className='grid w-full grid-cols-2'>
                <div className='w-full py-16 centering-col'>
                    <div className='max-w-lg flex-col-left'>
                        <div className='font-bold centering-row rubik'>
                            Logo + Fastsurvey
                        </div>
                        <div className=''>
                            <p className='mb-4 font-weight-400'>
                                There are a <em>ton</em> of survey tools.{' '}
                                <em>However</em>, existing solutions push
                                inflexible monthly pricing, are hard too use and
                                are <em>blackboxes</em> when it comes to
                                data-privacy.
                            </p>
                            <p>
                                FastSurvey solves these issues: it is open
                                source, prioritizes you, the survey creator, and
                                only charges for what you <em>actually</em> use.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-full centering-col'></div>
            </div>
        </div>
    );
}

export default LandingPage;
