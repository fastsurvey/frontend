
import React from 'react';
import assert from 'assert';

interface TextInputProps {
    label?: string;
    value: any;
    onChange?(newValue: string): void;
    placeholder?: string;
}

function TextInput(props: TextInputProps) {

    function handleChange(newValue: string) {
        if (props.onChange !== undefined) {
            props.onChange(newValue);
        }
    }

    // Dynamic type assertion without using typescript because
    // the formData object is being created dynamically
    assert(
        typeof props.value === 'string',
        'param value has to be of type string'
    );

    return (
        <div>
            {props.label !== undefined && (
                <label
                    className='text-gray-800 text-lg font-weight-500 mr-4'
                >
                    {props.label}
                </label>
            )}
            <input
                className={
                    'font-weight-500 text-lg w-full ' +
                    'shadow border-0 rounded h-12 ' +
                    'py-2 px-3 ' +
                    'focus:outline-none focus:shadow-outline'
                }
                placeholder={props.placeholder !== undefined ? props.placeholder : ''}
                value={props.value}
                onChange={event => handleChange(event.target.value)}
            />
        </div>
    );
}

export default TextInput;
