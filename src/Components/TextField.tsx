
import React from 'react';
import assert from 'assert';

interface TextFieldProps {
    label?: string;
    value: any;
    onChange?(newValue: string): void;
}

function TextField(props: TextFieldProps) {

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
                <label>{props.label}</label>
            )}
            <input
                value={props.value}
                onChange={event => handleChange(event.target.value)}
            />
        </div>
    );
}

export default TextField;
