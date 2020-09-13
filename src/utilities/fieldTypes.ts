
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
    readonly fields: FieldConfig[];
};

export type FieldConfig =
    EmailFieldConfig | RadioFieldConfig |
    SelectionFieldConfig | OptionFieldConfig |
    TextFieldConfig;

export interface EmailFieldConfig {
    type: 'Email';
    title: string;
    description: string;
    properties: {
        required: boolean;
        verification_needed: boolean;
        format_regex: string;
    };
}

export interface RadioFieldConfig {
    type: 'Radio';
    title: string;
    description: string;
    properties: {
        fields: OptionField[]
    };
}

export interface SelectionFieldConfig {
    type: 'Selection';
    title: string;
    description: string;
    properties: {
        min_select: number;
        max_select: number;
        fields: OptionField[];
    };
}

export interface OptionFieldConfig {
    type: 'Option';
    title: string;
    description: string;
    properties: {
        required: boolean;
    };
}

export interface TextFieldConfig {
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
