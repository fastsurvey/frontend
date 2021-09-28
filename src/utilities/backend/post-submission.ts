import {types} from '@types';
import {httpPost} from './http-clients';

export async function postSubmission(
    username: string,
    survey_name: string,
    formData: types.FormData,
    success: () => void,
    error: (type?: 'regex') => void,
) {
    try {
        await httpPost(
            `/users/${username}/surveys/${survey_name}/submissions`,
            formData,
        );
        success();
    } catch (e: any) {
        // 400 - Survey is closed
        try {
            JSON.stringify(e.response.data.detail);
            if (JSON.stringify(e.response.data.detail).includes('regex')) {
                error('regex');
            } else {
                error();
            }
        } catch {
            error();
        }
    }
}
