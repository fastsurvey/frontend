import {types} from 'types';
import axios from 'axios';

const API_URL = 'https://backend.dev.fastsurvey.io';

export async function postSubmission(
    username: string,
    survey_name: string,
    formData: types.FormData,
    success: () => void,
    error: () => void,
) {
    try {
        await axios.post(
            API_URL + `/users/${username}/surveys/${survey_name}`,
            JSON.stringify(formData),
        );

        success();
    } catch {
        // 400 - Survey is closed
        error();
    }
}
