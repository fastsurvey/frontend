import React from 'react';
import RocketLogoLight from '@assets/branding/rocket-light.svg';
import {IconButton} from '@components';
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
                    'w-9 h-9 p-2 icon-landing-bullet flex-shrink-0 ' +
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
                        'group-hover:backdrop-filter group-hover:backdrop-blur-sm z-10 ' +
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
                <div className='space-y-2 flex-col-left'>
                    <div className='mb-4 font-bold centering-row'>
                        <div className='w-16 h-16 mr-4'>
                            <img src={RocketLogoLight} alt='FastSurvey Logo' />
                        </div>
                        <div className='flex-col-left gap-y-1'>
                            <div className='text-3xl text-blue-100 font-weight-700 '>
                                Fastsurvey
                            </div>
                            <div className='text-lg tracking-wide text-gray-100 uppercase font-weight-400 '>
                                The swiss army knife of{' '}
                                <span className='whitespace-nowrap'>
                                    data collection
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='space-x-2 centering-row'>
                        <a
                            href='https://console.dev.fastsurvey.io/register'
                            target='_self'
                            className='rounded ringable'
                        >
                            <IconButton
                                text='Sign up'
                                variant='light-on-dark'
                            />
                        </a>
                        <a
                            href='https://console.dev.fastsurvey.io/login'
                            target='_self'
                            className='rounded ringable'
                        >
                            <IconButton text='Log in' variant='dark-on-dark' />
                        </a>
                    </div>
                </div>
            }
            rightChild={
                <div className='text-base gap-y-1 flex-col-left'>
                    <LinkButton
                        to='https://docs.fastsurvey.io/'
                        exists
                        text={
                            <>
                                Troubleshooting: Read our{' '}
                                <strong className='text-white'>
                                    documentation
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
                                : Field types, authentication methods, full API
                                reference,{' '}
                                <span className='whitespace-nowrap'>
                                    feature roadmap, ...
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
