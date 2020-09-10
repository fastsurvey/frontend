
import React from 'react';

interface QuestionTitleBoxProps {
    title: string;
    description: string;
}

function QuestionTitleBox(props: QuestionTitleBoxProps) {

    return (
        <div className='mb-4 w-full block relative'>
            <h4 className='text-blue-500 inline mr-4'>{props.title}</h4>
            <p className='text-blue-500 inline'>{props.description}</p>
        </div>
    );
}

export default QuestionTitleBox;
