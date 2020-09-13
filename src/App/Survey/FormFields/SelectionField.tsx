import React, {useState} from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import assert from 'assert';
import {FormDataInterface, SelectionFieldConfig} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import CheckboxOption from '../../../Components/CheckboxOption';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface SelectionFieldComponentProps {
    formData: any;
    fieldIndex: number;
    fieldConfig: SelectionFieldConfig;

    modifyData(formData: any): any;
}

function SelectionFieldComponent(props: SelectionFieldComponentProps) {

    assert(props.formData !== undefined);

    const [selectionCount, setSelectionCount] = useState(0);
    const [manipulated, setManipulated] = useState(false);

    function handleChange(optionIndex: number, newChecked: boolean) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));
        newFormData[(props.fieldIndex + 1).toString()][(optionIndex + 1).toString()] = newChecked;
        props.modifyData(newFormData);
        setSelectionCount(selectionCount + (newChecked ? 1 : -1));
        setManipulated(true);
    }

    const min_select: number = props.fieldConfig.properties.min_select;
    const max_select: number = props.fieldConfig.properties.max_select;

    return (
        <div className='block w-full mb-12'>
            <QuestionTitleBox
                title={props.fieldConfig.title}
                description={props.fieldConfig.description}
            />
            <div className='w-full block relative'>
                {props.fieldConfig.properties.fields.map((optionField, optionIndex) => (
                    <CheckboxOption
                        key={optionIndex}
                        label={optionField.title}
                        checked={props.formData
                            [(props.fieldIndex + 1).toString()]
                            [(optionIndex + 1).toString()]
                        }
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
                        visible={manipulated && ((selectionCount < min_select) || (selectionCount > max_select))}
                    />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formData: state.formData,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: (formData: FormDataInterface) => dispatch(modifyData(formData)),
});

const SelectionField = connect(mapStateToProps, mapDispatchToProps)(SelectionFieldComponent);

export default SelectionField;
