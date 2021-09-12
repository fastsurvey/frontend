import React from 'react';
import {types} from '@types';

function EmailForm(props: {
    fieldConfig: types.EmailField;
    fieldData: any;
    fieldIndex: number;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldData, fieldIndex} = props;

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const newValue = event.target.value;

        props.modifyFieldData(newValue);
        props.modifyFieldValidation(
            new RegExp('^' + fieldConfig.regex + '$').test(newValue),
        );
    }

    return (
        <>
            <div className='w-full mb-1 text-lg text-left text-black md:text-gray-700 font-weight-700'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.replace(' ', '').length > 0 && (
                <div className='w-full mt-0.5 mb-2 text-sm leading-tight text-justify text-gray-700 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            <input
                value={fieldData}
                onChange={handleChange}
                className={
                    'w-full mt-2 px-3 py-2 rounded font-weight-600 ' +
                    'bg-gray-100 focus:bg-gray-50 text-base md:text-sm ' +
                    'text-gray-700 focus:text-gray-900 placeholder-gray-400 ' +
                    'outline-none ring ring-transparent focus:ring-blue-200 ' +
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
