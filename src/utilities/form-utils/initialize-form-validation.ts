import {types} from '@types';
import {formUtils} from '@utilities';

export function initializeFormValidation(
    config: types.SurveyConfig,
): types.FormValidation {
    const formValidation: object = {};

    config.fields.forEach((field, index) => {
        let fieldValidation: boolean | undefined;
        switch (field.type) {
            case 'radio':
                fieldValidation = false;
                break;
            case 'selection':
                fieldValidation = field.min_select === 0;
                break;
            case 'email':
                fieldValidation =
                    formUtils.getFieldValidationMessage(field, '') === 'Valid';
                break;
            case 'text':
                fieldValidation = field.min_chars === 0;
                break;
            case 'option':
                fieldValidation = !field.required;
                break;
            default:
                fieldValidation = undefined;
                break;
        }

        if (fieldValidation !== undefined) {
            Object.assign(formValidation, {
                [index.toString()]: fieldValidation,
            });
        }
    });

    // @ts-ignore
    return formValidation;
}
