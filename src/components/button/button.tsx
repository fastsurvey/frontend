import React from 'react';

function Button(props: {text: string}) {
    return (
        <div
            className={
                'h-10 rounded leading-10 px-6 shadow-md ' +
                'text-lg text-blue-100 bg-blue-900 font-weight-600'
            }
        >
            {props.text}
        </div>
    );
}

export default Button;
