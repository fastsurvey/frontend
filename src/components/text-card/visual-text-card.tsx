import React from 'react';
import '../../styles/markdown.css';

// TODO: Replace links in text as well (starting with https:// or www.)

function VisualTextCard(props: {title: string; children: React.ReactNode}) {
    return (
        <div className='w-full p-4 bg-white rounded shadow-md lg:p-6 centering-col'>
            <div className='text-2xl text-grey-900 rubik font-weight-700'>
                {props.title}
            </div>
            <div className='w-full mt-2 lg:mt-3 text-grey-800 markdown font-weight-400'>
                {props.children}
            </div>
        </div>
    );
}

export default VisualTextCard;
