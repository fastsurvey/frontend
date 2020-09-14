
import React from 'react';

interface NavigationButtonProps {
    isFirst: boolean;
    isLast: boolean;
    onPrev(): void;
    onNext(): void;
}

function NavigationButtons(props: NavigationButtonProps) {

    const commonClass=
        'no-selection inline-block text-lg ' +
        'h-10 px-6 py-1 leading-8 font-weight-600 ' +
        'transition transition-colors duration-100 ' +
        'border-solid border-gray-300 ';

    const activeClass = 'bg-gray-100 text-gray-900 cursor-pointer';
    const disabledClass = 'bg-gray-300 text-gray-500 cursor-default';

    return (
        <div className='relative inline-block shadow rounded flex-none h-10'>
            <div
                className={
                    commonClass + 'rounded-l border-r ' +
                    (!props.isFirst ? activeClass : disabledClass)
                }
                onClick={!props.isFirst ? props.onPrev : () => {}}
            >
                Previous
            </div>
            <div
                className={
                    commonClass + 'border-l rounded-r ' +
                    (!props.isLast ? activeClass : disabledClass)
                }
                onClick={!props.isLast ? props.onNext : () => {}}
            >
                Next
            </div>
        </div>

    );
}

export default NavigationButtons;
