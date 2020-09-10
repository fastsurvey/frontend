
import React from 'react';

interface ButtonProps {
    text: string;
}

function Button(props: ButtonProps) {
    return (
        <div className='relative inline-block rounded cursor-pointer shadow h-10 px-6 py-1 leading-8 bg-red-500 text-white text-lg font-weight-600'>
            {props.text}
        </div>
    );
}

export default Button;
