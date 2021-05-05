import * as React from 'react';
import RocketLogo from 'assets/branding/rocket.svg';
import {pathUtils} from 'utilities';

import {Link} from 'react-router-dom';

function MainContent(props: {children: React.ReactChild}) {
    const logoURL: string = pathUtils.isSurveyPath(window.location.pathname)
        ? pathUtils.getRootPath(window.location.pathname)
        : '/';

    return (
        <React.Fragment>
            <header>
                <Link to={logoURL}>
                    <div className='absolute top-0 left-0 h-16 m-4 centering-row'>
                        <img
                            src={RocketLogo}
                            alt='FastSurvey Icon'
                            className='w-16 h-16 p-2'
                        />
                        <div className='ml-2 text-2xl text-gray-600 font-weight-700'>
                            FastSurvey
                        </div>
                    </div>
                </Link>
            </header>
            <main className='w-screen min-h-screen bg-gray-200 centering-col'>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default MainContent;
