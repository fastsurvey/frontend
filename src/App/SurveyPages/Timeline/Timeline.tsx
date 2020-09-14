
import React from 'react';
import {ConfigInterface} from '../../../utilities/fieldTypes';
import TimelineStep from './TimelineStep';

interface TimelineProps {
    formConfig: ConfigInterface;
    visibleFieldIndex: number;
    setFieldIndex(newIndex: number): void;
}

function Timeline(props: TimelineProps) {
    return (
        <div className={
            'absolute left-0 ml-4 top-50vh transform ' +
            'flex flex-col justify-center items-start'
        }>
            {props.formConfig.fields.map((fieldConfig, index) => (
               <TimelineStep
                   title={fieldConfig.title}
                   visibleFieldIndex={props.visibleFieldIndex}
                   fieldIndex={index}
                   setFieldIndex={props.setFieldIndex}
               />
            ))}
        </div>
    );
}

export default Timeline;
