import React from 'react';

export function LandingPageSection(props: {
    children: React.ReactNode;
    index: number;
    id: string;
}) {
    let borderColor: string = 'border-gray-800';
    return (
        <div
            className={
                'w-full min-h-[calc(100vh-4rem)] py-12 px-4 flex-col-center ' +
                `relative border-b ${borderColor}`
            }
            data-cy={`landing-section-${props.id}`}
        >
            <div className='absolute top-0 left-0' id={props.id} />
            {props.children}
        </div>
    );
}
