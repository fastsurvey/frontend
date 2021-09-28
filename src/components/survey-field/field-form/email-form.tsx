import React from 'react';
import {types} from '@types';

function EmailForm(props: {
    fieldConfig: types.EmailField;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldData} = props;

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;

        props.modifyFieldData(newValue);
        props.modifyFieldValidation(
            new RegExp('^' + fieldConfig.regex + '$').test(newValue),
        );
    }

    return (
        <>
            <input
                value={fieldData}
                onChange={handleChange}
                className={
                    'w-full mt-2 px-3 py-2 rounded font-weight-600 ringable' +
                    ' text-base md:text-sm ' +
                    'bg-gray-100 focus:bg-gray-50 text-gray-700 focus:text-gray-900 placeholder-gray-400 ' +
                    'dark:bg-gray-800 dark:focus:bg-gray-900 dark:text-gray-200 dark:focus:text-gray-100 dark:placeholder-gray-400 ' +
                    'transition-colors duration-100 leading-7 md:leading-6'
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Escape') {
                        // @ts-ignore
                        e.target.blur();
                    }
                }}
                placeholder='type here ...'
            />
        </>
    );
}

export default EmailForm;
