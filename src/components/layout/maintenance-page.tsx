import React from 'react';
import RocketLogo from '@assets/branding/rocket.svg';
import RocketLogoLight from '@assets/branding/rocket-light.svg';
import {types} from 'types';
import {icons} from '@assets/icons';
import Gif from '@assets/gifs/monkey-throwing-computer.gif';

export default function MaintenancePage(props: {
    children: React.ReactNode;
    darkModeToggle: types.darkModeSetting;
    setDarkModeToggle(t: types.darkModeSetting): void;
    darkMode: boolean;
}) {
    return (
        <React.Fragment>
            <header
                className={
                    'relative top-0 left-0 w-full z-40 ' +
                    (props.darkMode ? 'dark ' : ' ')
                }
            >
                <div className='absolute top-0 left-0 z-40 p-2 m-1 md:ml-5 md:p-0 md:mt-6'>
                    <div className='flex-row-left ringable p-1.5 -m-1.5 rounded'>
                        <img
                            src={RocketLogo}
                            alt='FastSurvey Icon'
                            className='w-12 h-12 mr-2 dark:hidden'
                        />
                        <img
                            src={RocketLogoLight}
                            alt='FastSurvey Icon'
                            className='hidden w-12 h-12 mr-2 dark:block'
                        />
                        <div
                            className={
                                'mx-2 text-2xl lg:text-2xl ' +
                                'font-weight-700 lg:font-weight-600 ' +
                                'text-gray-800 dark:text-gray-100'
                            }
                        >
                            FastSurvey
                        </div>
                    </div>
                </div>
                <div
                    className={
                        'hidden md:block absolute top-0 right-0 h-7 m-2 group'
                    }
                >
                    <div
                        className={
                            'hidden group-hover:flex flex-row relative ' +
                            'items-center justify-center flex-nowrap ' +
                            'bg-gray-200 text-gray-500 shadow ' +
                            'dark:bg-gray-800 dark:text-gray-400 ' +
                            'text-sm overflow-hidden h-full rounded '
                        }
                    >
                        {['light', 'auto', 'dark'].map((m: any) => (
                            <button
                                key={m}
                                onClick={() => props.setDarkModeToggle(m)}
                                className={
                                    'first:pl-3 last:pr-3 px-3 font-weight-700 ' +
                                    'h-full flex-row-center rounded-sm ' +
                                    (props.darkModeToggle === m
                                        ? 'text-blue-900 bg-blue-100 dark:text-blue-50 dark:bg-blue-900 '
                                        : '')
                                }
                            >
                                {m}
                            </button>
                        ))}
                    </div>
                    <div
                        className={
                            'absolute top-0 right-0 p-1 w-7 h-7 group-hover:hidden'
                        }
                    >
                        <div className='block w-full h-full dark:hidden icon-dark-blue'>
                            {icons.light}
                        </div>
                        <div className='hidden w-full h-full dark:block icon-blue'>
                            {icons.light}
                        </div>
                    </div>
                </div>
            </header>
            <div className={'relative ' + (props.darkMode ? 'dark ' : ' ')}>
                <main
                    className={
                        'w-screen min-h-screen px-2 ' +
                        'pb-12 pt-20 md:pt-12 flex flex-col items-center ' +
                        'justify-start md:justify-center z-10 ' +
                        'bg-gray-100 dark:bg-gray-900 '
                    }
                >
                    <h1
                        className={
                            'flex-row-center font-weight-600 text-lg ' +
                            'no-selection mb-3 mt-4 ' +
                            'text-gray-900 dark:text-gray-100'
                        }
                    >
                        We are currently undergoing maintenance and will be back
                        in a bit
                    </h1>
                    <div className='w-full max-w-md mx-auto mb-5 overflow-hidden rounded-lg shadow-md'>
                        <img
                            src={Gif}
                            className='w-full h-auto'
                            alt='Monkey throwing a computer'
                        />
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
}
