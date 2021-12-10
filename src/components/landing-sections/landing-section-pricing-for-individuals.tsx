import React from 'react';
import {LandingPageSection} from './section';
import {Button} from '/src/components';
import Waves from '/src/assets/images/layered-waves-haikei.svg';

export default function LandingSectionPricingForIndividuals(props: {
    index: number;
    baseUrl: string;
}) {
    return (
        <LandingPageSection index={props.index} id='pricing-for-individuals'>
            <img
                src={Waves}
                className={
                    'absolute bottom-0 left-0 z-0 w-full ' +
                    'origin-bottom block md:hidden'
                }
                style={{WebkitTransform: 'scale(1, 2.5)'}}
            />
            <img
                src={Waves}
                className={
                    'absolute bottom-0 left-0 z-0 w-full ' +
                    'origin-bottom hidden md:block'
                }
            />
            <h2
                className={
                    'mb-3 text-2xl uppercase text-center ' +
                    'text-blue-200 font-weight-400 z-10'
                }
            >
                <strong className='text-blue-50 font-weight-700'>
                    free to use
                </strong>{' '}
                <span className='whitespace-nowrap'>when hosted by us</span>
            </h2>
            <p className='z-10 max-w-lg mx-auto my-3 text-base text-center text-gray-300'>
                The free version of FastSurvey is hosted on{' '}
                <span className='text-blue-100 underline cursor-not-allowed'>
                    fastsurvey.
                    <wbr />
                    de
                </span>{' '}
                and{' '}
                <span className='text-blue-100 underline cursor-not-allowed'>
                    console.
                    <wbr />
                    fastsurvey.
                    <wbr />
                    de
                </span>
                . It contains all features for individuals.
            </p>
            <div
                className={
                    'z-10 mt-3 space-x-2 centering-row ' + 'mb-40 md:mb-56'
                }
            >
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
        </LandingPageSection>
    );
}
