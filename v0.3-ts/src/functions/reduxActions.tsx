
import {ReduxAction} from "../App/ReduxWrapper";

export const addConfig = (config: object): ReduxAction => ({
    type: "ADD_CONFIG",
    data: { config }
});

export const modifyFormData = (formData: object): ReduxAction => ({
    type: "MODIFY_FORM_DATA",
    data: { formData }
});

export const submitFormData = (): ReduxAction => ({
    type: "SUBMIT_FORM_DATA",
    data: {}
});

export const openMessage = (text: string): ReduxAction => ({
    type: "OPEN_MESSAGE",
    data: { text }
});

export const closeMessage = (config: object): ReduxAction => ({
    type: "CLOSE_MESSAGE",
    data: {}
});
