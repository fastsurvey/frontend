import {filter} from 'lodash';
import {types} from '@types';

export function getFieldValidationMessage(
    fieldConfig: types.SurveyField,
    fieldData: any,
): string {
    switch (fieldConfig.type) {
        case 'email':
            if (!new RegExp('^.+@.+$').test(fieldData)) {
                return 'Not a valid email';
            }

            if (!new RegExp('^' + fieldConfig.regex + '$').test(fieldData)) {
                return (
                    'Does not match the desired format.' +
                    (fieldConfig.hint.length > 0
                        ? ` Hint: ${fieldConfig.hint}`
                        : '')
                );
            }

            return 'Valid';

        case 'option':
            if (fieldData || !fieldConfig.required) {
                return 'Valid';
            } else {
                return 'Required';
            }

        case 'radio':
            if (fieldData === '') {
                return 'Please choose one';
            } else {
                return 'Valid';
            }

        case 'selection':
            const selectionCount = filter(fieldData).length;
            if (selectionCount < fieldConfig.min_select) {
                return `Select at least ${fieldConfig.min_select} option${
                    fieldConfig.min_select !== 1 ? 's' : ''
                }`;
            } else if (selectionCount > fieldConfig.max_select) {
                return `Select at most ${fieldConfig.max_select} option${
                    fieldConfig.max_select !== 1 ? 's' : ''
                }`;
            } else {
                return 'Valid';
            }

        case 'text':
            if (fieldData.length < fieldConfig.min_chars) {
                return `${
                    fieldConfig.min_chars - fieldData.length
                } characters below minimum (${fieldConfig.min_chars})`;
            } else if (fieldData.length > fieldConfig.max_chars) {
                return `${
                    fieldData.length - fieldConfig.max_chars
                } characters over maximum (${fieldConfig.max_chars})`;
            } else {
                return `Valid: ${fieldData.length}/${fieldConfig.max_chars} characters`;
            }
        default:
            return '';
    }
}
