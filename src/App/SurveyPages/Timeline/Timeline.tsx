
import React from 'react';
import {ConfigInterface} from '../../../utilities/fieldTypes';

interface TimelineProps {
    formConfig: ConfigInterface;
    visibleFieldIndex: number;
    setFieldIndex(newIndex: number): void;
}

function Timeline(props: TimelineProps) {

    const currentFraction = ((props.visibleFieldIndex + 1)/props.formConfig.fields.length);

    return (
        <div className={
            'absolute left-0 bottom-0 h-2 block w-full'
        }>
            <div className={
                'absolute left-0 bottom-0 h-2 w-full bg-gray-500'
            }/>
            <div
                className={
                    'absolute left-0 bottom-0 h-2 bg-gray-300 w-full ' +
                    'transition transition-transform duration-300 ease-in-out transform origin-left'
                }
                style={{transform: 'scaleX(' + currentFraction.toString() + ')'}}
            />
        </div>
    );
}

export default Timeline;
