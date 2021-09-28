import React from 'react';
import {Link} from 'react-router-dom';
import RocketLogo from '@assets/branding/rocket.svg';
import {types} from 'types';

function MainContent(props: {
    children: React.ReactNode;
    darkModeToggle: types.darkModeSetting;
    setDarkModeToggle(t: types.darkModeSetting): void;
    darkMode: boolean;
}) {
    return (
        <React.Fragment>
            <header className='relative top-0 left-0 z-40'>
                <div className='absolute top-0 left-0 z-40 p-2 m-1 md:ml-5 md:p-0 md:mt-6'>
                    <Link
                        to='/'
                        className='flex-row-left ringable p-1.5 -m-1.5 rounded'
                    >
                        <img
                            src={RocketLogo}
                            alt='FastSurvey Icon'
                            className='w-12 h-12 mr-2'
                        />
                        <div className='mx-2 text-2xl text-gray-800 lg:text-2xl font-weight-700 lg:font-weigh-600'>
                            FastSurvey
                        </div>
                    </Link>
                </div>
            </header>
            <div className='relative'>
                <main
                    className={
                        'w-screen min-h-screen px-2 bg-gray-100 ' +
                        'pb-12 pt-4 md:pt-12 flex flex-col items-center ' +
                        'justify-start md:justify-center z-10'
                    }
                >
                    {props.children}
                </main>
                <footer className='absolute bottom-0 left-0 z-0 w-full flex-row-center'>
                    <div className='py-1 text-sm text-gray-400 font-weight-500'>
                        {import.meta.env.MODE === 'development' && (
                            <>development</>
                        )}
                        {import.meta.env.MODE === 'production' && (
                            <>version {import.meta.env.VITE_COMMIT_SHA}</>
                        )}
                    </div>
                    <div className='absolute bottom-0 right-0 w-24 h-8 m-2 bg-gray-300 rounded'></div>
                </footer>
            </div>
        </React.Fragment>
    );
}

export default MainContent;
