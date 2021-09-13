import React from 'react';
import {icons} from '@assets/icons';

function LoadingText() {
    return (
        <div
            className={
                'centering-row font-weight-600 text-sm text-grey-900 animate-pulse'
            }
        >
            <div className='w-5 h-5 mr-2 icon-light-blue'>{icons.download}</div>
            <div>Fetching Survey</div>
        </div>
    );
}

export default LoadingText;
