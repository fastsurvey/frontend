import React from 'react';

function VisualTextCard(props: {
    title: string;
    children: React.ReactNode | string;
}) {
    return (
        <div>
            <div>{props.title}</div>
            <div>{props.children}</div>
        </div>
    );
}

export default VisualTextCard;
