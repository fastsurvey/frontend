import React from 'react';
import {types} from 'types';
import {connect} from 'react-redux';
import {icons} from '/src/assets/icons';
import {reduxUtils} from '/src/utilities';

export function MessageComponent(props: {
    message: types.Message | undefined;
    closeMessage(): void;
}) {
    if (!props.message) {
        return <div className='hidden' />;
    }
    return (
        <div className='fixed bottom-0 left-0 p-2 max-w-screen md:p-4 md:max-w-lg'>
            <div
                className={
                    'flex flex-row items-stretch ' +
                    'border-l-4 text-gray-200 ' +
                    'shadow rounded-r ' +
                    'text-lg font-weight-500 bg-gray-800 dark:bg-gray-800 ' +
                    (props.message.variant === 'error'
                        ? 'border-red-200 '
                        : '') +
                    (props.message.variant === 'success'
                        ? 'border-green-300 '
                        : '')
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
                <button
                    className={
                        'flex items-center ' +
                        'cursor-pointer rounded-r relative ' +
                        'ringable hover:bg-gray-700 focus:bg-gray-700 ' +
                        (props.message.variant === 'error'
                            ? 'fill-red-200 hover:bg-gray-700 focus:bg-gray-700 '
                            : '') +
                        (props.message.variant === 'success'
                            ? 'fill-green-300 '
                            : '')
                    }
                    onClick={props.closeMessage}
                >
                    <div className='w-12 h-12 p-3 md:w-10 md:h-10 md:p-2'>
                        {icons.close}
                    </div>
                </button>
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    message: state.message,
});

const mapDispatchToProps = (dispatch: any) => ({
    closeMessage: reduxUtils.dispatchers.closeMessage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageComponent);
