import {icons} from 'assets/icons';
import React from 'react';
import {types} from 'types';
import OptionForm from './field-form/option-form';
import {formUtils} from 'utilities';

function SurveyField(props: {
    fieldConfig: types.SurveyField;
    fieldIndex: number;
    formData: types.FormData;
    formValidation: types.FormValidation;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {
        fieldConfig,
        fieldIndex,
        formData,
        formValidation,
        modifyFieldData,
        modifyFieldValidation,
    } = props;

    return (
        <div className='w-full overflow-hidden rounded shadow-md centering-col'>
            <div className='w-full p-6 bg-white centering-col'>
                {fieldConfig.type === 'option' && (
                    <OptionForm
                        {...{
                            fieldConfig,
                            fieldIndex,
                            formData,
                            modifyFieldData,
                            modifyFieldValidation,
                        }}
                    />
                )}
            </div>
            <div
                className={
                    'w-full p-3 pr-6 text-justify flex-row-top space-x-2 ' +
                    (formValidation[fieldIndex + 1]
                        ? 'text-green-600 bg-green-100 '
                        : 'text-red-600 bg-red-100')
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

export default SurveyField;
