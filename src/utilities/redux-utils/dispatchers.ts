import {types} from 'types';

const dispatchers = {
    addConfig: (dispatch: any) => (formConfig: types.SurveyConfig): void =>
        dispatch({
            type: 'ADD_CONFIG',
            formConfig,
        }),
    modifyData: (dispatch: any) => (formData: types.FormData): void =>
        dispatch({
            type: 'MODIFY_DATA',
            formData,
        }),
    modifyValidation: (dispatch: any) => (
        formValidation: types.FormValidation,
    ): void =>
        dispatch({
            type: 'MODIFY_VALIDATION',
            formValidation,
        }),
};

export default dispatchers;
