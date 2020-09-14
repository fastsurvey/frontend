
import React, {useState} from 'react';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import assert from 'assert';
import {FieldConfig, FormDataInterface, FormValidationInterface} from '../../utilities/fieldTypes';
import {modifyData, modifyValidation} from '../../utilities/reduxActions';
import EmailField from './FormFields/EmailField';
import TextField from './FormFields/TextField';
import SelectionField from './FormFields/SelectionField';
import RadioField from './FormFields/RadioField';
import OptionField from './FormFields/OptionField';


interface FormFieldWrapperComponentProps {
    fieldIndex: number;
    visibleFieldIndex: number;

    fieldConfig: FieldConfig;

    formData: any;
    formValidation: any;
    modifyData(formData: any): void;
    modifyValidation(formValidation: any): void;
}

function FormFieldWrapperComponent(props: FormFieldWrapperComponentProps) {

    assert(props.formData !== undefined);

    const [manipulated, setManipulated] = useState(false);

    function modifyFieldData(newValue: any) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));
        newFormData[(props.fieldIndex + 1).toString()] = newValue;
        props.modifyData(newFormData);
        setManipulated(true);
    }

    function modifyFieldValidation(newValue: boolean) {
        const newFormValidation: any = JSON.parse(JSON.stringify(props.formValidation));
        newFormValidation[(props.fieldIndex + 1).toString()] = newValue;
        props.modifyValidation(newFormValidation);
    }

    let opacityClass = '';
    if (props.fieldIndex > props.visibleFieldIndex) {
        opacityClass = 'translate-y-100vh';
    } else if (props.fieldIndex < props.visibleFieldIndex) {
        opacityClass = '-translate-y-100vh';
    }

    let FieldComponent: any;
    const commonProps = {
        fieldData: props.formData[(props.fieldIndex + 1).toString()],
        fieldValidation: props.formValidation[(props.fieldIndex + 1).toString()],
        modifyFieldData: modifyFieldData,
        modifyFieldValidation: modifyFieldValidation,
        manipulated: manipulated,
    };

    switch (props.fieldConfig.type) {
        case 'Email':
            FieldComponent = (
                <EmailField fieldConfig={props.fieldConfig} {...commonProps}/>
            );
            break;
        case 'Option':
            FieldComponent = (
                <OptionField fieldConfig={props.fieldConfig} {...commonProps}/>
            );
            break;
        case 'Radio':
            FieldComponent = (
                <RadioField fieldConfig={props.fieldConfig} {...commonProps}/>
            );
            break;
        case 'Selection':
            FieldComponent = (
                <SelectionField fieldConfig={props.fieldConfig} {...commonProps}/>
            );
            break;
        case 'Text':
            FieldComponent = (
                <TextField fieldConfig={props.fieldConfig} {...commonProps}/>
            );
            break;
        default:
            return <React.Fragment/>;
    }

    return (
        <div
            className={
                'block absolute top-40vh left-0 w-full h-auto transform ' +
                'transition-transform duration-500 ' + opacityClass
            }
        >
            <div className='transform -translate-y-1/2'>
                {FieldComponent}
            </div>
        </div>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formData: state.formData,
    formValidation: state.formValidation,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: (formData: FormDataInterface) => dispatch(modifyData(formData)),
    modifyValidation: (formValidation: FormValidationInterface) => dispatch(modifyValidation(formValidation)),
});

const FormFieldWrapper = connect(mapStateToProps, mapDispatchToProps)(FormFieldWrapperComponent);

export default FormFieldWrapper;
