import React from 'react';
import {types} from '@types';
import {connect} from 'react-redux';
import {icons} from '@assets/icons';
import {reduxUtils} from '@utilities';

function Message(props: {
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
                    'shadow-md centering-row ' +
                    'rounded pl-4 pr-2 py-1.5 md:py-2 shadow-md box-content ' +
                    'text-lg font-weight-500 ' +
                    (props.message.variant === 'error'
                        ? 'text-red-050 lg:text-red-400 bg-red-400 lg:bg-red-050 '
                        : '') +
                    (props.message.variant === 'success'
                        ? 'text-green-050 lg:text-green-500 bg-green-500 lg:bg-green-050 '
                        : '')
                }
            >
                <div className='text-base leading-normal '>
                    {props.message.text}
                </div>
                <button
                    className={
                        'flex-shrink-0 w-12 h-12 md:w-9 md:h-9 p-2 md:p-1.5 ml-2 cursor-pointer rounded-full ' +
                        'focus:outline-none ring ring-transparent focus:ring-blue-300 ' +
                        (props.message.variant === 'error'
                            ? 'fill-red-050 md:fill-red-400 hover:bg-red-500 focus:bg-red-500 md:hover:bg-red-100 md:focus:bg-red-100 '
                            : '') +
                        (props.message.variant === 'success'
                            ? 'fill-green-050 md:fill-green-500 hover:bg-green-600 focus:bg-green-600 md:hover:bg-green-100 md:focus:bg-green-100 '
                            : '')
                    }
                    onClick={props.closeMessage}
                >
                    {icons.close}
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

export default connect(mapStateToProps, mapDispatchToProps)(Message);
