import React from 'react';

export default function LandingPageSection(props: {
    leftChild: React.ReactChild;
    rightChild: React.ReactChild;
}) {
    return (
        <div className='w-full border-b-[2px] last:border-b-0 border-gray-700 lg:min-h-[60vh] centering-col'>
            <div
                className={
                    'grid w-full px-4 py-8 md:px-8 md:py-16 ' +
                    'grid-cols-1 gap-x-0 gap-y-8 ' +
                    'lg:gap-y-0 lg:grid-cols-2 lg:gap-x-8 ' +
                    'xl:gap-x-12'
                }
            >
                <div className='w-full ml-auto lg:max-w-lg flex-col-left'>
                    {props.leftChild}
                </div>
                <div className='w-full mr-auto lg:max-w-lg flex-col-left'>
                    {props.rightChild}
                </div>
            </div>
        </div>
    );
}

export function NewLandingPageSection(props: {
    children: React.ReactNode;
    index: number;
}) {
    let borderColor: string;
    switch (props.index) {
        case 0:
            borderColor = 'border-gray-700';
            break;
        case 1:
            borderColor = 'border-gray-700';
            break;
        case 2:
            borderColor = 'border-gray-700';
            break;
        case 3:
            borderColor = 'border-gray-700';
            break;
        case 4:
            borderColor = 'border-gray-700';
            break;
    }
    return (
        <div className='w-full py-12 border-b-2 border-gray-700 flex-col-center'>
            {props.children}
        </div>
    );
}

export function LandingHeading(props: {
    boldText: string;
    slimText: string;
    className?: string;
}) {
    return (
        <h2
            className={
                'mb-3 text-2xl text-center text-blue-200 uppercase font-weight-400 ' +
                (props.className ? props.className : '')
            }
        >
            <strong className='text-blue-50 font-weight-700'>
                {props.boldText}
            </strong>{' '}
            {props.slimText}
        </h2>
    );
}
