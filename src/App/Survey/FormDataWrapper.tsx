
import React, { useState } from 'react';
import { ConfigInterface } from '../../utilities/fieldTypes';
import { generateInitialFormData } from '../../utilities/communicationObjects';

interface SurveyIndexProps {
    fetching: boolean;
    config: ConfigInterface;
}

function FormDataWrapper(props: SurveyIndexProps) {

    const [formData, setFormData] = useState(undefined);

    if (props.fetching || (props.config === undefined)) {
        return undefined;
    } else if (formData === undefined) {
        // generate the initial formData
        // @ts-ignore
        setFormData(generateInitialFormData(props.config));
    }
}

export default FormDataWrapper;
