import React from 'react';
import Gif from '@assets/gifs/computer.webp';
import LandingPageSection from '@components/layout/landing-page-section';
import {icons} from '@assets/icons/index';

const BulletPoint = (props: {icon: React.ReactNode; text: string}) => (
    <div className='w-full flex-row-left gap-x-2'>
        <div className={'w-6 h-6 p-0.5 icon-landing-bullet'}>{props.icon}</div>
        <div className={'flex-max leading-6'}>{props.text}</div>
    </div>
);
export default function LandingSection4() {
    return (
        <LandingPageSection
            leftChild={
                <div className='space-y-5 flex-col-left'>
                    <div className='text-xl text-blue-100 uppercase'>
                        <strong>The Product</strong> should sell itself!
                    </div>
                    <div className='space-y-3 text-base text-gray-100 flex-col-left'>
                        <div>
                            We do not have a big marketing and sales team that
                            focuses on selling you a product. Instead, we focus
                            on:
                        </div>
                        <BulletPoint
                            icon={icons.launch}
                            text='developing good software'
                        />
                        <BulletPoint
                            icon={icons.chat}
                            text='providing concise documentation and support'
                        />
                        <BulletPoint
                            icon={icons.light}
                            text='improving FastSurvey upon your feedback'
                        />
                    </div>
                </div>
            }
            rightChild={
                <div className='w-full max-w-md mx-auto overflow-hidden rounded-lg'>
                    <img
                        src={Gif}
                        className='w-full h-auto'
                        alt='Monkey with a computer'
                    />
                </div>
            }
        />
    );
}
