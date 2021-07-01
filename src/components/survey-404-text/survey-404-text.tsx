import React from 'react';
import {icons} from '../../assets/icons';
import Button from '../../components/button/button';

function Survey404Text() {
    return (
        <>
            <div
                className={
                    'centering-row font-weight-400 text-lg text-grey-600 ' +
                    'no-selection mb-6'
                }
            >
                <div className='w-8 h-8 mr-2 icon-grey'>{icons.error}</div>
                <div>Survey not found. Invalid link!</div>
            </div>
            <a
                href='/'
                target='_self'
                className={
                    'focus:outline-none ring ring-transparent focus:ring-blue-300 rounded'
                }
            >
                <Button text='Back to Main Page' />
            </a>
        </>
    );
}

export default Survey404Text;
