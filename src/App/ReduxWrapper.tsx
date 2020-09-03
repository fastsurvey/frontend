import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import {ReduxAction, ReduxStore} from '../utilities/reduxTypes';
import { addConfig } from '../utilities/reduxActions';
import { BACKEND_URL } from '../constants';
import { isSurveyPath, getRootPath } from '../utilities/pathFunctions';
import {ConfigResponse} from '../utilities/fieldTypes';

function storeReducer(
    state = {
        fetching: true,
        submitting: false,

        config: undefined,
        message: {
            text: '',
            visible: false,
        },
    },
    action: ReduxAction
) {

    let newState: ReduxStore = {
        fetching: state.fetching,
        submitting: state.submitting,
        config: state.config,
        message: state.message,
    };

    switch (action.type) {
        case 'ADD_CONFIG':
            newState.config = action.config;
            newState.fetching = false;
            break;

        case 'OPEN_MESSAGE':
            newState.message.text = action.text;
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
let store = createStore(storeReducer);

interface ReduxWrapperProps {
    children: React.ReactChild;
}

export function ReduxWrapper(props: ReduxWrapperProps) {

    if (isSurveyPath(window.location.pathname)) {
        axios.get(BACKEND_URL + getRootPath(window.location.pathname))
            .then((response: ConfigResponse) => {
                setTimeout(() => {
                    store.dispatch(addConfig(response.data.config));
                }, 800);
            })
            .catch(() => {
                setTimeout(() => {
                    store.dispatch(addConfig(undefined));
                }, 800);
            });
    } else {
        store.dispatch(addConfig(undefined));
    }

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
}

export default ReduxWrapper;
