import {config} from 'process';
import React from 'react';
import {types} from 'types';

const diffToPhrase = (diff: number): string => {
    [
        [31536000, 'year'],
        [2628000, 'month'],
        [86400, 'day'],
        [3600, 'hour'],
        [60, 'minute'],
        [1, 'second'],
    ].forEach((r: any) => {
        if (diff > r[0]) {
            const n = Math.floor(diff / r[0]);
            return `${n} ${r[1]}` + (n > 1 ? 's' : '');
        }
    });

    return 'now';
};

function TimePill(props: {config: types.SurveyConfig}) {
    let now: number = new Date().getTime() / 1000;

    if (props.config.start > now) {
        // starting in ...
        const phrase = diffToPhrase(props.config.start - now);
    } else if (props.config.end > now) {
        // ending in ...
        const phrase = diffToPhrase(props.config.end - now);
    } else {
        // ended ... ago
        const phrase = diffToPhrase(now - props.config.end);
    }
}

export default TimePill;
