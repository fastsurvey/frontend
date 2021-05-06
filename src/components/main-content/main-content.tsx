import * as React from 'react';
import RocketLogo from 'assets/branding/rocket.svg';
import {pathUtils} from 'utilities';

import {Link} from 'react-router-dom';

function MainContent(props: {children: React.ReactNode}) {
    const logoURL: string = pathUtils.isSurveyPath(window.location.pathname)
        ? pathUtils.getRootPath(window.location.pathname)
        : '/';

    return (
        <React.Fragment>
            <header>
                <div className='fixed top-0 left-0 h-16 m-4'>
                    <Link
                        to={logoURL}
                        className={
                            'focus:outline-none ring ring-transparent focus:ring-blue-300 rounded centering-row'
                        }
                    >
                        <img
                            src={RocketLogo}
                            alt='FastSurvey Icon'
                            className='w-16 h-16 p-2'
                        />
                        <div className='mx-2 text-2xl text-blue-900 font-weight-700'>
                            FastSurvey
                        </div>
                    </Link>
                </div>
            </header>
            <main className='w-screen min-h-screen px-2 pt-16 pb-32 bg-grey-100 centering-col'>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default MainContent;
