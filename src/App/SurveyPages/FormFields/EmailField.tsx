
import React from 'react';
import TextInput from '../../../Components/TextInput';
import {EmailFieldConfig} from '../../../utilities/fieldTypes';
import HintBox from './FieldParts/HintBox';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import RegexHintBox from './FieldParts/RegexHintBox';
import {DEFAULT_EMAIL_REGEX} from '../../../utilities/regexSnippets';


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

    const customRegex = (props.fieldConfig.properties.regex !== '*');

    const formatTest = new RegExp('^' + (
        customRegex ?
                props.fieldConfig.properties.regex :
                DEFAULT_EMAIL_REGEX
        ) + '$');

    let hintBox: any;

    if (customRegex) {
        hintBox = (
            <RegexHintBox
                regex={props.fieldConfig.properties.regex}
                visible={props.manipulated && !(formatTest.test(props.fieldData))}
            />
        );
    } else {
        hintBox = (
            <HintBox
                text='Enter a valid email address.'
                visible={props.manipulated && !(formatTest.test(props.fieldData))}
            />
        );
    }

    return (
        <React.Fragment>
            <QuestionTitleBox
                title={props.fieldConfig.title}
                description={props.fieldConfig.description}
            />
            <TextInput
                value={props.fieldData}
                onChange={handleChange}
                placeholder='Your email address ...'
            />
            {hintBox}
        </React.Fragment>
    );
}

export default EmailField;
