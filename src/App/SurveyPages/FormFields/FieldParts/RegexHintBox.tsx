
import React from 'react';

interface RegexHintBoxProps {
    regex: string;
    visible: boolean;
    hint?: boolean;
}

function RegexHintBox(props: RegexHintBoxProps) {

    const commonSpanClass =
        'inline-block align-top py-px mb-2 text-sm font-weight-500 no-selection ' +
        (props.hint ? 'text-gray-500' : 'text-red-600');

    const SequenceBadge = (key: number, chars: string, multiplicity?: string) => (
        <div className='ml-1 inline-block' key={key}>
            {(multiplicity !== undefined) && (
                <div className={
                    commonSpanClass +
                    ' bg-gray-200 pl-2 pr-1 my-0 rounded-l-full'
                }>
                    {multiplicity} x
                </div>
            )}
            <div className={
                commonSpanClass +
                ' bg-gray-300 pr-2 my-0 rounded-r-full ' +
                ((multiplicity === undefined) ? 'rounded-l-full pl-2' : 'pl-1')
            }>
                {chars}
            </div>
        </div>
    );

    // All blocks like ([a-z]{3}) or (@tum.de)
    const stringParts =
        [...props.regex.matchAll(/\([^()]+\)/g)]
            .map(e => e[0].slice(1, -1));

    // All SequenceBadges from these regex blocks
    const sequenceList = stringParts.map((str: string, i) => {

        // If sequence with allowed characters and multiplicity
        if (str.includes(']{')) {
            // allowed characters
            const charsString: string =
                [...str.matchAll(/[a-zA-Z0-9]-[a-zA-Z0-9]/g)]
                    .map(e => e[0]).join(' or ');

            // multiplicity
            const multiplicityString =
                str.split(']{')[1].slice(0, -1)
                    .replace(',', '-');

            return SequenceBadge(i, charsString, multiplicityString);
        }

        // If fixed string
        return SequenceBadge(i, str);
    });

    return (
        <div className={
                'mt-2 w-full block relative ' +
                'px-3 transition duration-300 ease-out transform ' +
                'origin-top ' + (props.visible ? 'scale-y-100' : 'scale-y-0')
        }>
            <div>
                <span className={commonSpanClass}>Expected format:</span>
                {sequenceList}
            </div>
        </div>
    );
}

export default RegexHintBox;
