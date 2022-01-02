import React from 'react';
import {types} from '/src/types';

function TextForm(props: {
    fieldConfig: types.TextField;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldData} = props;

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const newValue = event.target.value;

        props.modifyFieldData(newValue);
        props.modifyFieldValidation(
            newValue.length >= fieldConfig.min_chars &&
                newValue.length <= fieldConfig.max_chars,
        );
    }

    return (
        <>
            <textarea
                value={fieldData}
                onChange={handleChange}
                className={
                    'w-full px-3 py-2 mt-2 rounded font-weight-500 ' +
                    'text-base md:text-sm border ringable ' +
                    'text-gray-600 border-gray-150 bg-gray-50 placeholder-gray-500 focus:border-gray-75 focus:text-gray-900 ' +
                    'dark:text-gray-200 dark:border-gray-600 dark:bg-gray-750 dark:placeholder-gray-400 dark:focus:border-blue-200 dark:focus:text-white dark:focus:bg-gray-800 ' +
                    'transition-colors duration-50 ' +
                    'leading-7 md:leading-6 min-h-[2.75rem] md:min-h-[2.5rem]'
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === 'Escape') {
                        // @ts-ignore
                        e.target.blur();
                    }
                }}
                placeholder='Type here ...'
                rows={fieldConfig.max_chars < 256 ? 2 : 4}
            />
        </>
    );
}

export default TextForm;
