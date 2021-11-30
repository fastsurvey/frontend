import React from 'react';
import {icons} from '/src/assets/icons';
import {Button} from '/src/components';
import {NewLandingPageSection, LandingHeading} from './section';

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
        <div className='space-y-1 text-base text-gray-200 font-weight-400 flex-col-left'>
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
                            'w-6 h-6 p-0.5 svg-landing-bullet flex-shrink-0'
                        }
                    >
                        {bp.icon}
                    </div>
                    <div className={'flex-max leading-tight'}>{bp.text}</div>
                </div>
            ))}
        </div>
        <div className='flex-grow min-h-4' />
        {props.register && (
            <div className='w-full flex-row-center'>
                <a
                    href={`https://console.${props.baseUrl}/register`}
                    target='_self'
                    className='rounded ringable'
                >
                    <Button text='Sign up' variant='flat-light-blue' />
                </a>
            </div>
        )}
    </div>
);

export default function LandingSection3Pricing(props: {baseUrl: string}) {
    return (
        <NewLandingPageSection index={2}>
            <div className='grid max-w-3xl grid-cols-2 gap-x-3 gap-y-3'>
                <LandingHeading
                    boldText='pricing'
                    slimText='should be transparent and fair'
                    className='col-span-2'
                />
                <PricingPanel
                    title='Community'
                    subtitle='hosted by us on fastsurvey.de'
                    bulletPoints={[
                        {
                            icon: icons.package,
                            text: (
                                <>
                                    All features included,{' '}
                                    <span className='text-white font-weight-700'>
                                        free to use, forever!
                                    </span>
                                </>
                            ),
                        },
                        {
                            icon: icons.security,
                            text: 'We make money by selling licenses, not your data',
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
                            text: 'All features + full control over your data',
                        },
                        {
                            icon: icons.paint,
                            text: 'Fully customize the look of your surveys',
                        },
                        {
                            icon: icons.certificate,
                            text: (
                                <>
                                    <span className='text-white font-weight-700'>
                                        Lifetime licenses
                                    </span>{' '}
                                    (incl. one year of free updates)
                                </>
                            ),
                        },
                    ]}
                />
                <div
                    className={
                        'w-full rounded-lg p-3 text-gray-400 text-sm font-weight-400 ' +
                        'border-2 border-dashed border-gray-700 col-span-2'
                    }
                >
                    <h3 className='mb-1 text-gray-200 font-weight-500'>
                        Interested in an{' '}
                        <strong className='text-white font-weight-700'>
                            enterprise
                        </strong>{' '}
                        license?
                    </h3>{' '}
                    Please contact us via{' '}
                    <a
                        href='mailto:contact@fastsurvey.de'
                        className='text-blue-100 underline'
                    >
                        contact@fastsurvey.de
                    </a>{' '}
                    and we will work out something.
                </div>
            </div>
        </NewLandingPageSection>
    );
}
