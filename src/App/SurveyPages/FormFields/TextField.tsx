
import React from 'react';
import {TextFieldConfig} from '../../../utilities/fieldTypes';
import TextInput from '../../../Components/TextInput';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface TextFieldProps {
    manipulated: boolean;
    fieldConfig: TextFieldConfig;
    fieldData: string;
    modifyFieldData(newValue: string): void;
}

function TextField(props: TextFieldProps) {

    function handleChange(newValue: string) {
        props.modifyFieldData(newValue);
    }

    const value = props.fieldData;
    const min_chars: number = props.fieldConfig.properties.min_chars;
    const max_chars: number = props.fieldConfig.properties.max_chars;

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
                visible={props.manipulated && ((value.length < min_chars) || (value.length > max_chars))}
            />
        </React.Fragment>
    );
}

export default TextField;
