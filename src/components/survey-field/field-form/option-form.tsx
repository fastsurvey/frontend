import React from 'react';
import {types} from '/src/types';
import {icons} from '/src/assets/icons/index';

function OptionForm(props: {
    fieldConfig: types.OptionField;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldData} = props;

    function toggle() {
        props.modifyFieldData(!fieldData);
        props.modifyFieldValidation(!fieldData || !fieldConfig.required);
    }

    return (
        <>
            <button
                className={
                    'w-full space-x-2 flex-row-left no-selection ' +
                    'mt-0 py-2 md:mt-1 md:py-0 ' +
                    'focus:outline-none ring ring-transparent focus:ring-blue-300 rounded'
                }
                onClick={toggle}
            >
                <div className={'flex-shrink-0 w-8 h-8 p-1 cursor-pointer'}>
                    {fieldData ? icons.checkboxFilled : icons.checkboxEmpty}
                </div>
                <div
                    className={
                        'w-full text-base leading-tight text-justify md:text-sm markdown font-weight-500 flex-row-left ' +
                        'text-gray-900 dark:text-gray-100'
                    }
                >
                    {fieldConfig.description.replace(' ', '').length === 0
                        ? 'Yes'
                        : fieldConfig.description}
                </div>
            </button>
        </>
    );
}

export default OptionForm;
