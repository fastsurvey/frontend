import React from 'react';
import {NewLandingPageSection} from './section';

const ColoredText = (props: {children: React.ReactNode; good?: boolean}) => (
    <span
        className={
            'relative z-10 font-weight-500 text-gray-200 ' +
            (props.good ? 'text-green-200 ' : 'text-red-200 ')
        }
    >
        {props.children}
    </span>
);
export default function LandingSectionWhy(props: {}) {
    return (
        <NewLandingPageSection index={1}>
            <div className='max-w-xl text-lg text-gray-300 font-weight-500'>
                <h2
                    className={
                        'mb-3 text-2xl uppercase text-center ' +
                        'text-blue-200 font-weight-400 pb-2'
                    }
                >
                    <strong className='text-blue-50 font-weight-700'>
                        why
                    </strong>{' '}
                    yet another survey tool?
                </h2>
                <div className='mb-4'>
                    There are a ton of survey tools. <em>However</em>, existing
                    solutions push{' '}
                    <ColoredText>inflexible monthly pricing</ColoredText>, are{' '}
                    <ColoredText>hard too use</ColoredText> and are{' '}
                    <em>blackboxes</em> when it comes to{' '}
                    <ColoredText>data-privacy</ColoredText>.
                </div>
                <div>
                    FastSurvey has{' '}
                    <ColoredText good>fair and transparent pricing</ColoredText>
                    , it is{' '}
                    <ColoredText good>opinionated and minimalistic</ColoredText>
                    , and can be{' '}
                    <ColoredText good>self-hosted and customized</ColoredText>{' '}
                    however you like.
                </div>
            </div>
        </NewLandingPageSection>
    );
}
