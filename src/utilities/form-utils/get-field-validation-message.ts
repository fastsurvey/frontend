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
            const {min_select, max_select} = fieldConfig;
            const selectionCount = filter(fieldData).length;

            if (min_select === 1 && min_select === max_select) {
                if (selectionCount !== 1) {
                    return 'Select exactly one option';
                } else {
                    return 'Valid';
                }
            } else {
                if (selectionCount < min_select) {
                    return `Select at least ${min_select} option${
                        min_select !== 1 ? 's' : ''
                    }`;
                } else if (selectionCount > max_select) {
                    return `Select at most ${max_select} option${
                        max_select !== 1 ? 's' : ''
                    }`;
                } else {
                    return `Valid (between ${min_select} and ${max_select} options)`;
                }
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
            throw `Unknown field type: ${fieldConfig.type}`;
    }
}
