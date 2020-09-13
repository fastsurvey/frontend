import React, {useState} from 'react';
import {OptionListInterface, SelectionFieldConfig} from '../../../utilities/fieldTypes';
import CheckboxOption from '../../../Components/CheckboxOption';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface SelectionFieldProps {
    manipulated: boolean;
    fieldConfig: SelectionFieldConfig;
    fieldData: OptionListInterface;
    modifyFieldData(newValue: boolean): void;
}

function SelectionField(props: SelectionFieldProps) {

    const [selectionCount, setSelectionCount] = useState(0);

    function handleChange(optionIndex: number, newChecked: boolean) {
        const newFieldData: any = JSON.parse(JSON.stringify(props.fieldData));
        newFieldData[(optionIndex + 1).toString()] = newChecked;
        props.modifyFieldData(newFieldData);
        setSelectionCount(selectionCount + (newChecked ? 1 : -1));
    }

    const min_select: number = props.fieldConfig.properties.min_select;
    const max_select: number = props.fieldConfig.properties.max_select;

    return (
        <React.Fragment>
            <QuestionTitleBox
                title={props.fieldConfig.title}
                description={props.fieldConfig.description}
            />
            <div className='w-full block relative'>
                {props.fieldConfig.properties.fields.map((optionField, optionIndex) => (
                    <CheckboxOption
                        key={optionIndex}
                        label={optionField.title}
                        checked={props.fieldData[(optionIndex + 1).toString()]}
                        onChange={newChecked => handleChange(optionIndex, newChecked)}
                    />
                ))}
            </div>
            <div className='relative block h-6 mb-1'>
                <div className='absolute'>
                    <HintBox
                        text={`You can leave this empty if you want`}
                        visible={(min_select === 0) && (selectionCount === 0)}
                        hint
                    />
                </div>
                <div className='absolute'>
                    <HintBox
                        text={`Choose between ${min_select} and ${max_select} options.`}
                        visible={props.manipulated && ((selectionCount < min_select) || (selectionCount > max_select))}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default SelectionField;
