import React from 'react';
import '@styles/markdown.css';

// TODO: Replace links in text as well (starting with https:// or www.)

function VisualTextCard(props: {title: string; children: React.ReactNode}) {
    return (
        <div className='w-full px-4 py-2 bg-white rounded shadow lg:px-6 lg:py-4 centering-col'>
            <div className='text-xl text-blue-800 font-weight-700'>
                {props.title}
            </div>
            <div className='w-full mt-1 text-sm text-gray-800 lg:mt-3 markdown font-weight-500'>
                {props.children}
            </div>
        </div>
    );
}

export default VisualTextCard;
