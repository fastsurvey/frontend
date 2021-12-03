import {filter} from 'lodash';
import {types} from '/src/types';

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
                const diff = fieldConfig.min_chars - fieldData.length;
                return `${diff} character${
                    diff !== 1 ? 's' : ''
                } below minimum (${fieldConfig.min_chars})`;
            } else if (fieldData.length > fieldConfig.max_chars) {
                const diff = fieldData.length - fieldConfig.max_chars;
                return `${diff} character${
                    diff !== 1 ? 's' : ''
                } above maximum (${fieldConfig.max_chars})`;
            } else {
                return `Valid: ${fieldData.length}/${fieldConfig.max_chars} characters`;
            }
        default:
            return '';
    }
}
