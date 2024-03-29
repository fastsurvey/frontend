import React from 'react';
import {useHistory} from 'react-router';
import Gif from '/src/assets/gifs/computer.webp';
import {Button} from '/src/components';

export default function NotFoundPage() {
    const history = useHistory();
    return (
        <>
            <h1
                className={
                    'centering-row font-weight-600 text-lg text-gray-900 dark:text-gray-100 ' +
                    'no-selection mb-3'
                }
            >
                404: Page not found
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
