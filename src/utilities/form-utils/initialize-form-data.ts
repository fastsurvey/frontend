import {types} from '@types';

export function initializeFormData(config: types.SurveyConfig): types.FormData {
    const formData: object = {};

    config.fields.forEach((field, index) => {
        let fieldData: object | string | boolean | undefined;
        switch (field.type) {
            case 'radio':
            case 'selection':
                fieldData = {};
                field.fields.forEach((option, innerIndex) => {
                    Object.assign(fieldData, {
                        [(innerIndex + 1).toString()]: false,
                    });
                });
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
                [(index + 1).toString()]: fieldData,
            });
        }
    });

    // @ts-ignore
    return formData;
}
