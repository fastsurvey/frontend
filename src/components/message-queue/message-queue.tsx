import React from 'react';
import {connect} from 'react-redux';
import {reduxUtils} from '/src/utilities';
import {types} from '/src/types';
import {icons} from '/src/assets/icons';
import VisualMessage from './visual-message';

interface Props {
    messages: types.Message[];
    closeMessage(messageId: types.MessageId): void;
    closeAllMessages(): void;
}
function MessageQueue(props: Props) {
    return (
        <div className='fixed bottom-0 left-0 z-30 w-full max-w-md flex-col-right'>
            {props.messages.length >= 2 && (
                <button
                    className={
                        'centering-row pl-3 pr-1 m-2 ' +
                        'font-weight-600 rounded group ' +
                        'text-gray-500 ' +
                        'focus:outline-none ring-[2.5px] ring-transparent focus:ring-blue-200'
                    }
                    onClick={props.closeAllMessages}
                >
                    <div>close all</div>
                    <div className='flex-shrink-0 w-10 h-10 p-2 icon-gray'>
                        {icons.closeCircle}
                    </div>
                </button>
            )}
            {props.messages.map((m) => (
                <VisualMessage
                    key={m.text}
                    message={m}
                    close={() => props.closeMessage(m.id)}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    messages: state.messages,
});
const mapDispatchToProps = (dispatch: any) => ({
    closeMessage: reduxUtils.dispatchers.closeMessage(dispatch),
    closeAllMessages: reduxUtils.dispatchers.closeAllMessages(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(MessageQueue);
