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

export async function postSubmission(
    username: string,
    survey_name: string,
    formData: types.FormData,
    success: () => void,
    error: (type?: 'regex') => void,
) {
    try {
        await axios.post(
            API_URL + `/users/${username}/surveys/${survey_name}/submissions`,
            JSON.stringify(formData),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
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
