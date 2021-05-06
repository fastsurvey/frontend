import React from 'react';
import {icons} from 'assets/icons';
import {types} from 'types';
import {connect} from 'react-redux';

function Message(props: {message: types.Message | undefined}) {
    if (!props.message) {
        return <div className='hidden' />;
    }
    return (
        <div
            className={
                'fixed bottom-4 left-4 shadow-md centering-row ' +
                'h-10 rounded leading-10 px-3 py-3 shadow-md ' +
                'text-lg font-weight-600 ' +
                (props.message.variant === 'error'
                    ? 'text-red-400 bg-red-050 '
                    : '') +
                (props.message.variant === 'success'
                    ? 'text-green-500 bg-green-050 '
                    : '')
            }
        >
            <div
                className={
                    'flex-shrink-0 w-6 h-6 mr-2 ' +
                    (props.message.variant === 'error' ? 'icon-red ' : '') +
                    (props.message.variant === 'success' ? 'icon-green ' : '')
                }
            >
                {icons.info}
            </div>
            <div className='text-md'>{props.message.text}</div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    message: state.message,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Message);
