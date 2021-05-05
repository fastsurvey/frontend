import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reduxUtils} from 'utilities';
import {types} from 'types';

const store = createStore(
    (
        state: types.ReduxState = reduxUtils.initialState,
        action: types.ReduxAction,
    ) => reduxUtils.updateState(state, action),
);

interface Props {
    children: React.ReactChild;
}
export function ReduxStore(props: Props) {
    /*
    if (isSurveyPath(window.location.pathname)) {
        axios
            .get(BACKEND_URL + getRootPath(window.location.pathname))
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
    }*/

    return <Provider store={store}>{props.children}</Provider>;
}

export default ReduxStore;
