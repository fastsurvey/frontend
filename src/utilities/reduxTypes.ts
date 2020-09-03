import {ConfigInterface} from './fieldTypes';

export interface ReduxStore {
    fetching: boolean;
    submitting: boolean;
    config: ConfigInterface;
    message: StatusMessage;
}

export interface StatusMessage {
    text: string;
    visible: boolean;
}

export type ReduxAction = AddConfigAction | OpenMessageAction | CloseMessageAction;

interface AddConfigAction {
    type: "ADD_CONFIG";
    config: ConfigInterface;
}

interface OpenMessageAction {
    type: "OPEN_MESSAGE";
    text: string;
}

interface CloseMessageAction {
    type: "CLOSE_MESSAGE";
}