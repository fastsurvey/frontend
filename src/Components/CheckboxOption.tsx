
import React from 'react';
import assert from 'assert';

interface CheckboxOptionProps {
    label: string;
    checked: any;
    onChange?(newValue: boolean): void;
}

function CheckboxOption(props: CheckboxOptionProps) {

    function handleChange(newValue: boolean) {
        if (props.onChange !== undefined) {
            props.onChange(newValue);
        }
    }

    // Dynamic type assertion without using typescript because
    // the formData object is being created dynamically
    assert(
        typeof props.checked === 'boolean',
        'param checked has to be of type boolean'
    );

    return (
        <div>
            <input
                type='checkbox'
                checked={props.checked}
                onChange={event => handleChange(event.target.checked)}
            />
            <label>{props.label}</label>
        </div>
    );
}

export default CheckboxOption;
