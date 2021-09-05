import React from 'react';
import {types} from '@types';
import {icons} from '@assets/icons/index';

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
            <div className='w-full mb-1 text-lg text-left text-gray-700 font-weight-700'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            <button
                className={
                    'w-full mt-1 space-x-2 flex-row-left no-selection ' +
                    'focus:outline-none ring ring-transparent focus:ring-blue-300 rounded'
                }
                onClick={toggle}
            >
                <div className={'flex-shrink-0 w-8 h-8 p-1 cursor-pointer'}>
                    {fieldData ? icons.checkboxFilled : icons.checkboxEmpty}
                </div>
                <div className='w-full text-sm leading-tight text-justify text-gray-900 markdown font-weight-500 flex-row-left'>
                    {fieldConfig.description.replace(' ', '').length === 0
                        ? 'Yes'
                        : fieldConfig.description}
                </div>
            </button>
        </>
    );
}

export default OptionForm;
