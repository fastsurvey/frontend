import React from 'react';
import {types} from 'types';

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
            <div className='w-full mb-2 text-xl text-left text-grey-800 rubik font-weight-600'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.length > 0 && (
                <div className='w-full mb-4 text-base text-justify text-grey-500 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            <textarea
                value={fieldData}
                onChange={handleChange}
                className={
                    'w-full px-3 py-2 mt-2 rounded font-weight-400 ' +
                    'bg-grey-050 focus:bg-grey-050 ' +
                    'text-grey-700 focus:text-grey-900 ' +
                    'outline-none ring ring-transparent focus:ring-blue-300 ' +
                    'transition-colors duration-100 leading-6'
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
