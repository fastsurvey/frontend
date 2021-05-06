export declare namespace types {
    export type Message = {
        text: string;
        variant: 'success' | 'error';
    };
    export interface SurveyConfig {
        survey_name: string;
        start: number;
        end: number;
        authentication: 'email' | 'open';
        draft: boolean;
        limit: number;
        title: string;
        description: string;
        fields: SurveyField[];
    }

    export type SurveyField =
        | EmailField
        | OptionField
        | RadioField
        | SelectionField
        | TextField;

    interface GeneralSurveyField {
        title: string;
        description: string;
    }

    export type FieldType = 'email' | 'option' | 'radio' | 'selection' | 'text';

    export interface EmailField extends GeneralSurveyField {
        type: 'email';
        regex: string;
        hint: string;
    }

    export interface OptionField extends GeneralSurveyField {
        type: 'option';
        required: boolean;
    }

    export interface RadioField extends GeneralSurveyField {
        type: 'radio';
        fields: FieldOption[];
    }

    export interface SelectionField extends GeneralSurveyField {
        type: 'selection';
        min_select: number;
        max_select: number;
        fields: FieldOption[];
    }

    export interface FieldOption extends GeneralSurveyField {
        type: 'option';
        required: boolean;
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
          };
}
