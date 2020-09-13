
import React, {ReactNode} from 'react';

interface ButtonRowProps {
    children: ReactNode;
    center?: boolean;
}

function ButtonRow(props: ButtonRowProps) {
    return (
        <div className={
            'relative gap-x-4 flex flex-row items-center ' +
            (props.center ? 'justify-center' : 'justify-start')
        }>
            {props.children}
        </div>
    );
}

export default ButtonRow;
