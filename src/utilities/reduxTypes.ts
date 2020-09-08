
import {ConfigInterface} from './fieldTypes';

export interface ReduxStore {
    fetching: boolean;
    formConfig: ConfigInterface | undefined;
    formData: object | undefined;
    message: StatusMessage;
}

export interface StatusMessage {
    text: string;
    visible: boolean;
}

export type ReduxAction = AddConfigAction | ModifyDataAction | OpenMessageAction | CloseMessageAction;

interface AddConfigAction {
    type: 'ADD_CONFIG';
    formConfig: ConfigInterface | undefined;
}

interface ModifyDataAction {
    type: 'MODIFY_DATA';
    formData: object;
}

interface OpenMessageAction {
    type: 'OPEN_MESSAGE';
    text: string;
}

interface CloseMessageAction {
    type: 'CLOSE_MESSAGE';
}
