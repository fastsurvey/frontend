
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
    fieldValidation: boolean;
    modifyFieldData(newValue: string): void;
    modifyFieldValidation(newValue: boolean): void;
}

function EmailField(props: EmailFieldComponentProps) {

    const hasCustomRegex = (props.fieldConfig.properties.regex !== '*');

    const formatTest = new RegExp('^' + (
        hasCustomRegex ?
                props.fieldConfig.properties.regex :
                DEFAULT_EMAIL_REGEX
        ) + '$');

    let hintBox: any;
    const hintIsVisible = props.manipulated && !(props.fieldValidation);

    if (hasCustomRegex) {
        hintBox = (
            <RegexHintBox
                regex={props.fieldConfig.properties.regex}
                visible={hintIsVisible}
            />
        );
    } else {
        hintBox = (
            <HintBox
                text='Enter a valid email address.'
                visible={hintIsVisible}
            />
        );
    }

    function handleChange(newValue: string) {
        props.modifyFieldData(newValue);
        props.modifyFieldValidation(formatTest.test(newValue));
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
