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
            <div className='w-full mb-2 text-xl text-left text-grey-900 font-weight-700'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.length > 0 && (
                <div className='w-full mb-4 text-base text-justify text-grey-500 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            <input
                value={fieldData}
                onChange={handleChange}
                className={
                    'w-full mt-2 px-3 py-2 rounded font-weight-500 ' +
                    'bg-grey-050 focus:bg-grey-050 ' +
                    'text-grey-700 focus:text-grey-900 placeholder-grey-400 ' +
                    'outline-none ring ring-transparent focus:ring-blue-300 ' +
                    'transition-colors duration-100 leading-6'
                }
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Escape') {
                        // @ts-ignore
                        e.target.blur();
                    }
                }}
                placeholder='Type here ...'
            />
        </>
    );
}

export default EmailForm;
