import React from 'react';
import Gif from '@assets/gifs/money.webp';
import {icons} from '@assets/icons';
import LandingPageSection from './section';

const BulletPoint = (props: {icon: React.ReactNode; text: string}) => (
    <div className='w-full px-1 py-1 space-x-3 flex-row-left'>
        <div className={'w-6 h-6 p-0.5 icon-landing-bullet flex-shrink-0'}>
            {props.icon}
        </div>
        <div className={'flex-max leading-6'}>{props.text}</div>
    </div>
);

const PricingText = () => (
    <>
        <h2 className='text-xl text-blue-100 uppercase'>
            <strong>Pricing</strong> should be{' '}
            <span className='whitespace-nowrap'>transparent and fair</span>
        </h2>
        <div className='mt-4 space-y-1 text-base text-gray-200 font-weight-400 flex-col-left'>
            <div className='pb-2 text-base text-white font-weight-600'>
                As many surveys as you want -{' '}
                <span className='whitespace-nowrap'>billing per survey:</span>
            </div>
            <BulletPoint
                icon={icons.discount}
                text='The first 100 submissions of any survey are free'
            />
            <BulletPoint
                icon={icons.currencyEuro}
                text='4ct. per submission beyond the free tier'
            />
            <div className='pt-8 pb-2 text-base text-white font-weight-600'>
                No hidden fees or dark patterns:
            </div>
            <BulletPoint
                icon={icons.package}
                text='All features included (paid or free)'
            />
            <BulletPoint
                icon={icons.calculator}
                text='No survey submissions = no running costs'
            />
            <BulletPoint
                icon={icons.creditCard}
                text='Use the free tier forever - without any payment information'
            />
            <BulletPoint
                icon={icons.security}
                text='We make money by selling submissions, not your data'
            />
        </div>
    </>
);

export default function LandingSection3Pricing() {
    return (
        <LandingPageSection
            leftChild={
                <div className='w-full py-8 ml-auto lg:max-w-lg flex-col-left'>
                    <PricingText />
                    <div
                        className={
                            'mt-10 w-full rounded-lg p-4 text-gray-400 text-sm font-weight-400 ' +
                            'border-2 border-dashed border-gray-700'
                        }
                    >
                        <span className='text-gray-300 font-weight-600'>
                            Right now, our tool is still completely free to use.
                        </span>{' '}
                        We want to see how people use it and implement important
                        features before spending time on implementing payment
                        logic.
                    </div>
                </div>
            }
            rightChild={
                <div className='w-full max-w-md mx-auto overflow-hidden rounded-lg'>
                    <img
                        src={Gif}
                        className='w-full h-auto'
                        alt='Monkey with a cash'
                    />
                </div>
            }
        />
    );
}
