import {types} from '/src/types';

const initialState: types.ReduxState = {
    fetching: true,
    formConfig: undefined,
    formData: undefined,
    formValidation: undefined,
    messages: [],
};

export default initialState;
