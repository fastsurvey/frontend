import {icons} from 'assets/icons';
import React from 'react';
import {types} from 'types';
import OptionForm from './field-form/option-form';
import {formUtils, reduxUtils} from 'utilities';
import RadioForm from './field-form/radio-form';
import SelectionForm from './field-form/selection-form';
import TextForm from './field-form/text-form';
import EmailForm from './field-form/email-form';
import {connect} from 'react-redux';

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
            [index + 1]: newFieldData,
        });
    };

    const modifyFieldValidation = (index: number) => (valid: boolean) => {
        props.modifyValidation({
            ...formValidation,
            [index + 1]: valid,
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
        <div className='w-full overflow-hidden rounded shadow-md centering-col'>
            <div className='w-full p-6 bg-white centering-col'>
                <Component
                    fieldIndex={fieldIndex}
                    fieldConfig={fieldConfig}
                    fieldData={formData[fieldIndex + 1]}
                    modifyFieldData={modifyFieldData(fieldIndex)}
                    modifyFieldValidation={modifyFieldValidation(fieldIndex)}
                />
            </div>
            <div
                className={
                    'w-full p-3 pr-6 text-justify flex-row-top space-x-2 ' +
                    'border-t-[3px] ' +
                    (formValidation[fieldIndex + 1]
                        ? 'text-green-500 bg-green-050 border-green-100 '
                        : 'text-red-400 bg-red-050 border-red-100 ')
                }
            >
                <div
                    className={
                        'flex-shrink-0 w-6 h-6 ' +
                        (formValidation[fieldIndex + 1]
                            ? 'icon-green '
                            : 'icon-red ')
                    }
                >
                    {formValidation[fieldIndex + 1] ? icons.check : icons.close}
                </div>
                <div className='text-left flex-max font-weight-600 text-md'>
                    {formUtils.getFieldValidationMessage(
                        fieldConfig,
                        formData[fieldIndex + 1],
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
