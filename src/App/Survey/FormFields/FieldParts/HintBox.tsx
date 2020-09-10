
import React from 'react';

interface HintBoxProps {
    text: string;
    visible: boolean;
    hint?: boolean;
}

function HintBox(props: HintBoxProps) {

    return (
        <div className={
                'w-full block relative ' +
                'px-3 transition duration-300 ease-out transform ' +
                'origin-top ' + (props.visible ? 'scale-y-100' : 'scale-y-0')
        }>
            <p className={
                'text-sm inline font-weight-500 leading-6 ' +
                (props.hint ? 'text-gray-500' : 'text-red-500')
            }>
                {props.text}
            </p>
        </div>
    );
}

export default HintBox;
