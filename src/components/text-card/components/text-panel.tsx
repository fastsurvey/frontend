import React from 'react';

function TextPanel(props: {
    title: string;
    content?: any;
    appendix?: any;
    appendixIcon?: any;
}) {
    return (
        <div
            className={
                'overflow-hidden rounded shadow-sm ' +
                'bg-white dark:bg-gray-700 ' +
                (props.appendix === undefined ? 'pb-4 ' : ' ')
            }
        >
            <h1
                className={
                    'text-2xl font-weight-700 ' +
                    'text-gray-700 dark:text-gray-100 ' +
                    'w-full text-center px-4 pt-4'
                }
            >
                {props.title}
            </h1>
            {props.content !== undefined && (
                <div className='w-full px-4 mt-2 text-base text-gray-800 dark:text-gray-200 md:text-sm lg:mt-3 markdown font-weight-500'>
                    {props.content}
                </div>
            )}

            {props.appendix !== undefined && (
                <div
                    className={
                        'w-full p-3 pr-4 lg:pr-6 mt-4 ' +
                        'bg-gray-75 text-gray-800 border-t ' +
                        'border-gray-300 dark:border-gray-500 ' +
                        'dark:bg-gray-800 dark:text-gray-300'
                    }
                >
                    <div
                        className={
                            'w-full text-justify flex-row-top space-x-2 '
                        }
                    >
                        {props.appendixIcon !== undefined && (
                            <div className='flex-shrink-0 w-6 h-6 mr-0.5 md:mr-0 md:w-5 md:h-5 svg-info-card'>
                                {props.appendixIcon}
                            </div>
                        )}
                        <div className='flex-grow text-base md:text-sm font-weight-500'>
                            {props.appendix}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TextPanel;
