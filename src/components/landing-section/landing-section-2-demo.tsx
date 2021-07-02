import React, {useState} from 'react';
import Gif from '@assets/gifs/computer.webp';
import {icons} from '@assets/icons/index';
import LandingPageSection from './section';

const BulletPoint = (props: {icon: React.ReactNode; text: string}) => (
    <div className='w-full flex-row-left gap-x-2'>
        <div className={'w-6 h-6 p-0.5 icon-landing-bullet'}>{props.icon}</div>
        <div className={'flex-max leading-6'}>{props.text}</div>
    </div>
);
export default function LandingSection2Demo() {
    const [imageIndex, setImageIndex] = useState<number>(0);

    const chevronButtonStyle =
        'absolute bottom-0 w-8 h-8 p-1 m-2 rounded icon-landing-bullet ringable';

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
                            focuses on selling you something. Instead, we focus
                            on: {imageIndex}
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
                <div className='relative w-full max-w-xl mx-auto overflow-hidden rounded-lg'>
                    <div className='relative w-full h-0 pt-[calc((9/16)*100%)]'>
                        <div className='absolute top-0 w-full h-full bg-gray-50' />
                        <button
                            className={chevronButtonStyle + ' right-10'}
                            onClick={() => {
                                setImageIndex(
                                    imageIndex === 0 ? 2 : imageIndex - 1,
                                );
                            }}
                        >
                            {icons.chevronLeftCircle}
                        </button>
                        <button
                            className={chevronButtonStyle + ' right-0'}
                            onClick={() => {
                                setImageIndex(
                                    imageIndex === 2 ? 0 : imageIndex + 1,
                                );
                            }}
                        >
                            {icons.chevronRightCircle}
                        </button>
                    </div>
                </div>
            }
        />
    );
}
