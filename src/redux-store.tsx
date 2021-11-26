import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {types} from '/src/types';
import {reduxUtils, pathUtils, backend} from '/src/utilities';

const store = createStore(
    (
        state: types.ReduxState = reduxUtils.initialState,
        action: types.ReduxAction,
    ) => reduxUtils.updateState(state, action),
);

interface Props {
    children: React.ReactNode;
}
export function ReduxStore(props: Props) {
    function addConfig(config: types.SurveyConfig) {
        store.dispatch({type: 'ADD_CONFIG', formConfig: config});
    }

    function abortFetch() {
        store.dispatch({type: 'ABORT_FETCH'});
    }

    if (pathUtils.isSurveyPath(window.location.pathname)) {
        const {username, survey_name} = pathUtils.getPathId(
            window.location.pathname,
        );
        backend.fetchConfig(username, survey_name, addConfig, abortFetch);
    } else {
        abortFetch();
    }

    return <Provider store={store}>{props.children}</Provider>;
}

export default ReduxStore;
