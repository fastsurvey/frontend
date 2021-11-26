import React from 'react';
import {types} from '/src/types';
import VisualTimePill from './visual-time-pill';

const diffToPhrase = (diff: number): string => {
    const ranges: any = [
        [31536000, 'year'],
        [2628000, 'month'],
        [86400, 'day'],
        [3600, 'hour'],
        [60, 'minute'],
        [1, 'second'],
    ];

    for (let i = 0; i < 6; i++) {
        if (diff > ranges[i][0]) {
            const n = Math.floor(diff / ranges[i][0]);
            return `${n} ${ranges[i][1]}` + (n > 1 ? 's' : '');
        }
    }

    return 'now';
};

function TimePill(props: {config: types.SurveyConfig}) {
    const now: number = new Date().getTime() / 1000;

    if (props.config.start > now) {
        const phrase = `Starting in ${diffToPhrase(props.config.start - now)}`;
        return <VisualTimePill variant='pending' phrase={phrase} />;
    } else if (props.config.end > now) {
        const phrase = `Ending in ${diffToPhrase(props.config.end - now)}`;
        return <VisualTimePill variant='running' phrase={phrase} />;
    } else {
        const phrase = `Ended ${diffToPhrase(now - props.config.end)} ago`;
        return <VisualTimePill variant='finished' phrase={phrase} />;
    }
}

export default TimePill;
