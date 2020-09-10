
import React from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import assert from 'assert';
import {FormDataInterface, TextFieldConfig} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import TextInput from '../../../Components/TextInput';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

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

    const value: string = props.formData[(props.fieldIndex + 1).toString()];
    const min_chars: number = props.fieldConfig.properties.min_chars;
    const max_chars: number = props.fieldConfig.properties.max_chars;

    return (
        <div className='block w-full mb-12'>
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
                visible={((value.length < min_chars) || (value.length > max_chars))}
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
