import React from 'react';
import Gif from '@assets/gifs/computer.webp';
import {icons} from '@assets/icons/index';
import LandingPageSection from './section';

const BulletPoint = (props: {icon: React.ReactNode; text: string}) => (
    <div className='w-full px-1 py-1.5 space-x-3 flex-row-left'>
        <div className={'w-6 h-6 p-0.5 icon-landing-bullet flex-shrink-0'}>
            {props.icon}
        </div>
        <div className={'flex-max leading-6'}>{props.text}</div>
    </div>
);
export default function LandingSection4Philosophy() {
    return (
        <LandingPageSection
            leftChild={
                <div className='space-y-5 flex-col-left'>
                    <div className='text-xl text-blue-100 uppercase'>
                        <strong>The Product</strong> should{' '}
                        <span className='whitespace-nowrap'>sell itself!</span>
                    </div>
                    <div className='space-y-1 text-base text-gray-200 font-weight-500 flex-col-left'>
                        <div className='mb-2'>
                            We do not have a big marketing and sales team that
                            focuses on selling you something. Instead, we focus
                            on:
                        </div>
                        <BulletPoint
                            icon={icons.launch}
                            text='Developing good software'
                        />
                        <BulletPoint
                            icon={icons.chat}
                            text='Providing concise documentation and support'
                        />
                        <BulletPoint
                            icon={icons.light}
                            text='Improving FastSurvey upon your feedback'
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
