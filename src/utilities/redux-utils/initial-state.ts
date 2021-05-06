import {types} from 'types';

const initialState: types.ReduxState = {
    fetching: true,
    formConfig: undefined,
    formData: undefined,
    formValidation: undefined,
    message: {
        text: 'Please fill out all the fields',
        variant: 'error',
    },
};

export default initialState;
