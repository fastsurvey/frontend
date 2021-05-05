import {regex} from './regex';

export function isSurveyPath(path: string): boolean {
    return new RegExp('^' + regex.surveyRoot + regex.surveyAppendix + '$').test(
        path,
    );
}

export function getPathId(
    path: string,
): {
    username: string;
    survey_name: string;
} {
    const pathList = path.split('/').filter((s) => s.length > 0);

    return {
        username: pathList[0],
        survey_name: pathList[1],
    };
}

export function getRootPath(path: string): string {
    const rootMatch = path.match(regex.surveyRoot);

    return rootMatch !== null ? rootMatch[0] : '/';
}
