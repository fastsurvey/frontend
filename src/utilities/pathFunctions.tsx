
import { REGEX_SURVEY_APPENDIX, REGEX_SURVEY_ROOT } from './regexSnippets';

export function isSurveyPath(path: string): boolean {
    return new RegExp(
        '^' + REGEX_SURVEY_ROOT + REGEX_SURVEY_APPENDIX + '$'
    ).test(path);
}

export function getRootPath(path: string): string {
    const rootMatch = path.match(REGEX_SURVEY_ROOT);

    return rootMatch !== null ? rootMatch[0] : '/';
}
