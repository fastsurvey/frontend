
import React from 'react';

interface SubmitButtonProps {
    clickable: boolean;
    onClick(): void;
}

function SubmitButton(props: SubmitButtonProps) {

    const commonClass=
        'no-selection inline-block text-lg rounded shadow ' +
        'h-10 px-6 py-1 leading-8 font-weight-600 ' +
        'transition transition-colors duration-100 ' +
        'border-solid border-gray-300 flex-none ';

    const activeClass = 'bg-gray-100 text-gray-900 cursor-pointer';
    const disabledClass = 'bg-gray-300 text-gray-500 cursor-default';

    return (
        <div
            className={
                commonClass +
                (props.clickable ? activeClass : disabledClass)
            }
            onClick={props.clickable ? props.onClick : () => {}}
        >
            Submit
        </div>

    );
}

export default SubmitButton;
