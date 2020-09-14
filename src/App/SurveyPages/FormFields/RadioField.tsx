
import React from 'react';
import {OptionListInterface, RadioFieldConfig} from '../../../utilities/fieldTypes';
import RadioOption from '../../../Components/RadioOption';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface RadioFieldProps {
    manipulated: boolean;
    fieldConfig: RadioFieldConfig;
    fieldData: OptionListInterface;
    fieldValidation: boolean;
    modifyFieldData(newValue: boolean): void;
    modifyFieldValidation(newValue: boolean): void;
}

function RadioField(props: RadioFieldProps) {

    function handleChange(optionIndex: number, newValue: boolean) {
        const newFieldData: any = JSON.parse(JSON.stringify(props.fieldData));

        Object.keys(newFieldData)
            .forEach(radioOption => {
                newFieldData[radioOption] =
                    ((optionIndex + 1).toString() === radioOption) &&
                    newValue;
        });

        props.modifyFieldData(newFieldData);
        props.modifyFieldValidation(newValue);
    }

    return (
        <React.Fragment>
            <QuestionTitleBox
                title={props.fieldConfig.title}
                description={props.fieldConfig.description}
            />
            {props.fieldConfig.properties.fields.map((optionField, optionIndex) => (
                <RadioOption
                    key={optionIndex}
                    label={optionField.title}
                    checked={props.fieldData[(optionIndex + 1).toString()]}
                    onChange={(newValue) => handleChange(optionIndex, newValue)}
                />
            ))}
            <HintBox
                text={`Please select an option.`}
                visible={props.manipulated && !props.fieldValidation}
            />
        </React.Fragment>
    );
}

export default RadioField;
