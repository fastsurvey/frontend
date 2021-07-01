import {types} from '@types';

const dispatchers = {
    addConfig:
        (dispatch: any) =>
        (formConfig: types.SurveyConfig): void =>
            dispatch({
                type: 'ADD_CONFIG',
                formConfig,
            }),
    modifyData:
        (dispatch: any) =>
        (formData: types.FormData): void =>
            dispatch({
                type: 'MODIFY_DATA',
                formData,
            }),
    modifyValidation:
        (dispatch: any) =>
        (formValidation: types.FormValidation): void =>
            dispatch({
                type: 'MODIFY_VALIDATION',
                formValidation,
            }),
    openMessage:
        (dispatch: any) =>
        (message: types.Message): void =>
            dispatch({
                type: 'OPEN_MESSAGE',
                message,
            }),
    closeMessage: (dispatch: any) => (): void =>
        dispatch({
            type: 'CLOSE_MESSAGE',
        }),
};

export default dispatchers;
