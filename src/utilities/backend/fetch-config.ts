import axios from 'axios';
import {types} from '@types';

const API_URL: string = 'https://api.dev.fastsurvey.de';

export async function fetchConfig(
    username: string,
    survey_name: string,
    success: (config: types.SurveyConfig) => void,
    error: () => void,
) {
    try {
        const config: types.SurveyConfig = (
            await axios.get(
                API_URL + `/users/${username}/surveys/${survey_name}`,
            )
        ).data;

        success(config);
    } catch {
        error();
    }
}
