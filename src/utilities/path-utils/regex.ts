export const regex = {
    surveyRoot: '/([a-zA-Z0-9-]{3,20})/([a-zA-Z0-9-]{3,20})',
    surveyAppendix: '(|/|/form|/verify|/success|/results)',
    email:
        "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@" +
        '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
        '(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+',
};
