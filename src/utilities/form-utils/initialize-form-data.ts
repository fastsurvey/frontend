import {types} from '/src/types';

export function initializeFormData(config: types.SurveyConfig): types.FormData {
    const formData: object = {};

    config.fields.forEach((field, index) => {
        let fieldData: object | string | boolean | undefined;
        switch (field.type) {
            case 'selection':
                fieldData = [];
                break;
            case 'email':
            case 'text':
                fieldData = '';
                break;
            default:
                fieldData = undefined;
                break;
        }

        if (fieldData !== undefined) {
            Object.assign(formData, {
                [field.identifier]: fieldData,
            });
        }
    });

    // @ts-ignore
    return formData;
}
