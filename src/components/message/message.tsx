import React from 'react';
import {icons} from 'assets/icons';
import {types} from 'types';
import {connect} from 'react-redux';
import reduxUtils from '../../utilities/redux-utils/index';

function Message(props: {
    message: types.Message | undefined;
    closeMessage(): void;
}) {
    if (!props.message) {
        return <div className='hidden' />;
    }
    return (
        <div
            className={
                'fixed bottom-4 left-4 shadow-md centering-row ' +
                'rounded pl-4 pr-2 py-4 shadow-md box-content ' +
                'text-lg font-weight-600 max-w-lg ' +
                (props.message.variant === 'error'
                    ? 'text-red-400 bg-red-050 '
                    : '') +
                (props.message.variant === 'success'
                    ? 'text-green-500 bg-green-050 '
                    : '')
            }
        >
            <div className='leading-normal text-md'>{props.message.text}</div>
            <button
                className={
                    'flex-shrink-0 w-9 h-9 p-1.5 ml-2 cursor-pointer rounded-full ' +
                    'focus:outline-none ring ring-transparent focus:ring-blue-300 ' +
                    (props.message.variant === 'error'
                        ? 'icon-red hover:bg-red-100 focus:bg-red-100 '
                        : '') +
                    (props.message.variant === 'success'
                        ? 'icon-green hover:bg-green-100 focus:bg-green-100 '
                        : '')
                }
                onClick={props.closeMessage}
            >
                {icons.close}
            </button>
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
