import React, {useRef, useState} from 'react';
import Gif from '@assets/gifs/money.webp';
import {icons} from '@assets/icons';
import useEvent from '@utilities/event-utils/use-event';

const BulletPoint = (props: {icon: React.ReactNode; text: string}) => (
    <div className='w-full px-1 py-1.5 flex-row-left space-x-3'>
        <div className={'w-6 h-6 p-0.5 icon-landing-bullet flex-shrink-0'}>
            {props.icon}
        </div>
        <div className={'flex-max leading-6'}>{props.text}</div>
    </div>
);

const PricingText1 = () => (
    <>
        <div className='text-xl text-blue-100 uppercase'>
            <strong>Pricing</strong> should be{' '}
            <span className='whitespace-nowrap'>transparent ...</span>
        </div>
        <div className='space-y-1 text-base text-gray-300 font-weight-500 flex-col-left'>
            <div className='mb-2'>
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
        </div>
    </>
);

const PricingText2 = () => (
    <>
        <div className='text-xl text-blue-100 uppercase'>... and fair!</div>
        <div className='space-y-1 text-base text-gray-300 font-weight-500 flex-col-left'>
            <BulletPoint
                icon={icons.package}
                text='All features are included in any survey (paid or free)'
            />
            <BulletPoint
                icon={icons.calculator}
                text='No active survey = no cost for you'
            />
            <BulletPoint
                icon={icons.creditCard}
                text='No need for payment information when using the free tier. You can use the free tier forever.'
            />
            <BulletPoint
                icon={icons.security}
                text="We don't sell any data! We make money by selling submissions."
            />
        </div>
    </>
);

const MonkeyGif = () => (
    <img src={Gif} className='w-full h-auto' alt='Monkey with a cash' />
);

export default function LandingSection3Pricing() {
    const ref = useRef<HTMLDivElement>(null);
    const [scrollState, setScrollState] = useState<
        'above' | 'within' | 'below'
    >('above');

    function handleScroll() {
        if (ref.current) {
            const {y, height} = ref.current.getBoundingClientRect();
            if (y > 0) {
                setScrollState('above');
            } else if (height + y > window.innerHeight) {
                setScrollState('within');
            } else {
                setScrollState('below');
            }
        }
    }
    useEvent('scroll', handleScroll);

    return (
        <div
            className='w-full lg:h-[200vh] border-b-4 border-green-700 centering-col'
            ref={ref}
        >
            <div className={'gap-y-8 grid-cols-1 lg:hidden w-full px-6 py-16'}>
                <div className='w-full max-w-lg mx-auto space-y-12 flex-col-left'>
                    <div className='space-y-5 flex-col-left'>
                        <PricingText1 />
                    </div>
                    <div className='space-y-5 flex-col-left'>
                        <PricingText2 />
                    </div>
                    <div
                        className={
                            'w-full max-w-lg mx-auto overflow-hidden rounded-lg '
                        }
                    >
                        <MonkeyGif />
                    </div>
                </div>
            </div>
            <div
                className={
                    'hidden lg:grid w-full px-8 ' +
                    'gap-y-0 gap-x-8 grid-cols-2 ' +
                    'xl:gap-x-12'
                }
            >
                <div className='w-full ml-auto lg:max-w-lg flex-col-left'>
                    <div className='h-[100vh] space-y-5 flex-col-left'>
                        <PricingText1 />
                    </div>
                    <div className='h-[100vh] space-y-5 flex-col-left'>
                        <PricingText2 />
                    </div>
                </div>
                <div
                    className={
                        'relative block w-full h-[100vh] ' +
                        'mr-auto lg:max-w-lg flex-col-left ' +
                        (scrollState === 'below'
                            ? 'transform translate-y-full '
                            : '')
                    }
                >
                    <div
                        className={
                            'w-full max-w-md mx-auto overflow-hidden rounded-lg ' +
                            (scrollState === 'within'
                                ? 'fixed top-1/2 transform -translate-y-1/2 translate-x-8 '
                                : ' ')
                        }
                    >
                        <MonkeyGif />
                    </div>
                </div>
            </div>
        </div>
    );
}
