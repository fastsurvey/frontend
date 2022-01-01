import React from 'react';
import '/src/styles/markdown.css';

function VisualUserTextCard(props: {title: string; text?: string}) {
    return (
        <div className='w-full px-4 py-3 bg-white rounded shadow dark:bg-gray-800 lg:px-6 lg:py-4 centering-col'>
            <div className='text-2xl text-gray-800 dark:text-gray-200 md:text-xl font-weight-700 md:font-weight-600'>
                {props.title}
            </div>
            {props.text && props.text.replace(/\s*/, '').length > 0 && (
                <div
                    className='w-full mt-3 text-base text-gray-800 dark:text-gray-200 markdown font-weight-500'
                    dangerouslySetInnerHTML={{
                        __html: ''.concat(
                            ...props.text
                                .replace(/<[^>]*>/g, '')
                                .split('\n\n')
                                .map(
                                    (s) => `<p>${s.replace('\n', '<br/>')}</p>`,
                                ),
                        ),
                    }}
                />
            )}
        </div>
    );
}

export default VisualUserTextCard;
