import {types} from '/src/types';

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
        (messageId: types.MessageId): void =>
            dispatch({
                type: 'OPEN_MESSAGE',
                messageId,
            }),
    closeMessage:
        (dispatch: any) =>
        (messageId: types.MessageId): void =>
            dispatch({
                type: 'CLOSE_MESSAGE',
                messageId,
            }),
    closeAllMessages: (dispatch: any) => (): void =>
        dispatch({
            type: 'CLOSE_ALL_MESSAGES',
        }),
};

export default dispatchers;
