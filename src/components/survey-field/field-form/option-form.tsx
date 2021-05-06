import React from 'react';
import {types} from 'types';
import {icons} from 'assets/icons/index';

function OptionForm(props: {
    fieldConfig: types.OptionField;
    fieldIndex: number;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, fieldData} = props;

    function toggle() {
        props.modifyFieldData(!fieldData);
        props.modifyFieldValidation(!fieldData || !fieldConfig.required);
    }

    return (
        <>
            <div className='w-full text-2xl text-left text-black font-weight-600'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            <div className='w-full mt-3 space-x-2 flex-row-left no-selection'>
                <button
                    className={
                        'flex-shrink-0 w-8 h-8 p-1 cursor-pointer ' +
                        'focus:outline-none ring ring-transparent focus:ring-gray-300 rounded'
                    }
                    onClick={toggle}
                >
                    {fieldData ? icons.checkboxFilled : icons.checkboxEmpty}
                </button>
                <div className='w-full text-grey-900 markdown font-weight-500'>
                    {fieldConfig.description}
                </div>
            </div>
        </>
    );
}

export default OptionForm;
