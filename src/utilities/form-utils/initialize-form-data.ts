import {types} from '@types';

export function initializeFormData(config: types.SurveyConfig): types.FormData {
    const formData: object = {};

    config.fields.forEach((field, index) => {
        let fieldData: object | string | boolean | undefined;
        switch (field.type) {
            case 'radio':
                fieldData = '';
                break;
            case 'selection':
                fieldData = [];
                break;
            case 'email':
            case 'text':
                fieldData = '';
                break;
            case 'option':
                fieldData = false;
                break;
            default:
                fieldData = undefined;
                break;
        }

        if (fieldData !== undefined) {
            Object.assign(formData, {
                [index.toString()]: fieldData,
            });
        }
    });

    // @ts-ignore
    return formData;
}
