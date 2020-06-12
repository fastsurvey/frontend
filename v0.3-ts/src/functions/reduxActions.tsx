
import {InterfaceReduxAction} from '../App/ReduxWrapper';

export const addConfig = (config: object): InterfaceReduxAction => ({
    type: 'ADD_CONFIG',
    data: { config }
});

export const modifyFormData = (formData: object): InterfaceReduxAction => ({
    type: 'MODIFY_FORM_DATA',
    data: { formData }
});

export const submitFormData = (): InterfaceReduxAction => ({
    type: 'SUBMIT_FORM_DATA',
    data: {}
});

export const openMessage = (text: string): InterfaceReduxAction => ({
    type: 'OPEN_MESSAGE',
    data: { text }
});

export const closeMessage = (config: object): InterfaceReduxAction => ({
    type: 'CLOSE_MESSAGE',
    data: {}
});
