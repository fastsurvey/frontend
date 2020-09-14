
import React from 'react';

interface TimelineStepProps {
    title: string;
    visibleFieldIndex: number;
    fieldIndex: number;
    setFieldIndex(newIndex: number): void;
}

function TimelineStep(props: TimelineStepProps) {

    const currentField = (props.fieldIndex === props.visibleFieldIndex);
    return (
        <div
            onClick={() => props.setFieldIndex(props.fieldIndex)}
            className={
            'mb-4 relative flex flex-row justify-center items-center rounded ' +
            (currentField ? 'bg-gray-200 cursor-default' :
                'hover:bg-gray-200 cursor-pointer')
        }>
            <div className='inline h-2 w-2 p-0 rounded-lg bg-blue-500'/>
            <p className='ml-4 text-gray-600 inline'>{props.title}</p>
        </div>
    );
}

export default TimelineStep;
