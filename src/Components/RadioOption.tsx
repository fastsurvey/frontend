
import React from 'react';
import assert from 'assert';
import RadioIconUnchecked from '../assets/icons/radio_button_unchecked-24px.svg';
import RadioIconChecked from '../assets/icons/radio_button_checked-24px.svg';


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
        <div className='mb-2 flex flex-row justify-start items-center'>
            <img
                className='inline h-8 p-1 mr-1 cursor-pointer'
                src={props.checked ? RadioIconChecked : RadioIconUnchecked}
                onClick={() => handleChange(!props.checked)}
                alt='Radio-Selection Icon'
            />
            <label
                className='font-weight-500 text-lg'
            >
                {props.label}
            </label>
        </div>
    );
}

export default RadioOption;
