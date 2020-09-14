
import React from 'react';
import {TextFieldConfig} from '../../../utilities/fieldTypes';
import TextInput from '../../../Components/TextInput';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface TextFieldProps {
    manipulated: boolean;
    fieldConfig: TextFieldConfig;
    fieldData: string;
    fieldValidation: boolean;
    modifyFieldData(newValue: string): void;
    modifyFieldValidation(newValue: boolean): void;
}

function TextField(props: TextFieldProps) {

    const value = props.fieldData;
    const min_chars: number = props.fieldConfig.properties.min_chars;
    const max_chars: number = props.fieldConfig.properties.max_chars;
    function isValid(newValue: string) {
        return (min_chars <= newValue.length) && (newValue.length <= max_chars);
    }

    function handleChange(newValue: string) {
        props.modifyFieldData(newValue);
        props.modifyFieldValidation(isValid(newValue));
    }

    return (
        <React.Fragment>
            <QuestionTitleBox
                title={props.fieldConfig.title}
                description={props.fieldConfig.description}
            />
            <TextInput
                value={value}
                onChange={handleChange}
                placeholder='Your answer ...'
            />
            <HintBox
                text={`Enter between ${min_chars} and ${max_chars} characters.`}
                visible={props.manipulated && !props.fieldValidation}
            />
        </React.Fragment>
    );
}

export default TextField;
