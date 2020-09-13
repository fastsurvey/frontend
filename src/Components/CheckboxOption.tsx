
import React from 'react';
import assert from 'assert';
import CheckboxIconUnchecked from '../assets/icons/check_box_outline_blank-24px.svg';
import CheckboxIconChecked from '../assets/icons/check_box-24px.svg';


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
        <div className='mb-2 flex flex-row justify-start items-center'>
            <img
                className='inline h-8 p-1 mr-1 cursor-pointer'
                src={props.checked ? CheckboxIconChecked : CheckboxIconUnchecked}
                onClick={() => handleChange(!props.checked)}
                alt='Checkbox Icon'
            />
            <label
                className='font-weight-500 text-lg'
            >
                {props.label}
            </label>
        </div>
    );
}

export default CheckboxOption;
