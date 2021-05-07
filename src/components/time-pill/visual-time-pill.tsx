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
            colorClasses = 'bg-green-100 text-green-800 ';
            break;
        case 'finished':
            colorClasses = 'bg-grey-400 text-grey-900 ';
            break;
    }
    return (
        <div
            className={
                'rounded-full px-3 py-1 font-weight-500 text-sm shadow-md ' +
                colorClasses
            }
        >
            {props.phrase}
        </div>
    );
}

export default VisualTimePill;
