
export interface ConfigResponse {
    data: {
        status: string,
        config: ConfigInterface,
    };
    status: number;
}

export type ConfigInterface = {
    readonly title: string;
    readonly description: string;
    readonly start: number;
    readonly end: number;
    readonly fields: FieldConfig[];
} | undefined;

export type FieldConfig = RadioFieldConfig | SelectionFieldConfig | TextFieldConfig;

interface RadioFieldConfig {
    type: "Radio",
    title: string,
    description: string,
    public: boolean,
    properties: {
        fields: OptionField[]
    }
}

interface SelectionFieldConfig {
    type: "Selection",
    title: string,
    description: string,
    public: boolean,
    properties: {
        min_select: number,
        max_select: number,
        fields: OptionField[]
    }
}

interface TextFieldConfig {
    type: "Text",
    title: string,
    description: string,
    properties: {
        min_chars: number,
        max_chars: number
    }
}

type OptionField = {
    type: "Option",
    title: string
}