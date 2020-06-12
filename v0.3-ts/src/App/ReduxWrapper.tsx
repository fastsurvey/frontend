import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cloneDeep from 'lodash.clonedeep';
import { ReduxAction, ReduxStore } from '../functions/reduxInterfaces';

function storeReducer(
    state = {
        config: {},
        fetchingConfig: true,
        formData: {},
        submittingData: false,
        message: {
            text: '',
            visible: false,
        },
    },
    action: ReduxAction
) {

    // tslint:disable-next-line
    let newState: ReduxStore = cloneDeep(state);

    switch (action.type) {
        case 'ADD_CONFIG':
            // @ts-ignore
            newState.config = action.data.config;
            break;

        case 'MODIFY_FORM_DATA':
            // @ts-ignore
            newState.formData = action.data.formData;
            break;

        case 'SUBMIT_FORM_DATA':
            newState.submittingData = true;
            // TODO: POST form data to backend
            break;

        case 'OPEN_MESSAGE':
            // @ts-ignore
            newState.message.text = action.data.text;
            newState.message.visible = true;
            break;

        case 'CLOSE_MESSAGE':
            newState.message.visible = false;

        default:
            break;
    }

    return newState;
}

// tslint:disable-next-line
let store = createStore(storeReducer);

export function ReduxWrapper({children}: InferProps<typeof ReduxWrapper.propTypes>) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

ReduxWrapper.propTypes = {
    children: PropTypes.element.isRequired,
};

export default ReduxWrapper;
