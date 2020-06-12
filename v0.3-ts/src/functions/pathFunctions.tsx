
export function isSurveyPath(path: string): boolean {
    return new RegExp(
        '^/([a-z]|[A-Z]|[0-9]|-){1,20}/([a-z]|[A-Z]|[0-9]|-){1,20}(|/|/form|/verify|/success|/results)$'
    ).test(path);
}

export function getSurveyRootPath(path: string): string {
    const rootMatch = path.match(
        '/([a-z]|[A-Z]|[0-9]|-){6,20}/([a-z]|[A-Z]|[0-9]|-){6,20}'
    );

    return rootMatch !== null ? rootMatch[0] : '/';
}
