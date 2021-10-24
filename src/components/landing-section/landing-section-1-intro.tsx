import React from 'react';
import RocketLogoLight from '@assets/branding/rocket-light.svg';
import {Button} from 'components';
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
                'absolute block bottom-[0.325rem] left-0 z-0 w-full h-1 ' +
                (props.good ? 'bg-green-800 ' : 'bg-red-800 ')
            }
        />
    </div>
);
export default function LandingSection1Intro(props: {baseUrl: string}) {
    return (
        <LandingPageSection
            leftChild={
                <div className='py-8 space-y-2 flex-col-left md:py-0'>
                    <div className='mb-4 font-bold centering-row'>
                        <div className='w-16 h-16 mr-4'>
                            <img src={RocketLogoLight} alt='FastSurvey Logo' />
                        </div>
                        <div className='flex-col-left gap-y-1'>
                            <h1 className='text-3xl text-blue-100 font-weight-600 '>
                                Fastsurvey
                            </h1>
                            <h2 className='text-lg tracking-wide text-gray-200 uppercase font-weight-400 '>
                                Never assume anymore
                            </h2>
                        </div>
                    </div>
                    <div className='space-x-2 centering-row'>
                        <a
                            href={`https://console.${props.baseUrl}/register`}
                            target='_self'
                            className='rounded ringable'
                        >
                            <Button text='Sign up' variant='light-on-dark' />
                        </a>
                        <a
                            href={`https://console.${props.baseUrl}/login`}
                            target='_self'
                            className='rounded ringable'
                        >
                            <Button text='Log in' variant='dark-on-dark' />
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
