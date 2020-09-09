
import React from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import assert from 'assert';
import {FormDataInterface, RadioFieldConfig} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import RadioOption from '../../../Components/RadioOption';

interface RadioFieldComponentProps {
    formData: any;
    fieldIndex: number;
    fieldConfig: RadioFieldConfig;
    modifyData(formData: any): any;
}

function RadioFieldComponent(props: RadioFieldComponentProps) {

    assert(props.formData !== undefined);

    function handleChange(optionIndex: number) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));

        Object.keys(newFormData[(props.fieldIndex + 1).toString()])
            .forEach(radioOption => {
                const i = (props.fieldIndex + 1).toString();
                const j = radioOption;
                newFormData[i][j] = (optionIndex + 1).toString() === j;
        });

        props.modifyData(newFormData);
    }

    return (
        <div className='block w-full mb-12'>
            <h4>{props.fieldConfig.title}</h4>
            {props.fieldConfig.properties.fields.map((optionField, optionIndex) => (
                <RadioOption
                    key={optionIndex}
                    radioGroupId={props.fieldIndex}
                    label={optionField.title}
                    checked={props.formData
                        [(props.fieldIndex + 1).toString()]
                        [(optionIndex + 1).toString()]
                    }
                    onChange={() => handleChange(optionIndex)}
                />
            ))}
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
