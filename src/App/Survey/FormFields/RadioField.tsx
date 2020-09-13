
import React, {useState} from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import assert from 'assert';
import {FormDataInterface, RadioFieldConfig} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import RadioOption from '../../../Components/RadioOption';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface RadioFieldComponentProps {
    formData: any;
    fieldIndex: number;
    fieldConfig: RadioFieldConfig;
    modifyData(formData: any): any;
}

function RadioFieldComponent(props: RadioFieldComponentProps) {

    assert(props.formData !== undefined);

    const [hintVisible, setHintVisible] = useState(true);
    const [manipulated, setManipulated] = useState(false);

    function handleChange(optionIndex: number, newValue: boolean) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));

        Object.keys(newFormData[(props.fieldIndex + 1).toString()])
            .forEach(radioOption => {
                const i = (props.fieldIndex + 1).toString();
                const j = radioOption;
                newFormData[i][j] = ((optionIndex + 1).toString() === j) && newValue;
        });

        setHintVisible(!newValue);
        setManipulated(true);

        props.modifyData(newFormData);
    }

    return (
        <div className='block w-full mb-12'>
            <QuestionTitleBox
                title={props.fieldConfig.title}
                description={props.fieldConfig.description}
            />
            {props.fieldConfig.properties.fields.map((optionField, optionIndex) => (
                <RadioOption
                    key={optionIndex}
                    radioGroupId={props.fieldIndex}
                    label={optionField.title}
                    checked={props.formData
                        [(props.fieldIndex + 1).toString()]
                        [(optionIndex + 1).toString()]
                    }
                    onChange={(newValue) => handleChange(optionIndex, newValue)}
                />
            ))}
            <HintBox
                text={`Please select an option.`}
                visible={manipulated && hintVisible}
            />
        </div>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formData: state.formData,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: (formData: FormDataInterface) => dispatch(modifyData(formData)),
});

const RadioField = connect(mapStateToProps, mapDispatchToProps)(RadioFieldComponent);

export default RadioField;
