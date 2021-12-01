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
    id?: string;
}) {
    let borderColor: string = 'border-gray-800';
    return (
        <div
            className={
                'w-full min-h-[calc(100vh-4rem)] py-12 flex-col-center ' +
                `relative border-b ${borderColor}`
            }
        >
            {props.id !== undefined && (
                <div className='absolute top-0 left-0' id={props.id} />
            )}
            {props.children}
        </div>
    );
}
