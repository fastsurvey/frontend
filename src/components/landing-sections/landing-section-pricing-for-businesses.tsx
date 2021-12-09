import React from 'react';
import {icons} from '/src/assets/icons';
import {LandingPageSection} from './section';

const features = [
    {
        name: 'Your Own Servers',
        detail: 'You are able to see the full source code that is being used and you know 100% about what is going on.',
        icon: icons.lock,
    },
    {
        name: 'Custom Domain',
        detail: (
            <>
                Your surveys can be hosted at something like{' '}
                <span className='text-blue-500 cursor-not-allowed font-weight-700'>
                    survey.
                    <wbr />
                    yourcompany.
                    <wbr />
                    com
                </span>{' '}
                instead of{' '}
                <span className='text-blue-500 cursor-not-allowed font-weight-700'>
                    fastsurvey.
                    <wbr />
                    de
                </span>
                .
            </>
        ),
        icon: icons.compass,
    },
    {
        name: 'Custom Look',
        detail: 'Apply your corporate identity to fonts, colors, logos, icons, etc.',
        icon: icons.paint,
    },
    {
        name: 'Team Collaboration',
        detail: 'Edit surveys and analyze results collaboratively directly within FastSurvey.',
        icon: icons.chatGroup,
    },
];

export default function LandingSectionPricingForBusinesses(props: {
    index: number;
}) {
    return (
        <LandingPageSection index={props.index} id='pricing-for-businesses'>
            <h2
                className={
                    'mb-3 text-2xl uppercase text-center ' +
                    'text-blue-200 font-weight-400'
                }
            >
                <strong className='text-blue-50 font-weight-700'>
                    Self-host
                </strong>{' '}
                fastsurvey{' '}
                <span className='whitespace-nowrap'>for full control!</span>
            </h2>
            <div className='max-w-3xl mt-4 text-center md:mt-8'>
                <div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2'>
                    {features.map((feature) => (
                        <div key={feature.name} className='pt-6 '>
                            <div className='flow-root h-full px-4 pb-4 bg-gray-200 rounded-lg'>
                                <div className='-mt-6'>
                                    <div>
                                        <span className='inline-flex items-center justify-center p-3 bg-green-100 rounded-md shadow-lg'>
                                            <div className='w-6 h-6 svg-landing-enterprise-card'>
                                                {feature.icon}
                                            </div>
                                        </span>
                                    </div>
                                    <h3 className='mt-3 text-base tracking-tight text-gray-900 font-weight-700'>
                                        {feature.name}
                                    </h3>
                                    <p className='mt-1 text-sm leading-snug text-center text-gray-600 font-weight-500'>
                                        {feature.detail}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LandingPageSection>
    );
}
