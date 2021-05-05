import {regex} from './regex';

export function isSurveyPath(path: string): boolean {
    return new RegExp('^' + regex.surveyRoot + regex.surveyAppendix + '$').test(
        path,
    );
}

export function getRootPath(path: string): string {
    const rootMatch = path.match(regex.surveyRoot);

    return rootMatch !== null ? rootMatch[0] : '/';
}
