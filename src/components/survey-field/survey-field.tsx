import React from 'react';
import {connect} from 'react-redux';
import {types} from '@types';
import {icons} from '@assets/icons';
import {formUtils, reduxUtils} from '@utilities';

import OptionForm from './field-form/option-form';
import RadioForm from './field-form/radio-form';
import SelectionForm from './field-form/selection-form';
import TextForm from './field-form/text-form';
import EmailForm from './field-form/email-form';

function SurveyField(props: {
    fieldConfig: types.SurveyField;
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
        case 'option':
            Component = OptionForm;
            break;
        case 'radio':
            Component = RadioForm;
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
                <div
                    className={
                        'w-full mb-0.5 text-lg text-left font-weight-700 md:font-weight-600 ' +
                        'text-black md:text-gray-700 dark:text-white '
                    }
                >
                    {fieldIndex + 1}. {fieldConfig.title}
                </div>
                {fieldConfig.type !== 'option' &&
                    fieldConfig.description.replace(' ', '').length > 0 && (
                        <div
                            className={
                                'w-full mt-0.5 mb-2 text-sm leading-tight text-justify ' +
                                'text-gray-700 font-weight-500 dark:text-gray-200 '
                            }
                        >
                            {fieldConfig.description}
                        </div>
                    )}
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
                    'bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-600 ' +
                    (formValidation[fieldConfig.identifier]
                        ? 'text-green-900 dark:text-green-200 '
                        : 'text-red-900 dark:text-red-200 ')
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

export default connect(mapStateToProps, mapDispatchToProps)(SurveyField);
