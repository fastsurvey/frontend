
export interface ConfigResponse {
    data: {
        status: string;
        config: ConfigInterface;
    };
    status: number;
}

export type ConfigInterface = {
    readonly title: string;
    readonly description: string;
    readonly start: number;
    readonly end: number;
    readonly public: boolean;
    readonly email_validation: boolean;
    readonly fields: FieldConfig[];
};

export type FieldConfig = RadioFieldConfig | SelectionFieldConfig | TextFieldConfig;

interface RadioFieldConfig {
    type: 'Radio';
    title: string;
    description: string;
    properties: {
        fields: OptionField[]
    };
}

interface SelectionFieldConfig {
    type: 'Selection';
    title: string;
    description: string;
    properties: {
        min_select: number;
        max_select: number;
        fields: OptionField[];
    };
}

interface TextFieldConfig {
    type: 'Text';
    title: string;
    description: string;
    properties: {
        min_chars: number;
        max_chars: number;
    };
}

type OptionField = {
    type: 'Option';
    title: string;
};

export interface FormDataInterface {
    [key: string]: {
        [key: string]: boolean
    } | boolean | string;
}
