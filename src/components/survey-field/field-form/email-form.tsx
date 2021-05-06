import React from 'react';
import {types} from 'types';

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
            <div className='w-full mb-2 text-xl text-left text-gray-900 font-weight-600'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.length > 0 && (
                <div className='w-full mb-4 text-base text-justify text-gray-500 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            <input
                value={fieldData}
                onChange={handleChange}
                className={
                    'w-full mt-2 px-3 py-2 rounded font-weight-500 ' +
                    'bg-grey-050 focus:bg-grey-050 ' +
                    'text-gray-700 focus:text-gray-900 ' +
                    'outline-none ring ring-grey-100 focus:ring-blue-300 ' +
                    'transition-colors duration-100 leading-6'
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Escape') {
                        // @ts-ignore
                        e.target.blur();
                    }
                }}
                placeholder='Your answer here ...'
            />
        </>
    );
}

export default EmailForm;
