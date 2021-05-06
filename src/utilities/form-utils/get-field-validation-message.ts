import {types} from 'types';

export function getFieldValidationMessage(
    fieldConfig: types.SurveyField,
    fieldData: any,
): string {
    switch (fieldConfig.type) {
        case 'option':
            if (fieldData || !fieldConfig.required) {
                return 'Valid';
            } else {
                return 'Required';
            }
            break;
        default:
            return '';
            break;
    }
}
