import {reduce} from 'lodash';
import {types} from '/src/types';
import {formUtils} from '/src/utilities';

export function initializeFormValidation(
    config: types.SurveyConfig,
    formData: types.FormData,
): types.FormValidation {
    if (config.fields !== undefined) {
        return reduce(
            config.fields.filter((f) =>
                ['selection', 'email', 'text'].includes(f.type),
            ),
            (acc, fieldConfig: any) => ({
                ...acc,
                [fieldConfig.identifier]: formUtils.getFieldValidationMessage(
                    fieldConfig,
                    formData[fieldConfig.identifier],
                ),
            }),
            {},
        );
    } else {
        return {};
    }
}
