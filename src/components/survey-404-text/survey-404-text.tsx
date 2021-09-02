import React from 'react';
import Gif from '@assets/gifs/computer.webp';
import {IconButton} from '@components';
import {icons} from '@assets/icons';
import {useHistory} from 'react-router';

function Survey404Text() {
    const history = useHistory();
    return (
        <>
            <h1
                className={
                    'centering-row font-weight-600 text-lg text-gray-900 ' +
                    'no-selection mb-2'
                }
            >
                404: Survey not found
            </h1>
            <div className='w-full max-w-md mx-auto mb-8 overflow-hidden rounded-lg shadow-md'>
                <img
                    src={Gif}
                    className='w-full h-auto'
                    alt='Monkey with a cash'
                />
            </div>
            <IconButton
                text='Back to Landing Page'
                icon={icons.chevronLeftCircle}
                onClick={() => {
                    history.push('/');
                }}
            />
        </>
    );
}

export default Survey404Text;
