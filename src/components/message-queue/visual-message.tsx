import React, {useEffect, useState} from 'react';
import {types} from 'types';
import {icons} from '/src/assets/icons';

export function VisualMessage(props: {message: types.Message; close(): void}) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 400);
    }, [props.message.randomToken]);

    return (
        <div
            className={
                'flex flex-row items-stretch ' +
                'text-gray-200 m-2 mt-0 shadow rounded ' +
                (animate ? 'animate-pop ' : ' ') +
                'text-lg font-weight-500 bg-gray-900 '
            }
            data-cy={`message-panel-${props.message.type} ${props.message.id}`}
        >
            <div className={'pl-3 flex items-center relative '}>
                <div
                    className={
                        'w-2 h-2 ' +
                        (props.message.type === 'error'
                            ? 'svg-message-error '
                            : '') +
                        (props.message.type === 'warning'
                            ? 'svg-message-warning '
                            : '') +
                        (props.message.type === 'success'
                            ? 'svg-message-success '
                            : '')
                    }
                >
                    {icons.circle}
                </div>
            </div>
            <div
                className={
                    'flex items-center ' +
                    'px-2 py-2 min-h-12 md:min-h-[2.5rem] ' +
                    'text-sm leading-normal'
                }
                data-cy='message'
            >
                {props.message.text}
            </div>
            <div className='flex-grow' />
            <button
                className={
                    'flex items-center relative ' +
                    'cursor-pointer rounded-r focus:rounded ' +
                    'ringable hover:bg-gray-700 focus:bg-gray-700 '
                }
                onClick={props.close}
            >
                <div
                    className={
                        'w-12 h-12 p-3 md:w-10 md:h-10 md:p-2 ' +
                        (props.message.type === 'error'
                            ? 'svg-message-error '
                            : '') +
                        (props.message.type === 'warning'
                            ? 'svg-message-warning '
                            : '') +
                        (props.message.type === 'success'
                            ? 'svg-message-success '
                            : '')
                    }
                >
                    {icons.close}
                </div>
            </button>
        </div>
    );
}

export default VisualMessage;
