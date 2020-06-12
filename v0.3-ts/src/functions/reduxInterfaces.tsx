
export interface ReduxStore {
    config: object;
    fetchingConfig: boolean;
    formData: object;
    submittingData: boolean;
    message: { text: string; visible: boolean };
}

export interface ReduxAction {
    type: string;
    data: {
        config?: object;
        formData?: object;
        text?: string;
    };
}
