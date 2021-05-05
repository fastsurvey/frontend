import * as React from 'react';
import RocketLogo from 'assets/branding/rocket.svg';
import {pathUtils} from 'utilities';
import 'styles/PageWrapper.scss';

import {Link} from 'react-router-dom';

function PageWrapper(props: {children: React.ReactChild}) {
    const logoURL: string = pathUtils.isSurveyPath(window.location.pathname)
        ? pathUtils.getRootPath(window.location.pathname)
        : '/';

    return (
        <React.Fragment>
            <header>
                <Link to={logoURL}>
                    <div className='FastSurveyIcon'>
                        <img src={RocketLogo} alt='FastSurvey Icon' />
                    </div>
                </Link>
            </header>
            <main>{props.children}</main>
        </React.Fragment>
    );
}

export default PageWrapper;
