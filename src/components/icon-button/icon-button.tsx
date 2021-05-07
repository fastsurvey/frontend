import React from 'react';

function IconButton(props: {text: string; icon: React.ReactNode}) {
    return (
        <div
            className={
                'h-10 rounded pl-2 pr-4 ' +
                'centering-row cursor-pointer bg-blue-050 hover:bg-blue-100'
            }
        >
            <div className='w-8 h-8 p-1 mr-1 icon-blue opacity-80'>
                {props.icon}
            </div>
            <div className='text-base text-blue-900 font-weight-500'>
                {props.text}
            </div>
        </div>
    );
}

export default IconButton;
