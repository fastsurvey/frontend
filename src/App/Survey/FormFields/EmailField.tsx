
import React from 'react';
import TextInput from '../../../Components/TextInput';
import {EmailFieldConfig} from '../../../utilities/fieldTypes';
import HintBox from './FieldParts/HintBox';

// const DEFAULT_EMAIL_REGEX = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@
// [a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:
// [a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$';

interface EmailFieldComponentProps {
    manipulated: boolean;
    fieldConfig: EmailFieldConfig;
    fieldData: string;
    modifyFieldData(newValue: string): void;
}

function EmailField(props: EmailFieldComponentProps) {

    function handleChange(newValue: string) {
        props.modifyFieldData(newValue);
    }

    const formatTest = new RegExp(
        '^' + props.fieldConfig.properties.format_regex + '$'
    );

    return (
        <React.Fragment>
            <TextInput
                value={props.fieldData}
                onChange={handleChange}
                placeholder='Your email address ...'
            />
            <HintBox
                text={`Enter a valid email address.`}
                visible={props.manipulated && !(formatTest.test(props.fieldData))}
            />
        </React.Fragment>
    );
}

export default EmailField;
