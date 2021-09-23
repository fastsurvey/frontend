import React from 'react';
import {Link} from 'react-router-dom';
import RocketLogo from '@assets/branding/rocket.svg';

function MainContent(props: {children: React.ReactNode}) {
    return (
        <React.Fragment>
            <header className='relative top-0 left-0 z-20 w-full bg-gray-200 md:bg-transparent md:absolute flex-row-left'>
                <div className='h-12 m-4 lg:h-16'>
                    <Link to='/' className={'ringable rounded centering-row'}>
                        <img
                            src={RocketLogo}
                            alt='FastSurvey Icon'
                            className='w-16 h-16 p-2'
                        />
                        <div className='mx-2 text-2xl text-gray-900 lg:text-2xl font-weight-700 lg:font-weigh-600'>
                            FastSurvey
                        </div>
                    </Link>
                </div>
            </header>
            <div className='relative'>
                <main
                    className={
                        'w-screen min-h-screen px-2 bg-gray-200 ' +
                        'pb-12 pt-4 md:pt-12 flex flex-col items-center ' +
                        'justify-start md:justify-center z-10'
                    }
                >
                    {props.children}
                </main>
                <footer className='absolute bottom-0 left-0 z-0 w-full flex-row-center'>
                    <div className='py-1 text-sm text-gray-400 font-weight-500'>
                        {import.meta.env.MODE === 'development' && (
                            <>development build</>
                        )}
                        {import.meta.env.MODE === 'production' && (
                            <>version - {import.meta.env.VITE_COMMIT_SHA}</>
                        )}
                    </div>
                </footer>
            </div>
        </React.Fragment>
    );
}

export default MainContent;
