import React from 'react';
import 'styles/markdown.css';

// TODO: Replace links in text as well (starting with https:// or www.)

function VisualTextCard(props: {title: string; children: React.ReactNode}) {
    return (
        <div className='w-full p-6 bg-white rounded shadow-md centering-col'>
            <div className='text-2xl text-black font-weight-600'>
                {props.title}
            </div>
            <div className='w-full mt-3 text-grey-900 markdown font-weight-500'>
                {props.children}
            </div>
        </div>
    );
}

export default VisualTextCard;
