import React from 'react';
import '@styles/markdown.css';

// TODO: Replace links in text as well (starting with https:// or www.)

function VisualTextCard(props: {title: string; children: React.ReactNode}) {
    return (
        <div className='w-full px-4 py-4 bg-white rounded shadow dark:bg-gray-800 md:py-2 lg:px-6 lg:py-4 centering-col'>
            <div className='text-2xl text-gray-800 dark:text-gray-200 md:text-xl font-weight-700 md:font-weight-600'>
                {props.title}
            </div>
            <div className='w-full mt-1.5 text-base text-gray-800 dark:text-gray-200 md:text-sm lg:mt-3 markdown font-weight-500'>
                {props.children}
            </div>
        </div>
    );
}

export default VisualTextCard;
