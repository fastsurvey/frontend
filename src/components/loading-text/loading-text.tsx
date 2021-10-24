import React from 'react';
import {icons} from '/src/assets/icons';

function LoadingText() {
    return (
        <div
            className={
                'centering-row font-weight-600 text-sm text-gray-900 dark:text-gray-100 animate-pulse'
            }
        >
            <div className='w-5 h-5 mr-2 icon-dark-blue dark:hidden'>
                {icons.download}
            </div>
            <div className='hidden w-5 h-5 mr-2 icon-blue dark:block'>
                {icons.download}
            </div>
            <div>Fetching Survey</div>
        </div>
    );
}

export default LoadingText;
