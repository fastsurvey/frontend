export const regex = {
    surveyRoot: '/([a-zA-Z0-9-]{3,40})/([a-zA-Z0-9-]{3,40})',
    surveyAppendix: '(|/|/form|/verify|/success)',
    email:
        "[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@" +
        '[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?' +
        '(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+',
};
