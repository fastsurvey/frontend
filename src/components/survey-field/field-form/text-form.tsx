import React from 'react';
import {types} from 'types';

function TextForm(props: {
    fieldConfig: types.TextField;
    fieldIndex: number;
    formData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, formData} = props;

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
            <div className='w-full mb-4 text-2xl text-left text-black font-weight-600'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            <textarea
                value={formData[fieldIndex + 1]}
                onChange={handleChange}
                className={
                    'w-full px-3 py-2 rounded font-weight-500 ' +
                    'bg-grey-050 focus:bg-grey-050 ' +
                    'text-gray-700 focus:text-gray-900 ' +
                    'outline-none ring ring-grey-100 focus:ring-blue-300 ' +
                    'transition-colors duration-100 leading-6'
                }
                style={{minHeight: '5rem'}}
                onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                    if (e.key === 'Escape') {
                        // @ts-ignore
                        e.target.blur();
                    }
                }}
                placeholder='Your answer here ...'
                rows={3}
            />
        </>
    );
}

export default TextForm;
