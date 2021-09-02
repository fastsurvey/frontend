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
                    'text-lg font-weight-600 bg-gray-900 ' +
                    (props.message.variant === 'error' ? 'text-red-100 ' : '') +
                    (props.message.variant === 'success'
                        ? 'text-green-100 '
                        : '')
                }
            >
                <div className='text-sm leading-normal '>
                    {props.message.text}
                </div>
                <button
                    className={
                        'flex-shrink-0 w-12 h-12 md:w-9 md:h-9 p-2 md:p-1.5 ml-2 cursor-pointer rounded-full ' +
                        'ringable hover:bg-gray-700 focus:bg-gray-700 ' +
                        (props.message.variant === 'error'
                            ? 'fill-red-200 hover:bg-gray-700 focus:bg-gray-700 '
                            : '') +
                        (props.message.variant === 'success'
                            ? 'fill-green-200 '
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
