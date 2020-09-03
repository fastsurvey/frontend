
export function isSurveyPath(path: string): boolean {
    return new RegExp(
        '^/([a-z]|[A-Z]|[0-9]|-){3,20}/([a-z]|[A-Z]|[0-9]|-){3,20}(|/|/form|/verify|/success|/results)$'
    ).test(path);
}

export function getRootPath(path: string): string {
    const rootMatch = path.match(
        '/([a-z]|[A-Z]|[0-9]|-){3,20}/([a-z]|[A-Z]|[0-9]|-){3,20}'
    );

    return rootMatch !== null ? rootMatch[0] : '/';
}
