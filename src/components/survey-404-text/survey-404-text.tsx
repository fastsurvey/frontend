import React from 'react';
import Gif from '@assets/gifs/computer.webp';
import {Button} from '@components';
import {useHistory} from 'react-router';

function Survey404Text() {
    const history = useHistory();
    return (
        <>
            <h1
                className={
                    'flex-row-center font-weight-600 text-lg ' +
                    'no-selection mb-3 ' +
                    'text-gray-900 dark:text-gray-100'
                }
            >
                404: Survey not found
            </h1>
            <div className='w-full max-w-md mx-auto mb-5 overflow-hidden rounded-lg shadow-md'>
                <img
                    src={Gif}
                    className='w-full h-auto'
                    alt='Monkey with a cash'
                />
            </div>
            <Button
                text='Back to Landing Page'
                onClick={() => {
                    history.push('/');
                }}
            />
        </>
    );
}

export default Survey404Text;
