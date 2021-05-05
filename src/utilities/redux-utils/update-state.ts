import {cloneDeep} from 'lodash';
import {types} from 'types';

function updateState(state: types.ReduxState, action: types.ReduxAction) {
    const newState = cloneDeep(state);
    console.debug(action);

    switch (action.type) {
        case 'ADD_CONFIG':
            newState.formConfig = action.formConfig;
            newState.fetching = false;
            break;

        case 'MODIFY_DATA':
            newState.formData = action.formData;
            break;

        case 'MODIFY_VALIDATION':
            newState.formValidation = action.formValidation;
            break;

        default:
            break;
    }

    return newState;
}

export default updateState;
