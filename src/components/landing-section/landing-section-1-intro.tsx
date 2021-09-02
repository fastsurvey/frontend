import React from 'react';
import RocketLogoLight from '@assets/branding/rocket-light.svg';
import {IconButton} from '@components';
import LandingPageSection from './section';

const ColoredText = (props: {
    children: React.ReactNode;
    good?: boolean;
    pr?: boolean;
}) => (
    <div className='relative inline-block'>
        <div
            className={
                'relative z-10 block font-weight-700 text-gray-200 ' +
                (props.pr ? 'pr-1.5 ' : '')
            }
        >
            {props.children}
        </div>
        <div
            className={
                'absolute block bottom-[0.25rem] left-0 z-0 w-full h-1.5 ' +
                (props.good ? 'bg-green-800 ' : 'bg-red-800 ')
            }
        />
    </div>
);
export default function LandingSection1Intro() {
    return (
        <LandingPageSection
            leftChild={
                <div className='space-y-2 flex-col-left'>
                    <div className='mb-4 font-bold centering-row'>
                        <div className='w-16 h-16 mr-4'>
                            <img src={RocketLogoLight} alt='FastSurvey Logo' />
                        </div>
                        <div className='flex-col-left gap-y-1'>
                            <div className='text-3xl text-blue-100 font-weight-700 '>
                                Fastsurvey
                            </div>
                            <div className='text-lg tracking-wide text-gray-100 uppercase font-weight-400 '>
                                The swiss army knife of{' '}
                                <span className='whitespace-nowrap'>
                                    data collection
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='space-x-2 centering-row'>
                        <a
                            href='https://console.dev.fastsurvey.io/register'
                            target='_self'
                            className='rounded ringable'
                        >
                            <IconButton
                                text='Sign up'
                                variant='light-on-dark'
                            />
                        </a>
                        <a
                            href='https://console.dev.fastsurvey.io/login'
                            target='_self'
                            className='rounded ringable'
                        >
                            <IconButton text='Log in' variant='dark-on-dark' />
                        </a>
                    </div>
                </div>
            }
            rightChild={
                <div className='text-lg text-gray-300 font-weight-500'>
                    <div className='mb-4'>
                        There are a ton of survey tools. <em>However</em>,
                        existing solutions push{' '}
                        <ColoredText>inflexible monthly pricing</ColoredText>,
                        are <ColoredText>hard too use</ColoredText> and are{' '}
                        <em>blackboxes</em> when it comes to{' '}
                        <ColoredText>data-privacy</ColoredText>.
                    </div>
                    <div>
                        <ColoredText good>FastSurvey</ColoredText> solves these
                        issues: it is{' '}
                        <ColoredText good>open source</ColoredText>, prioritizes{' '}
                        <em>you</em>, the survey creator, and{' '}
                        <ColoredText good pr>
                            only charges
                        </ColoredText>
                        <ColoredText good pr>
                            for what you
                        </ColoredText>
                        <ColoredText good>
                            <em>actually</em> use
                        </ColoredText>
                        .
                    </div>
                </div>
            }
        />
    );
}
