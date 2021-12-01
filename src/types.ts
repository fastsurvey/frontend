export declare namespace types {
    export type darkModeSetting = 'light' | 'auto' | 'dark';

    export type Message = {
        text: string;
        variant: 'success' | 'error';
    };
    export interface SurveyConfig {
        survey_name: string;
        start: number;
        end: number;
        draft: boolean;
        limit: number;
        title: string;
        description: string;
        fields: SurveyField[];
    }

    export type SurveyField = EmailField | SelectionField | TextField;

    interface GeneralSurveyField {
        title: string;
        description: string;
        identifier: number;
    }

    export type FieldType = 'email' | 'selection' | 'text';

    export interface EmailField extends GeneralSurveyField {
        type: 'email';
        regex: string;
        hint: string;
        verify: boolean;
    }

    export interface SelectionField extends GeneralSurveyField {
        type: 'selection';
        min_select: number;
        max_select: number;
        options: string[];
    }

    export interface TextField extends GeneralSurveyField {
        type: 'text';
        min_chars: number;
        max_chars: number;
    }

    export interface EmailRegexSetup {
        label: string;
        value: number;
        regex: string;
        hint: string;
    }

    export type Color = 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'gray';

    export interface ReduxState {
        fetching: boolean;
        formConfig: SurveyConfig | undefined;
        formData: FormData | undefined;
        formValidation: FormValidation | undefined;
        message: types.Message | undefined;
    }

    export interface FormData {
        [key: string]:
            | {
                  [key: string]: boolean;
              }
            | boolean
            | string;
    }

    export interface FormValidation {
        [key: string]: boolean;
    }

    export type ReduxAction =
        | {
              type: 'ADD_CONFIG';
              formConfig: types.SurveyConfig | undefined;
          }
        | {
              type: 'ABORT_FETCH';
          }
        | {
              type: 'MODIFY_DATA';
              formData: types.FormData;
          }
        | {
              type: 'MODIFY_VALIDATION';
              formValidation: types.FormValidation;
          }
        | {
              type: 'OPEN_MESSAGE';
              message: types.Message;
          }
        | {
              type: 'CLOSE_MESSAGE';
          };
}
