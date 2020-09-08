
import React from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import assert from 'assert';
import {FormDataInterface, TextFieldConfig} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import TextInput from '../../../Components/TextInput';

interface TextFieldComponentProps {
    formData: any;
    fieldIndex: number;
    fieldConfig: TextFieldConfig;
    modifyData(formData: any): any;
}

function TextFieldComponent(props: TextFieldComponentProps) {

    assert(props.formData !== undefined);

    function handleChange(newValue: string) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));
        newFormData[(props.fieldIndex + 1).toString()] = newValue;
        props.modifyData(newFormData);
    }

    return (
        <div className='display-block'>
            <h4>{props.fieldConfig.title}</h4>
            <TextInput
                value={props.formData[(props.fieldIndex + 1).toString()]}
                onChange={handleChange}
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

const TextField = connect(mapStateToProps, mapDispatchToProps)(TextFieldComponent);

export default TextField;
