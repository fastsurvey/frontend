import {reduce} from 'lodash';
import {types} from '/src/types';

export function initializeFormData(config: types.SurveyConfig): types.FormData {
    if (config.fields !== undefined) {
        return reduce(
            config.fields.filter((f) =>
                ['selection', 'email', 'text'].includes(f.type),
            ),
            (acc, fieldConfig: any) => ({
                ...acc,
                [fieldConfig.identifier]:
                    fieldConfig.type === 'selection' ? [] : '',
            }),
            {},
        );
    } else {
        return {};
    }
}
