
export const addConfig = (config: object) => ({
    type: "ADD_CONFIG",
    data: { config: config }
});

export const modifyFormData = (formData: object) => ({
    type: "MODIFY_FORM_DATA",
    data: { formData: formData }
});

export const submitFormData = () => ({
    type: "SUBMIT_FORM_DATA",
    data: {}
});

export const openMessage = (text: string) => ({
    type: "OPEN_MESSAGE",
    data: { text: text }
});

export const closeMessage = (config: object) => ({
    type: "CLOSE_MESSAGE",
    data: {}
});
