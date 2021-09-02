import React from 'react';
import {icons} from '../../assets/icons/index';

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
            colorClasses = 'bg-green-100 text-green-700 ring-green-200 ';
            break;
        case 'finished':
        default:
            colorClasses = 'bg-gray-200 text-gray-600 ring-gray-200 ';
            break;
    }
    return (
        <div
            className={
                'rounded px-3 py-0.5 font-weight-600 text-sm shadow ' +
                colorClasses +
                ' flex-row-center'
            }
        >
            {props.phrase}
        </div>
    );
}

export default VisualTimePill;
