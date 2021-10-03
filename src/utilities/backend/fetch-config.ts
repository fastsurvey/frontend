import {types} from '@types';
import {httpGet} from './http-clients';

export async function fetchConfig(
    username: string,
    survey_name: string,
    success: (config: types.SurveyConfig) => void,
    error: () => void,
) {
    try {
        const config: types.SurveyConfig = (
            await httpGet(`/users/${username}/surveys/${survey_name}`)
        ).data;

        success(config);
    } catch {
        error();
    }
}
