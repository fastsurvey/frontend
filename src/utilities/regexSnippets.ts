
export const REGEX_SURVEY_ROOT: string =
    '/([a-zA-Z0-9-]{3,20})/([a-zA-Z0-9-]{3,20})';

export const REGEX_SURVEY_APPENDIX: string =
    '(|/|/form|/verify|/success|/results)';

export const DEFAULT_EMAIL_REGEX: string =
    '[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@' +
    '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
    '(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+';
