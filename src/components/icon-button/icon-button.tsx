import React from 'react';

export default function IconButton(props: {
    text: string;
    icon?: React.ReactNode;
    onClick?(): void;
    variant?: 'flat-light-blue' | 'light-on-dark' | 'dark-on-dark';
    disabled?: boolean;
}) {
    const {text, icon, onClick, variant, disabled} = props;

    let variantClasses: string;
    switch (variant) {
        case 'flat-light-blue':
            variantClasses = disabled
                ? 'bg-gray-200 text-gray-400 icon-gray cursor-not-allowed '
                : 'bg-blue-50 text-blue-900 icon-dark-blue ringable';
            break;
        case 'light-on-dark':
            variantClasses =
                'bg-gray-200 hover:bg-white shadow text-gray-800 hover:text-gray-900 icon-blue ringable';
            break;
        case 'dark-on-dark':
            variantClasses =
                'hover:bg-gray-700 text-gray-200 hover:text-white icon-blue ringable';
            break;
        default:
            variantClasses =
                'bg-white hover:bg-gray-100 shadow text-gray-900 icon-light-blue ringable';
            break;
    }

    return (
        <button
            className={
                'p-0.5 rounded centering-row h-8 ' +
                'no-selection ' +
                variantClasses
            }
            onClick={onClick && !disabled ? onClick : () => {}}
            disabled={disabled === true || !onClick}
        >
            {icon && <div className='p-1 -mr-1.5 w-7 h-7'>{icon}</div>}
            <div className={'font-weight-600 px-2 text-sm'}>{text}</div>
        </button>
    );
}
