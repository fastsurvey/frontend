import {ConfigInterface} from './fieldTypes';
import {ReduxAction} from './reduxTypes';


export const addConfig = (config: ConfigInterface | undefined): ReduxAction => ({
    type: 'ADD_CONFIG',
    config,
});

export const openMessage = (text: string): ReduxAction => ({
    type: 'OPEN_MESSAGE',
    text,
});

export const closeMessage = (): ReduxAction => ({
    type: 'CLOSE_MESSAGE',
});
