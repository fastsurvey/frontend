import {ConfigInterface, FormDataInterface} from './fieldTypes';
import {ReduxAction} from './reduxTypes';


export const addConfig = (formConfig: ConfigInterface | undefined): ReduxAction => ({
    type: 'ADD_CONFIG',
    formConfig,
});

export const modifyData = (formData: FormDataInterface): ReduxAction => ({
    type: 'MODIFY_DATA',
    formData,
});

export const openMessage = (text: string): ReduxAction => ({
    type: 'OPEN_MESSAGE',
    text,
});

export const closeMessage = (): ReduxAction => ({
    type: 'CLOSE_MESSAGE',
});
