import React from 'react';

function Button(props: {text: string; notAllowed?: boolean}) {
    return (
        <div
            className={
                'h-10 rounded leading-10 px-6 shadow-md ' +
                'text-md font-weight-500 tracking-wide ' +
                (props.notAllowed
                    ? 'cursor-not-allowed text-grey-050 bg-grey-600 '
                    : 'cursor-pointer text-blue-050 bg-blue-900')
            }
        >
            {props.text}
        </div>
    );
}

export default Button;
