import React from 'react';
import RocketLogoLight from '@assets/branding/rocket-light.svg';
import {Button} from '@components';
import {icons} from '@assets/icons';
import {Link} from 'react-router-dom';
import LandingPageSection from './section';

const LinkButton = (props: {
    text: React.ReactChild;
    to: string;
    exists?: boolean;
}) => {
    const content = (
        <div className='w-full space-x-3 centering-row'>
            <div className={' text-left font-weight-500 pl-2'}>
                {props.text}
            </div>
            <div className='flex-max' />
            <div
                className={
                    'w-12 md:w-9 h-12 md:h-9 p-3 md:p-2 icon-landing-bullet flex-shrink-0 ' +
                    (props.exists ? '' : 'opacity-60')
                }
            >
                {icons.chevronRightCircle}
            </div>
        </div>
    );
    let linkCSS =
        'w-full px-1 py-2 my-1 rounded ringable bg-gray-800 hover:bg-gray-700 text-gray-100';
    if (!props.exists) {
        linkCSS =
            'w-full px-1 py-2 my-1 rounded border-2 group border-dashed hover:border-transparent border-gray-700 text-gray-400';
    }

    if (props.exists) {
        if (props.to.startsWith('https://')) {
            return (
                <a
                    href={props.to}
                    className={linkCSS}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    {content}
                </a>
            );
        } else {
            return (
                <Link to={props.to} className={linkCSS}>
                    {content}
                </Link>
            );
        }
    } else {
        return (
            <div className={`${linkCSS} relative cursor-not-allowed`}>
                {content}
                <div
                    className={
                        'flex-row-center text-transparent group-hover:text-white ' +
                        'absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-25 ' +
                        'group-hover:backdrop-filter group-hover:backdrop-blur-[2.5px] z-10 ' +
                        'font-weight-600 text-white rounded-sm'
                    }
                >
                    coming soon...
                </div>
            </div>
        );
    }
};
export default function LandingSectionLinks() {
    return (
        <LandingPageSection
            leftChild={
                <div className='py-6 space-y-2 flex-col-left md:py-0'>
                    <div className='mb-4 font-bold centering-row'>
                        <div className='w-16 h-16 mr-4'>
                            <img src={RocketLogoLight} alt='FastSurvey Logo' />
                        </div>
                        <div className='flex-col-left gap-y-1'>
                            <div className='text-3xl text-blue-100 font-weight-700 '>
                                Fastsurvey
                            </div>
                            <div className='text-lg tracking-wide text-gray-200 uppercase font-weight-400 '>
                                Never assume anymore
                            </div>
                        </div>
                    </div>
                    <div className='space-x-2 centering-row'>
                        <a
                            href='https://console.dev.fastsurvey.io/register'
                            target='_self'
                            className='rounded ringable'
                        >
                            <Button text='Sign up' variant='light-on-dark' />
                        </a>
                        <a
                            href='https://console.dev.fastsurvey.io/login'
                            target='_self'
                            className='rounded ringable'
                        >
                            <Button text='Log in' variant='dark-on-dark' />
                        </a>
                    </div>
                </div>
            }
            rightChild={
                <div className='text-sm gap-y-1 flex-col-left'>
                    <LinkButton
                        to='https://docs.fastsurvey.de/'
                        exists
                        text={
                            <>
                                Troubleshooting: Read our{' '}
                                <strong className='text-white'>
                                    do&shy;cumen&shy;ta&shy;tion
                                </strong>
                            </>
                        }
                    />
                    <LinkButton
                        to='https://github.com/fastsurvey'
                        exists
                        text={
                            <>
                                FastSurvey is fully open source on{' '}
                                <strong className='text-white'>Github</strong>!
                            </>
                        }
                    />
                    <LinkButton
                        to='/features'
                        text={
                            <>
                                More about our{' '}
                                <strong className='text-gray-300'>
                                    features
                                </strong>
                                : Field types, authen&shy;ti&shy;cation methods,
                                full API re&shy;ference,{' '}
                                <span className='whitespace-nowrap'>
                                    feature road&shy;map, ...
                                </span>
                            </>
                        }
                    />
                    <LinkButton
                        to='/comparison'
                        text={
                            <>
                                Competitor-
                                <strong className='text-gray-300'>
                                    comparison
                                </strong>
                                : Why FastSurvey?
                            </>
                        }
                    />
                </div>
            }
        />
    );
}
