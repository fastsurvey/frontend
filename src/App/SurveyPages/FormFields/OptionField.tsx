import React from 'react';
import {OptionFieldConfig} from '../../../utilities/fieldTypes';
import CheckboxOption from '../../../Components/CheckboxOption';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface OptionFieldProps {
    manipulated: boolean;
    fieldConfig: OptionFieldConfig;
    fieldData: boolean;
    modifyFieldData(newValue: boolean): void;
}

function OptionField(props: OptionFieldProps) {

    function handleChange(newChecked: boolean) {
        props.modifyFieldData(newChecked);
    }

    const value = props.fieldData;
    const isRequired = props.fieldConfig.properties.required;

    return (
        <React.Fragment>
            <QuestionTitleBox
                title={props.fieldConfig.title}
            />
            <div className='w-full block relative'>
                <CheckboxOption
                    label={props.fieldConfig.description}
                    checked={value}
                    onChange={newChecked => handleChange(newChecked)}
                />
            </div>
            <div className='relative block h-6 mb-1'>
                {!isRequired && (
                    <HintBox
                        text={`You can leave this empty if you want`}
                        visible
                        hint
                    />
                )}
                {isRequired && (
                    <HintBox
                        text={`You have to select this option`}
                        visible={!value}
                    />
                )}
            </div>
        </React.Fragment>
    );
}

export default OptionField;
