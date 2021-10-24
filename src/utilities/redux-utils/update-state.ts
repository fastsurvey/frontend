import {cloneDeep} from 'lodash';
import {types} from '/src/types';

function updateState(state: types.ReduxState, action: types.ReduxAction) {
    const newState = cloneDeep(state);

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
            newState.message = action.message;
            break;

        case 'CLOSE_MESSAGE':
            newState.message = undefined;
            break;

        default:
            break;
    }

    return newState;
}

export default updateState;
