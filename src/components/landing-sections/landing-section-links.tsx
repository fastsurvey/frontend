import React from 'react';
import RocketLogoLight from '/src/assets/branding/rocket-light.svg';
import {Button} from '/src/components';
import {icons} from '/src/assets/icons';
import {Link} from 'react-router-dom';
import {NewLandingPageSection} from './section';

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
                    'w-12 md:w-9 h-12 md:h-9 p-3 md:p-2 svg-landing-link flex-shrink-0 ' +
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
            'w-full px-1 py-2 my-1 rounded border-2 group border-dashed border-gray-700 text-gray-400';
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
                <div className='group-hover:opacity-0 '>{content}</div>
                <div
                    className={
                        'flex-row-center rounded-sm ' +
                        'absolute top-0 left-0 w-full h-full z-10 ' +
                        'font-weight-600 text-transparent group-hover:text-white '
                    }
                >
                    coming soon...
                </div>
            </div>
        );
    }
};
export default function LandingSectionLinks(props: {
    baseUrl: string;
    index: number;
}) {
    return (
        <NewLandingPageSection index={props.index}>
            <div className='grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-3'>
                <div className='py-6 space-y-2 flex-col-center md:items-start md:py-0'>
                    <div className='mb-4 font-bold centering-row'>
                        <div className='w-16 h-16 mr-4'>
                            <img src={RocketLogoLight} alt='FastSurvey Logo' />
                        </div>
                        <div className='flex-col-left gap-y-1'>
                            <h1 className='text-3xl text-blue-100 font-weight-700 '>
                                Fastsurvey
                            </h1>
                            <h2 className='text-lg tracking-wide text-gray-200 uppercase font-weight-400 '>
                                Never assume anymore
                            </h2>
                        </div>
                    </div>
                    <div className='space-x-2 centering-row'>
                        <a
                            href={`https://console.${props.baseUrl}/register`}
                            target='_self'
                            className='rounded ringable'
                        >
                            <Button text='Sign up' variant='light-on-dark' />
                        </a>
                        <a
                            href={`https://console.${props.baseUrl}/login`}
                            target='_self'
                            className='rounded ringable'
                        >
                            <Button text='Log in' variant='dark-on-dark' />
                        </a>
                    </div>
                </div>
                <div className='max-w-md text-sm gap-y-1 flex-col-left'>
                    <LinkButton
                        to='https://docs.fastsurvey.de/'
                        exists
                        text={
                            <>
                                Troubleshooting/Questions: Read our{' '}
                                <strong className='text-white'>
                                    do&shy;cumen&shy;ta&shy;tion
                                </strong>
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
                                    road&shy;map ...
                                </span>
                            </>
                        }
                    />
                    <LinkButton
                        to='/comparison'
                        text={
                            <>
                                Detailed Competitor-
                                <strong className='text-gray-300'>
                                    comparison
                                </strong>
                                : Why FastSurvey?
                            </>
                        }
                    />
                </div>
            </div>
        </NewLandingPageSection>
    );
}
