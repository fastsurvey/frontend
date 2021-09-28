import {httpPost} from './http-clients';

export async function postVerification(
    username: string,
    survey_name: string,
    token: string,
    success: () => void,
    error: (code: 401 | 500) => void,
) {
    try {
        await httpPost(
            `/users/${username}/surveys/${survey_name}/verification`,
            {verification_token: token},
        );
        success();
    } catch (e: any) {
        // 400 - Survey is closed
        try {
            if (e.response.status === 401 || e.response.status === 422) {
                error(401);
            } else {
                error(500);
            }
        } catch {
            error(500);
        }
    }
}
