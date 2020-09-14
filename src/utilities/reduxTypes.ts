
import {ConfigInterface, FormDataInterface, FormValidationInterface} from './fieldTypes';

export interface ReduxStore {
    fetching: boolean;
    formConfig: ConfigInterface | undefined;
    formData: FormDataInterface | undefined;
    formValidation: FormValidationInterface | undefined;
    message: StatusMessage;
}

export interface StatusMessage {
    text: string;
    visible: boolean;
}

export type ReduxAction =
    AddConfigAction | ModifyDataAction |
    ModifyValidationAction | OpenMessageAction |
    CloseMessageAction;

interface AddConfigAction {
    type: 'ADD_CONFIG';
    formConfig: ConfigInterface | undefined;
}

interface ModifyDataAction {
    type: 'MODIFY_DATA';
    formData: FormDataInterface;
}

interface ModifyValidationAction {
    type: 'MODIFY_VALIDATION';
    formValidation: FormValidationInterface;
}

interface OpenMessageAction {
    type: 'OPEN_MESSAGE';
    text: string;
}

interface CloseMessageAction {
    type: 'CLOSE_MESSAGE';
}
