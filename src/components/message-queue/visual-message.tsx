import React, {useEffect, useState} from 'react';
import {types} from 'types';
import {icons} from '/src/assets/icons';

export function VisualMessage(props: {message: types.Message; close(): void}) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 450);
    }, [props.message.randomToken]);

    return (
        <div
            className={
                'flex flex-row items-stretch animate-pop ' +
                'border-l-4 text-gray-200 m-2 ' +
                `shadow rounded-r ${animate ? 'animate-pop ' : ''}` +
                'text-lg font-weight-500 bg-gray-800 ' +
                (props.message.type === 'error' && 'border-red-200 ') +
                (props.message.type === 'warning' && 'border-yellow-300 ') +
                (props.message.type === 'success' && 'border-green-300 ')
            }
        >
            <div
                className={
                    'flex items-center ' +
                    'px-3 py-2 min-h-12 md:min-h-[2.5rem] ' +
                    'text-sm leading-normal'
                }
            >
                {props.message.text}
            </div>
            <div className='flex-max' />
            <button
                className={
                    'flex items-center ' +
                    'cursor-pointer rounded-r relative ' +
                    'ringable hover:bg-gray-700 focus:bg-gray-700 ' +
                    (props.message.type === 'error' && 'fill-red-200 ') +
                    (props.message.type === 'warning' && 'fill-yellow-300 ') +
                    (props.message.type === 'success' && 'fill-green-300 ')
                }
                onClick={props.close}
            >
                <div className='w-12 h-12 p-3 md:w-10 md:h-10 md:p-2'>
                    {icons.close}
                </div>
            </button>
        </div>
    );
}

export default VisualMessage;
