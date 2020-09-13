
import React from 'react';

interface ButtonProps {
    text: string;
    onClick?(): void;
    className?: string;
}

function Button(props: ButtonProps) {
    const className = ((props.className === undefined) ? '' : props.className);

    return (
        <div
            className={
                'no-selection relative inline-block rounded ' +
                'cursor-pointer shadow h-10 px-6 py-1 leading-8 ' +
                'bg-red-500 text-white text-lg font-weight-600 ' +
                className
            }
            onClick={(props.onClick !== undefined) ? props.onClick : () => {}}
        >
            {props.text}
        </div>
    );
}

export default Button;
