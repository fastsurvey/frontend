import React from 'react';
import 'styles/markdown.css';

// TODO: Replace links in text as well (starting with https:// or www.)

function VisualTextCard(props: {title: string; text: string}) {
    return (
        <div className='w-full p-6 bg-white rounded shadow centering-col'>
            <div className='text-2xl text-black font-weight-600'>
                {props.title}
            </div>
            {props.text.replace(/\s*/, '').length > 0 && (
                <div
                    className='mt-3 text-base text-gray-900 opacity-70 markdown font-weight-500'
                    dangerouslySetInnerHTML={{
                        __html: ''.concat(
                            ...props.text
                                .replaceAll(/<[^>]*>/g, '')
                                .split('\n')
                                .map((s) => `<p>${s}</p>`),
                        ),
                    }}
                />
            )}
        </div>
    );
}

export default VisualTextCard;
