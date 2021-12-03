import React from 'react';
import RocketLogo from '/src/assets/branding/rocket.svg';
import RocketLogoLight from '/src/assets/branding/rocket-light.svg';
import {Button} from '/src/components';
import {LandingPageSection} from './section';
import {Link} from 'react-router-dom';

const ColoredText = (props: {children: React.ReactNode; good?: boolean}) => (
    <span
        className={
            'relative z-10 font-weight-500 text-gray-200 ' +
            (props.good ? 'text-green-200 ' : 'text-red-200 ')
        }
    >
        {props.children}
    </span>
);
export default function LandingSectionIntro(props: {
    baseUrl: string;
    index: number;
}) {
    return (
        <LandingPageSection index={props.index} id='intro'>
            <div className='absolute top-0 left-0 z-40 p-2 m-1 md:ml-5 md:p-0 md:mt-6'>
                <Link
                    to='/'
                    className='flex-row-left ringable p-1.5 -m-1.5 rounded'
                >
                    <img
                        src={RocketLogoLight}
                        alt='FastSurvey Icon'
                        className='w-12 h-12 mr-2'
                    />
                    <div
                        className={
                            'mx-2 text-2xl lg:text-2xl ' +
                            'font-weight-700 lg:font-weight-600 ' +
                            'text-gray-100'
                        }
                    >
                        FastSurvey
                    </div>
                </Link>
            </div>
            <div
                className='hidden overflow-hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full'
                aria-hidden='true'
            >
                <div className='relative h-full mx-auto max-w-7xl'>
                    <svg
                        className='absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2'
                        width={404}
                        height={784}
                        fill='none'
                        viewBox='0 0 404 784'
                    >
                        <defs>
                            <pattern
                                id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits='userSpaceOnUse'
                            >
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className='text-gray-600'
                                    fill='currentColor'
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={784}
                            fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)'
                        />
                    </svg>
                    <svg
                        className='absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2'
                        width={404}
                        height={784}
                        fill='none'
                        viewBox='0 0 404 784'
                    >
                        <defs>
                            <pattern
                                id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
                                x={0}
                                y={0}
                                width={20}
                                height={20}
                                patternUnits='userSpaceOnUse'
                            >
                                <rect
                                    x={0}
                                    y={0}
                                    width={4}
                                    height={4}
                                    className='text-gray-600'
                                    fill='currentColor'
                                />
                            </pattern>
                        </defs>
                        <rect
                            width={404}
                            height={784}
                            fill='url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)'
                        />
                    </svg>
                </div>
            </div>
            <div
                className={
                    'py-8 flex-col-center md:py-0 gap-y-8 ' +
                    'text-gray-200 text-lg max-w-xl text-left'
                }
            >
                <h1 className='text-4xl text-blue-100 font-weight-600'>
                    Online Surveys How They're Supposed To Be
                </h1>
                <div className='flex-col-left gap-y-4'>
                    <span>
                        There are a ton of survey tools. <em>However</em>,
                        existing solutions push{' '}
                        <ColoredText>inflexible monthly pricing</ColoredText>,
                        are <ColoredText>painfully complex</ColoredText> and are{' '}
                        <em>blackboxes</em> when it comes to{' '}
                        <ColoredText>data-privacy</ColoredText>.
                    </span>

                    <span>
                        FastSurvey is{' '}
                        <ColoredText good>free for individuals</ColoredText>, is{' '}
                        <ColoredText good>easy to use</ColoredText>, and can be{' '}
                        <ColoredText good>
                            self-hosted and customized
                        </ColoredText>{' '}
                        however you like.
                    </span>
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
        </LandingPageSection>
    );
}
