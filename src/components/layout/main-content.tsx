import React from 'react';
import {Link} from 'react-router-dom';
import RocketLogo from '@assets/branding/rocket.svg';
import {pathUtils} from '@utilities';

function MainContent(props: {children: React.ReactNode}) {
    const logoURL: string = pathUtils.isSurveyPath(window.location.pathname)
        ? pathUtils.getRootPath(window.location.pathname)
        : '/';

    return (
        <React.Fragment>
            <header className='relative top-0 left-0 w-full bg-gray-200 md:bg-transparent md:absolute flex-row-left'>
                <div className='h-12 m-4 lg:h-16'>
                    <Link
                        to={logoURL}
                        className={'ringable rounded centering-row'}
                    >
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
            <main
                className={
                    'w-screen min-h-screen px-2 bg-gray-200 ' +
                    'pb-12 pt-4 md:pt-12 flex flex-col items-center ' +
                    'justify-start md:justify-center'
                }
            >
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default MainContent;
