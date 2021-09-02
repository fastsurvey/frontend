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

    const modifyFieldData = (index: number) => (newFieldData: any) => {
        props.modifyData({
            ...formData,
            [index]: newFieldData,
        });
    };

    const modifyFieldValidation = (index: number) => (valid: boolean) => {
        props.modifyValidation({
            ...formValidation,
            [index]: valid,
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
            <div className='w-full p-4 bg-white lg:p-6 centering-col'>
                <Component
                    fieldIndex={fieldIndex}
                    fieldConfig={fieldConfig}
                    fieldData={formData[fieldIndex]}
                    modifyFieldData={modifyFieldData(fieldIndex)}
                    modifyFieldValidation={modifyFieldValidation(fieldIndex)}
                />
            </div>
            <div
                className={
                    'w-full px-3 text-justify flex-row-left space-x-2 ' +
                    'border-t-2 h-10 rounded-b bg-gray-50 border-gray-200 ' +
                    (formValidation[fieldIndex]
                        ? 'text-green-900 '
                        : 'text-red-900 ')
                }
            >
                <div
                    className={
                        'flex-shrink-0 w-5 h-5 ' +
                        (formValidation[fieldIndex]
                            ? 'icon-dark-green '
                            : 'icon-dark-red ')
                    }
                >
                    {formValidation[fieldIndex] ? icons.check : icons.error}
                </div>
                <div className='text-sm text-left font-weight-600'>
                    {formUtils.getFieldValidationMessage(
                        fieldConfig,
                        formData[fieldIndex],
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
