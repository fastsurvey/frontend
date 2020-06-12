
import {ConfigInterface, ReduxAction} from './reduxInterfaces';

export const addConfig = (config: ConfigInterface, formData: object): ReduxAction => ({
    type: 'ADD_CONFIG',
    data: { config, formData },
});

export const setInvalidSurveyId = (): ReduxAction => ({
    type: 'SET_INVALID_SURVEY_ID',
    data: {},
});

export const modifyFormData = (formData: object): ReduxAction => ({
    type: 'MODIFY_FORM_DATA',
    data: { formData },
});

export const submitFormData = (): ReduxAction => ({
    type: 'SUBMIT_FORM_DATA',
    data: {},
});

export const openMessage = (text: string): ReduxAction => ({
    type: 'OPEN_MESSAGE',
    data: { text },
});

export const closeMessage = (config: object): ReduxAction => ({
    type: 'CLOSE_MESSAGE',
    data: {},
});
