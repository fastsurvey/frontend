import React from 'react';
import {icons} from '/src/assets/icons';
import {Button} from '/src/components';
import {NewLandingPageSection} from './section';

const PricingPanel = (props: {
    title: string;
    subtitle: React.ReactNode;
    bulletPoints: {icon: React.ReactNode; text: React.ReactNode}[];
    register?: {baseUrl: string};
}) => (
    <div
        className={
            'py-3 px-4 bg-gray-800 w-full rounded shadow-md flex-col-center'
        }
    >
        <div className='w-full space-y-1.5 text-base text-gray-200 font-weight-400 flex-col-left'>
            <h3 className='w-full pb-2 text-base leading-tight flex-col-center'>
                <strong className='text-lg text-white font-weight-700'>
                    {props.title}{' '}
                    <span className='font-weight-400'>Edition</span>
                </strong>
                <span className='-mt-0.5 text-sm text-blue-100'>
                    {props.subtitle}
                </span>
            </h3>
            {props.bulletPoints.map((bp) => (
                <div className='w-full px-1 py-1 space-x-2 text-sm flex-row-left'>
                    <div
                        className={
                            'w-6 h-6 p-0.5 svg-landing-bullet -translate-y-px flex-shrink-0'
                        }
                    >
                        {bp.icon}
                    </div>
                    <div className={'leading-tight'}>{bp.text}</div>
                </div>
            ))}
        </div>
        <div className='flex-grow min-h-4' />
        {props.register !== undefined && (
            <div className='w-full flex-row-center'>
                <a
                    href={`https://console.${props.register.baseUrl}/register`}
                    target='_self'
                    className='rounded ringable'
                >
                    <Button text='Sign up' variant='flat-light-blue' />
                </a>
            </div>
        )}
    </div>
);

export default function LandingSectionPricing(props: {
    baseUrl: string;
    index: number;
}) {
    return (
        <NewLandingPageSection index={props.index} id='pricing'>
            <div className='grid max-w-3xl grid-cols-2 gap-x-3 gap-y-3'>
                <h2
                    className={
                        'mb-3 text-2xl uppercase text-center ' +
                        'text-blue-200 font-weight-400 col-span-2'
                    }
                >
                    <strong className='text-blue-50 font-weight-700'>
                        pricing
                    </strong>{' '}
                    should be transparent and fair!
                </h2>
                <PricingPanel
                    title='Community'
                    subtitle='hosted by us on fastsurvey.de'
                    bulletPoints={[
                        {
                            icon: icons.package,
                            text: 'All features for individuals',
                        },
                        {
                            icon: icons.security,
                            text: 'We do not sell data',
                        },
                        {
                            icon: icons.heart,
                            text: (
                                <>
                                    Unlimited usage,{' '}
                                    <span className='text-white font-weight-700'>
                                        free to use
                                    </span>
                                </>
                            ),
                        },
                    ]}
                    register={props}
                />
                <PricingPanel
                    title='Enterprise'
                    subtitle='host our source code wherever you want'
                    bulletPoints={[
                        {
                            icon: icons.package,
                            text: 'All features',
                        },
                        {
                            icon: icons.security,
                            text: 'Full control over your data/your servers',
                        },
                        {
                            icon: icons.paint,
                            text: 'Customize the look of your surveys',
                        },
                        {
                            icon: icons.certificate,
                            text: (
                                <>
                                    <span className='text-white font-weight-700'>
                                        Lifetime licenses
                                    </span>{' '}
                                    (with 12 months of free upgrades)
                                </>
                            ),
                        },
                    ]}
                />
                <div className='px-4 py-2 border-[2px] border-dashed border-gray-700 rounded-lg w-full col-span-2'>
                    <h3 className='text-base leading-6 text-gray-200 font-weight-500'>
                        Interested in an{' '}
                        <strong className='text-white font-weight-700'>
                            enterprise
                        </strong>{' '}
                        license?
                    </h3>
                    <div className='mt-1 mb-0.5 text-sm text-gray-300 font-weight-400'>
                        Please contact us via{' '}
                        <a
                            href='mailto:contact@fastsurvey.de'
                            target='blank'
                            rel='noopener noreferrer'
                            className='text-blue-100 underline font-weight-600'
                        >
                            contact@fastsurvey.de
                        </a>{' '}
                        and we will work out something.
                    </div>
                </div>
            </div>
        </NewLandingPageSection>
    );
}
