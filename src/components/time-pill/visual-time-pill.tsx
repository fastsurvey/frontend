import React from 'react';

function VisualTimePill(props: {
    variant: 'pending' | 'running' | 'finished';
    phrase: string;
}) {
    let colorClasses: string;
    switch (props.variant) {
        case 'pending':
            colorClasses = 'bg-yellow-100 text-yellow-800 ';
            break;
        case 'running':
            colorClasses = 'bg-green-100 text-green-700 ';
            break;
        case 'finished':
            colorClasses = 'bg-gray-200 text-gray-600 ';
            break;
    }
    return (
        <div
            className={
                'font-weight-600 text-sm no-selection ' +
                colorClasses +
                'rounded-full px-2.5 py-0.5 '
            }
            data-cy={`time-pill ${props.variant}`}
        >
            {props.phrase}
        </div>
    );
}

export default VisualTimePill;
