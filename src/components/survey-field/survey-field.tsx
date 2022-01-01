import React from 'react';
import {connect} from 'react-redux';
import {types} from '/src/types';
import {icons} from '/src/assets/icons';
import {formUtils, reduxUtils} from '/src/utilities';

import SelectionForm from './field-form/selection-form';
import TextForm from './field-form/text-form';
import EmailForm from './field-form/email-form';

export function SurveyFieldComponent(props: {
    fieldConfig: types.QuestionField;
    fieldIndex: number;
    formData: any;
    formValidation: any;

    modifyData(newData: any): void;
    modifyValidation(newValidation: any): void;
}) {
    const {fieldConfig, fieldIndex, formData, formValidation} = props;

    const modifyFieldData = (newFieldData: any) => {
        props.modifyData({
            ...formData,
            [fieldConfig.identifier]: newFieldData,
        });
    };

    const modifyFieldValidation = (valid: boolean) => {
        props.modifyValidation({
            ...formValidation,
            [fieldConfig.identifier]: valid,
        });
    };

    let Component: any;
    switch (fieldConfig.type) {
        case 'email':
            Component = EmailForm;
            break;
        case 'selection':
            Component = SelectionForm;
            break;
        case 'text':
            Component = TextForm;
            break;
    }

    return (
        <div className='w-full overflow-hidden rounded shadow centering-col'>
            <div className='w-full p-4 bg-white dark:bg-gray-700 lg:p-6 centering-col'>
                <h2
                    className={
                        'w-full mb-0.5 text-lg text-left ' +
                        'font-weight-700 md:font-weight-600 ' +
                        'text-black md:text-gray-700 dark:text-white '
                    }
                >
                    {fieldIndex + 1}. {fieldConfig.description}
                </h2>
                <Component
                    fieldConfig={fieldConfig}
                    fieldData={formData[fieldConfig.identifier]}
                    modifyFieldData={modifyFieldData}
                    modifyFieldValidation={modifyFieldValidation}
                />
            </div>
            <div
                className={
                    'w-full px-3 text-justify flex-row-left space-x-2 ' +
                    'border-t-2 h-12 md:h-10 rounded-b ' +
                    'bg-gray-50 border-gray-200 ' +
                    'dark:bg-gray-800 dark:border-gray-600 ' +
                    (formValidation[fieldConfig.identifier]
                        ? 'text-green-900 dark:text-green-50 '
                        : 'text-red-900 dark:text-red-50 ')
                }
            >
                <div
                    className={
                        'flex-shrink-0 w-5 h-5 ' +
                        (formValidation[fieldConfig.identifier]
                            ? 'icon-dark-green '
                            : 'icon-dark-red ')
                    }
                >
                    {formValidation[fieldConfig.identifier]
                        ? icons.check
                        : icons.error}
                </div>
                <div className='text-base text-left md:text-sm font-weight-600'>
                    {formUtils.getFieldValidationMessage(
                        fieldConfig,
                        formData[fieldConfig.identifier],
                    )}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formData: state.formData,
    formValidation: state.formValidation,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: reduxUtils.dispatchers.modifyData(dispatch),
    modifyValidation: reduxUtils.dispatchers.modifyValidation(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SurveyFieldComponent);
