import React from 'react';

function VisualTimePill(props: {
    variant: 'pending' | 'running' | 'finished';
    phrase: string;
}) {
    let colorClasses: string;
    switch (props.variant) {
        case 'pending':
            colorClasses =
                'bg-yellow-75 dark:bg-yellow-600 text-yellow-600 dark:text-yellow-100 ';
            break;
        case 'running':
            colorClasses =
                'bg-green-75 dark:bg-green-600 text-green-600 dark:text-green-100 ';
            break;
        case 'finished':
            colorClasses =
                'bg-gray-75 dark:bg-gray-600 text-gray-600 dark:text-gray-100 ';
            break;
    }
    return (
        <div
            className={
                'rounded-sm font-weight-600 text-sm no-selection ' +
                colorClasses +
                'shadow-sm px-2.5 py-0.5 '
            }
            data-cy={`time-pill ${props.variant}`}
        >
            {props.phrase}
        </div>
    );
}

export default VisualTimePill;
