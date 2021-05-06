import React from 'react';
import {icons} from 'assets/icons';
import Button from 'components/button/button';
import {Link} from 'react-router-dom';

function Survey404Text() {
    return (
        <>
            <div
                className={
                    'centering-row font-weight-600 text-xl text-gray-600 ' +
                    'no-selection mb-4'
                }
            >
                <div className='w-8 h-8 mr-2 icon-grey'>{icons.error}</div>
                <div>Survey not found. Invalid link!</div>
            </div>
            <Link
                to='/'
                className={
                    'focus:outline-none ring ring-transparent focus:ring-blue-300 rounded'
                }
            >
                <Button text='Back to Main Page' />
            </Link>
        </>
    );
}

export default Survey404Text;
