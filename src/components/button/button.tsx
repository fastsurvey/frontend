import React from 'react';
import {Link} from 'react-router-dom';

export default function Button(props: {
    text: string;
    icon?: React.ReactNode;
    onClick?(): void;
    variant?: 'flat-light-blue' | 'light-on-dark' | 'dark-on-dark';
    disabled?: boolean;
    to?: string;
    loading?: boolean;
}) {
    const {text, icon, onClick, variant, disabled, to, loading} = props;

    let variantClasses: string;
    let loadingClasses: string = '';
    switch (variant) {
        case 'flat-light-blue':
            variantClasses = disabled
                ? 'bg-gray-200 text-gray-400 icon-gray cursor-not-allowed '
                : 'bg-blue-50 text-blue-900 icon-dark-blue ringable';
            loadingClasses = 'bg-blue-100 text-blue-900 icon-dark-blue';
            break;
        case 'light-on-dark':
            variantClasses =
                'bg-gray-200 hover:bg-white shadow text-gray-800 hover:text-gray-900 icon-blue ringable';
            // loadingClasses not used yet
            break;
        case 'dark-on-dark':
            variantClasses =
                'hover:bg-gray-700 text-gray-200 hover:text-white icon-blue ringable';
            // loadingClasses not used yet
            break;
        default:
            variantClasses =
                'bg-white hover:bg-gray-100 shadow text-gray-900 icon-blue ringable';
            loadingClasses = 'bg-gray-50 shadow text-blue-900 icon-blue';
            break;
    }

    function Linker(props: {children: React.ReactNode}) {
        const classNames =
            'p-0.5 rounded flex-row-center ' +
            'text-lg md:text-sm h-10 sm:h-8 md:h-7' +
            'no-selection ringable relative overflow-hidden ' +
            variantClasses;
        if (to !== undefined) {
            return (
                <Link to={to} className={classNames}>
                    {props.children}
                </Link>
            );
        } else {
            return (
                <button
                    className={classNames}
                    onClick={onClick && !disabled ? onClick : () => {}}
                    disabled={disabled || loading ? disabled || loading : false}
                >
                    {props.children}
                </button>
            );
        }
    }
    return (
        <Linker>
            {icon && <div className='p-1 -mr-1.5 w-7 h-7 z-0'>{icon}</div>}
            {loading && (
                <div
                    className={
                        'flex-row-center space-x-0.5 font-weight-600 ' +
                        'absolute top-0 left-0 w-full h-full ' +
                        'backdrop-filter backdrop-blur-[2.5px] z-10 ' +
                        loadingClasses
                    }
                >
                    ...
                </div>
            )}
            <div className={'font-weight-600 px-5 sm:px-4 md:px-2.5 z-0'}>
                {text}
            </div>
        </Linker>
    );
}
