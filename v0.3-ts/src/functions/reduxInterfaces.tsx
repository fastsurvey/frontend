
export interface ReduxStore {
    validSurveyId: boolean;
    fetching: boolean;
    submitting: boolean;

    config: ConfigInterface;
    formData: object;
    message: { text: string; visible: boolean };
}

export interface ReduxAction {
    type: string;
    data: {
        config?: ConfigInterface;
        formData?: object;
        text?: string;
    };
}

export interface ConfigResponse {
    data: {
        status: string,
        config: ConfigInterface,
    };
    status: number;
    statusText?: string;
    headers?: object;
    config?: object;
}

export interface ConfigInterface {
    readonly title: string;
    readonly description: string;
    readonly logo?: string;
    readonly start: number;
    readonly end: number;
    readonly archive?: number;
}
