import React from 'react';
import {icons} from '../../assets/icons';

function LoadingText() {
    return (
        <div
            className={
                'centering-row font-weight-400 text-lg text-grey-600 animate-pulse'
            }
        >
            <div className='w-8 h-8 mr-2 icon-grey'>{icons.download}</div>
            <div>Fetching Survey</div>
        </div>
    );
}

export default LoadingText;
