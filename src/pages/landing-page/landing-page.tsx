import React from 'react';
import RocketLogo from 'assets/branding/rocket.svg';

const ColoredText = (props: {children: React.ReactNode; good?: boolean}) => (
    <div className='relative inline-block'>
        <div className='relative z-10 block text-black font-weight-500'>
            {props.children}
        </div>
        <div
            className={
                'absolute block bottom-[0.3125rem] left-0 z-0 w-full h-1.5 ' +
                (props.good ? 'bg-green-100 ' : 'bg-red-100 ')
            }
        />
    </div>
);
function LandingPage() {
    return (
        <div className='w-full centering-col'>
            <div className='grid w-full grid-cols-2'>
                <div className='w-full py-16 centering-col'>
                    <div className='max-w-xl flex-col-left'>
                        <div className='mb-3 font-bold centering-row'>
                            <div className='w-16 h-16 mr-4'>
                                <img src={RocketLogo} />
                            </div>
                            <div className='font-weight-700 flex-col-left'>
                                <div className='text-3xl text-grey-800 rubik'>
                                    Fastsurvey
                                </div>
                                <div className='text-lg tracking-wide uppercase text-grey-300 rubik'>
                                    The swiss army knife of data collection
                                </div>
                            </div>
                        </div>
                        <div className='text-lg text-grey-900'>
                            <p className='mb-3 font-weight-400'>
                                There are <em>a ton</em> of{' '}
                                <span className='text-black font-weight-500'>
                                    survey tools
                                </span>
                                . <em>However</em>, existing solutions push
                                <ColoredText>
                                    inflexible monthly pricing
                                </ColoredText>
                                , are <ColoredText>hard too use</ColoredText>{' '}
                                and are <em>blackboxes</em> when it comes to{' '}
                                <ColoredText>data-privacy</ColoredText>.
                            </p>
                            <p>
                                <ColoredText good>FastSurvey</ColoredText>{' '}
                                solves these issues: it is{' '}
                                <ColoredText good>open source</ColoredText>,
                                prioritizes you, the survey creator, and{' '}
                                <ColoredText good>
                                    only charges for what you <em>actually</em>{' '}
                                    use
                                </ColoredText>
                                .
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
