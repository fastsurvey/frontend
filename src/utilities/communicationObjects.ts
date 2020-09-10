
import { ConfigInterface } from './fieldTypes';

export function generateInitialFormData(config: ConfigInterface): object {
    const formData: object = {};

    if (config.email_validation) {
        Object.assign(formData, {email: ''});
    }

    config.fields.forEach((field, index) => {
        let fieldData: object|string|undefined;
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
            case 'Text':
                fieldData = '';
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
