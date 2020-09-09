
import React from 'react';
import assert from 'assert';

interface RadioOptionProps {
    radioGroupId: string | number;
    label: string;
    checked: any;
    onChange?(newValue: boolean): void;
}

function RadioOption(props: RadioOptionProps) {

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
                type='radio'
                checked={props.checked}
                name={'RadioGroup-' + props.radioGroupId.toString()}
                onChange={event => handleChange(event.target.checked)}
            />
            <label>{props.label}</label>
        </div>
    );
}

export default RadioOption;
