import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

const MarkdownContent = (props: {content: string; className?: string}) => (
    <div
        className={
            'h-full w-full overflow-y-scroll prose-sm prose-slate px-4 py-4 z-0 ' +
            'text-gray-800 prose-headings:text-black ' +
            'dark:text-gray-200 dark:prose-headings:text-white ' +
            'prose-headings:font-weight-700 prose-headings:mb-2 prose-headings:mt-0 ' +
            'prose-h1:text-2xl ' +
            'prose-h2:text-xl ' +
            'prose-h3:text-lg ' +
            'prose-h4:text-base ' +
            'prose-a:underline prose-a:font-weight-600 ' +
            'prose-a:text-blue-800 dark:prose-a:text-blue-200 ' +
            'prose-p:mb-4 prose-hr:mt-4 prose-hr:mb-6 prose-hr:border-gray-300 ' +
            'prose-p:text-base prose-p:font-weight-500 ' +
            'prose-table:border-collapse ' +
            'prose-th:border prose-th:mb-0 prose-td:border ' +
            'prose-th:border-gray-300 prose-td:border-gray-300 ' +
            'dark:prose-th:border-gray-600 dark:prose-td:border-gray-600 ' +
            'prose-th:bg-gray-200 prose-th:text-gray-900 ' +
            'dark:prose-th:bg-gray-800 dark:prose-th:text-white ' +
            'prose-td:font-weight-500 ' +
            'even:prose-tr:bg-gray-100 odd:prose-tr:bg-white ' +
            'even:dark:prose-tr:bg-gray-800 odd:dark:prose-tr:bg-gray-700 ' +
            'even:prose-tr:text-gray-700 odd:prose-tr:text-gray-600 ' +
            'even:dark:prose-tr:text-gray-300 odd:dark:prose-tr:text-gray-200 ' +
            'hover:prose-tr:bg-blue-50  hover:prose-tr:text-blue-900 ' +
            'hover:dark:prose-tr:bg-blue-900 hover:dark:prose-tr:bg-opacity-50 hover:dark:prose-tr:text-blue-100 ' +
            'prose-th:!px-2 prose-td:!px-2 prose-th:!py-1 prose-td:!py-1 ' +
            'prose-ul:list-disc prose-ol:list-decimal prose-ol:list-inside prose-ul:list-inside ' +
            'prose-ul:-mt-3 prose-ol:-mt-3 prose-li:-mt-1 ' +
            'prose-ol:pl-1 prose-ul:pl-1 ' +
            ' marker:prose-ol:font-weight-700 ' +
            'marker:prose-ul:text-gray-800 marker:prose-ol:text-gray-800 ' +
            'dark:marker:prose-ol:text-gray-200 dark:marker:prose-ul:text-gray-200 ' +
            (props.className || '')
        }
    >
        <ReactMarkdown
            children={props.content}
            remarkPlugins={[remarkGfm, remarkMath]}
            components={{
                a: ({node, ...props}) => (
                    <a
                        {...props}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline text-left underline'
                    >
                        {props.children}
                    </a>
                ),
            }}
        />
    </div>
);

export default MarkdownContent;
