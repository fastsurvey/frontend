
import React from 'react';

interface HintBoxProps {
    text: string;
    visible: boolean;
}

function HintBox(props: HintBoxProps) {

    return (
        <div className={
                'mt-1 w-full block relative ' +
                'px-3 transition duration-300 ease-out transform ' +
                'origin-top ' + (props.visible ? 'scale-y-100' : 'scale-y-0')
        }>
            <p className={
                'text-sm inline text-red-500 font-weight-500 '
            }>
                {props.text}
            </p>
        </div>
    );
}

export default HintBox;
