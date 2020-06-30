import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import cloneDeep from 'lodash.clonedeep';
import axios from 'axios';
import {ConfigResponse, ReduxAction, ReduxStore} from '../functions/reduxInterfaces';
import { addConfig, setInvalidSurveyId } from '../functions/reduxActions';
import { BACKEND_URL } from '../constants';
import { isSurveyPath, getSurveyRootPath } from '../functions/pathFunctions';

function storeReducer(
    state = {
        validSurveyId: true,
        fetching: true,
        submitting: false,

        config: {
            title: '',
            description: '',
            start: 0,
            end: 0,
        },
        formData: {},
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
            // @ts-ignore
            newState.formData = action.data.formData;
            newState.fetching = false;
            break;

        case 'SET_INVALID_SURVEY_ID':
            console.error('FastSurvey: Invalid Survey Id');
            newState.fetching = false;
            newState.validSurveyId = false;
            break;

        case 'MODIFY_FORM_DATA':
            // @ts-ignore
            newState.formData = action.data.formData;
            break;

        case 'SUBMIT_FORM_DATA':
            newState.submitting = true;
            // TODO: POST form data to backend
            break;

        case 'OPEN_MESSAGE':
            // @ts-ignore
            newState.message.text = action.data.text;
            newState.message.visible = true;
            break;

        case 'CLOSE_MESSAGE':
            newState.message.visible = false;
            break;

        default:
            break;
    }

    return newState;
}

// @ts-ignore
// tslint:disable-next-line
let store = createStore(storeReducer);

export function ReduxWrapper({children}: InferProps<typeof ReduxWrapper.propTypes>) {

    if (isSurveyPath(window.location.pathname)) {
        axios.get(BACKEND_URL + getSurveyRootPath(window.location.pathname))
            .then((response: ConfigResponse) => {
                setTimeout(() => {
                    store.dispatch(addConfig(response.data.config, {}));
                }, 1500);
            })
            .catch(() => {
                setTimeout(() => {
                    store.dispatch(setInvalidSurveyId());
                }, 1500);
            });
    } else {
        store.dispatch(setInvalidSurveyId());
    }

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
