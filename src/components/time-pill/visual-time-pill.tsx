import React from 'react';

function VisualTimePill(props: {
    variant: 'pending' | 'running' | 'finished';
    phrase: string;
}) {
    let colorClasses: string;
    switch (props.variant) {
        case 'pending':
            colorClasses = 'bg-yellow-100 text-yellow-800 ring-yellow-200 ';
            break;
        case 'running':
            colorClasses = 'bg-green-100 text-green-800 ring-green-200 ';
            break;
        case 'finished':
        default:
            colorClasses = 'bg-gray-200 text-gray-600 ring-gray-200 ';
            break;
    }
    return (
        <div
            className={
                'rounded px-3 py-0.5 shadow flex-row-center ' +
                colorClasses +
                'text-sm font-weight-700 ' +
                'md:text-sm md:font-weight-600'
            }
        >
            {props.phrase}
        </div>
    );
}

export default VisualTimePill;
