import axios from 'axios';
import {types} from '@types';

let API_URL: string;
switch (import.meta.env.MODE) {
    case 'development':
        API_URL = 'https://api.dev.fastsurvey.de';
        break;
    case 'production':
        API_URL = 'https://api.fastsurvey.de';
        break;
}

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
