import React from 'react';

export default function LandingPageSection(props: {
    leftChild: React.ReactChild;
    rightChild: React.ReactChild;
}) {
    return (
        <div className='w-full min-h-screen centering-col'>
            <div
                className={
                    'grid w-full px-8 ' +
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
