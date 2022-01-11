import {cloneDeep, pullAllBy} from 'lodash';
import {types} from '/src/types';
import {constants} from '/src/utilities';

function updateState(state: types.ReduxState, action: types.ReduxAction) {
    const newState = cloneDeep(state);
    console.debug(action.type, action);

    switch (action.type) {
        case 'ADD_CONFIG':
            newState.formConfig = action.formConfig;
            newState.fetching = false;
            break;

        case 'ABORT_FETCH':
            newState.fetching = false;
            break;

        case 'MODIFY_DATA':
            newState.formData = action.formData;
            break;

        case 'MODIFY_VALIDATION':
            newState.formValidation = action.formValidation;
            break;

        case 'OPEN_MESSAGE':
            // do not have mutliple messages with the same text
            // increase the randomToken parameter when messages
            // are already there
            const existingMessages = newState.messages.filter(
                (m) => m.id === action.messageId,
            );
            if (existingMessages.length > 0) {
                newState.messages = [
                    ...pullAllBy(
                        newState.messages,
                        [{id: action.messageId}],
                        'id',
                    ),
                    {
                        ...existingMessages[0],
                        randomToken: existingMessages[0].randomToken + 1,
                    },
                ];
            } else {
                newState.messages = [
                    ...newState.messages,
                    constants.messages[action.messageId],
                ];
            }
            break;

        case 'CLOSE_MESSAGE':
            newState.messages = newState.messages.filter(
                (m) => m.id !== action.messageId,
            );
            break;

        case 'CLOSE_ALL_MESSAGES':
            newState.messages = [];
            break;

        default:
            // @ts-ignore
            if (!action.type.startsWith('@@redux')) {
                throw `Unknown action: ${JSON.stringify(
                    action,
                )}, ${JSON.stringify(state)}`;
            }
    }

    return newState;
}

export default updateState;
