import React from 'react';
import Gif from 'assets/gifs/money.webp';
import IconButton from 'components/icon-button/icon-button';
import LandingPageSection from 'components/layout/landing-page-section';
import {icons} from '../../assets/icons/index';

const BulletPoint = (props: {icon: React.ReactNode; text: string}) => (
    <div className='w-full flex-row-left gap-x-1.5'>
        <div className={'w-6 h-6 p-0.5 icon-blue'}>{props.icon}</div>
        <div className={'flex-max leading-6'}>{props.text}</div>
    </div>
);
export default function LandingSection3() {
    return (
        <LandingPageSection
            leftChild={
                <div className='space-y-5 flex-col-left'>
                    <div className='text-xl text-blue-100 uppercase'>
                        <strong>Pricing</strong> should be transparent ...
                    </div>
                    <div className='space-y-3 text-base text-gray-100 flex-col-left'>
                        <div>
                            As many surveys as you want - billing per survey:
                        </div>
                        <BulletPoint
                            icon={icons.check}
                            text='The first 100 submissions of any survey are free'
                        />
                        <BulletPoint
                            icon={icons.check}
                            text='4ct. per submission beyond the free tier'
                        />
                    </div>
                </div>
            }
            rightChild={
                <div className='w-full max-w-md mx-auto overflow-hidden rounded-lg'>
                    <img src={Gif} className='w-full h-auto' />
                </div>
            }
        />
    );
}
