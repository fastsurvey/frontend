import {types} from '/src/types';

export const messages: {[key in types.MessageId]: types.Message} = {
    'error-config-change': {
        id: 'error-config-change',
        randomToken: 0,
        text: 'The survey changed, please reload the page and fill out the form again',
        type: 'error',
    },
    'error-timing': {
        id: 'error-timing',
        randomToken: 0,
        text: 'The survey is currently not open for submissions',
        type: 'error',
    },
    'error-verification': {
        id: 'error-verification',
        randomToken: 0,
        text: 'Verification token is invalid',
        type: 'error',
    },
    'error-server': {
        id: 'error-server',
        randomToken: 0,
        text: 'Server Error',
        type: 'error',
    },
    'warning-incomplete': {
        id: 'warning-incomplete',
        randomToken: 0,
        text: 'Please fill out all the fields first',
        type: 'warning',
    },
};
