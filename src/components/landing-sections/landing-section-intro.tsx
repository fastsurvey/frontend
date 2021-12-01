import React from 'react';
import RocketLogoLight from '/src/assets/branding/rocket-light.svg';
import {Button} from '/src/components';
import {NewLandingPageSection} from './section';

export default function LandingSectionIntro(props: {
    baseUrl: string;
    index: number;
}) {
    return (
        <NewLandingPageSection index={props.index}>
            <div className='py-8 space-y-2 flex-col-center md:py-0'>
                <div className='mb-4 font-bold centering-row'>
                    <div className='w-16 h-16 mr-4'>
                        <img src={RocketLogoLight} alt='FastSurvey Logo' />
                    </div>
                    <div className='flex-col-left gap-y-1'>
                        <h1 className='text-3xl text-blue-100 font-weight-600 '>
                            FastSurvey
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
        </NewLandingPageSection>
    );
}
