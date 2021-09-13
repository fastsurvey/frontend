import React from 'react';
import {types} from '@types';

function TextForm(props: {
    fieldConfig: types.TextField;
    fieldIndex: number;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, fieldData} = props;

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
            <div className='w-full mb-0.5 text-lg text-left text-black md:text-gray-700 font-weight-700'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.replace(' ', '').length > 0 && (
                <div className='w-full mt-0.5 mb-2 text-sm leading-tight text-justify text-gray-700 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            <textarea
                value={fieldData}
                onChange={handleChange}
                className={
                    'w-full px-3 py-2 mt-2 rounded font-weight-600 ' +
                    'bg-gray-100 focus:bg-gray-50 text-base md:text-sm ' +
                    'text-gray-700 focus:text-gray-900 placeholder-gray-400 ' +
                    'outline-none ring ring-transparent focus:ring-blue-200 ' +
                    'transition-colors duration-100 leading-7 md:leading-6'
                }
                style={{minHeight: '5rem'}}
                onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === 'Escape') {
                        // @ts-ignore
                        e.target.blur();
                    }
                }}
                placeholder='Type here ...'
                rows={3}
            />
        </>
    );
}

export default TextForm;
