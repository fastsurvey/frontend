
import React from 'react';
import PropTypes, { InferProps } from "prop-types";
import {createStore} from 'redux'
import {Provider} from "react-redux";


let cloneDeep = require('lodash.clonedeep');

interface ReduxAction {
    type: string,
    data: {
        text?: string,
        config?: object,
        formData?: object,
    }
}

function storeReducer(state = {
    config: {}, fetchingConfig: true,
    formData: {}, submittingData: false,
    message: {text: "", visible: false}
}, action: ReduxAction) {

    let newState = cloneDeep(state);

    switch (action.type) {
        case "ADD_CONFIG":
            newState.config = action.data.config;
            return newState;

        case "MODIFY_FORM_DATA":
            newState.formData = action.data.formData;
            return newState;

        case "SUBMIT_FORM_DATA":
            newState.submittingData = true;
            // TODO: POST form data to backend
            return newState;

        case "SHOW_MESSAGE":
            newState.message = {
                text: action.data.text,
                visible: true
            };
            return newState;

        case "HIDE_MESSAGE":
            newState.message.visible = false;
            return newState;

        default:
            return newState;
    }
}

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
