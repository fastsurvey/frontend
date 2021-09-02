import React, {useState} from 'react';
import {icons} from '@assets/icons/index';
import LandingPageSection from './section';

const BulletPoint = (props: {
    icon: React.ReactNode;
    text: string;
    active: boolean;
    onClick(): void;
}) => (
    <button
        className={
            'w-full my-1 rounded ringable ' +
            (props.active ? 'bg-gray-700 text-white ' : 'text-gray-300 ')
        }
        onClick={props.onClick}
    >
        <div className='w-full space-x-3 px-1 py-1.5 flex-row-left'>
            <div className={'w-6 h-6 p-0.5 icon-landing-bullet flex-shrink-0'}>
                {props.icon}
            </div>
            <div
                className={
                    'flex-max leading-6 text-left pr-1.5 font-weight-500 '
                }
            >
                {props.text}
            </div>
        </div>
    </button>
);
export default function LandingSection2Demo() {
    const [imageIndex, setImageIndex] = useState<number>(0);

    const chevronButtonStyle =
        'absolute bottom-0 w-8 h-8 p-1 m-2 rounded icon-landing-bullet ringable';

    return (
        <LandingPageSection
            leftChild={
                <div className='space-y-4 flex-col-left'>
                    <div className='text-xl text-blue-100 uppercase'>
                        <strong>How</strong> does it work?
                    </div>
                    <div className='space-y-1 text-base text-gray-100 flex-col-left'>
                        <BulletPoint
                            active={imageIndex === 0}
                            onClick={() => setImageIndex(0)}
                            icon={icons.widgetAdd}
                            text='1. Create your survey'
                        />
                        <BulletPoint
                            active={imageIndex === 1}
                            onClick={() => setImageIndex(1)}
                            icon={icons.globe}
                            text='2. Share a link/embed it and collect submissions'
                        />
                        <BulletPoint
                            active={imageIndex === 2}
                            onClick={() => setImageIndex(2)}
                            icon={icons.chart}
                            text='3. Analyze and export your results'
                        />
                    </div>
                </div>
            }
            rightChild={
                <div className='relative w-full max-w-xl mx-auto overflow-hidden rounded-lg'>
                    <div className='relative w-full h-0 pt-[calc((9/16)*100%)]'>
                        <div className='absolute top-0 w-full h-full bg-gray-600' />
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
