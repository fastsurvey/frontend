import React from 'react';

function VisualInfoCard(props: {
    title: string;
    children: React.ReactNode | string;
}) {
    return (
        <div>
            <div>icon here</div>
            <div>{props.children}</div>
        </div>
    );
}

export default VisualInfoCard;
