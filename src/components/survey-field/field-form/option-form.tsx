import React from 'react';
import {types} from 'types';
import {icons} from 'assets/icons/index';

function OptionForm(props: {
    fieldConfig: types.OptionField;
    fieldIndex: number;
    formData: types.FormData;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, formData} = props;

    function toggle() {
        props.modifyFieldData(!formData[fieldIndex + 1]);
        props.modifyFieldValidation(
            !formData[fieldIndex + 1] || !fieldConfig.required,
        );
    }

    return (
        <>
            <div className='w-full text-2xl text-left text-black font-weight-600'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            <div className='w-full mt-3 space-x-2 flex-row-left no-selection'>
                <div
                    className='flex-shrink-0 w-8 h-8 p-1 cursor-pointer'
                    onClick={toggle}
                >
                    {formData[fieldIndex + 1]
                        ? icons.checkboxFilled
                        : icons.checkboxEmpty}
                </div>
                <div className='w-full text-grey-900 markdown font-weight-500'>
                    {fieldConfig.description}
                </div>
            </div>
        </>
    );
}

export default OptionForm;
