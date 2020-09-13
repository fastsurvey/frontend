
import { ConfigInterface } from './fieldTypes';

export function generateInitialFormData(config: ConfigInterface): object {
    const formData: object = {};

    config.fields.forEach((field, index) => {
        let fieldData: object|string|boolean|undefined;
        switch (field.type) {
            case 'Radio':
            case 'Selection':
                fieldData = {};
                field.properties.fields.forEach((option, innerIndex) => {
                    Object.assign(fieldData, {
                        [(innerIndex + 1).toString()]: false,
                    });
                });
                break;
            case 'Email':
            case 'Text':
                fieldData = '';
                break;
            case 'Option':
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

    return formData;
}
