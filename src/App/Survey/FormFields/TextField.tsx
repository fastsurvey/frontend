
import React, {useState} from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import assert from 'assert';
import {FormDataInterface, TextFieldConfig} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import TextInput from '../../../Components/TextInput';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface TextFieldComponentProps {
    fieldIndex: number;
    visibleFieldIndex: number;
    setVisibleFieldIndex(newIndex: number): void;

    fieldConfig: TextFieldConfig;

    formData: any;
    modifyData(formData: any): any;
}

function TextFieldComponent(props: TextFieldComponentProps) {

    assert(props.formData !== undefined);

    const [manipulated, setManipulated] = useState(false);

    function handleChange(newValue: string) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));
        newFormData[(props.fieldIndex + 1).toString()] = newValue;
        props.modifyData(newFormData);
        setManipulated(true);
    }

    const value: string = props.formData[(props.fieldIndex + 1).toString()];
    const min_chars: number = props.fieldConfig.properties.min_chars;
    const max_chars: number = props.fieldConfig.properties.max_chars;

    let opacityClass = '';
    if (props.fieldIndex > props.visibleFieldIndex) {
        opacityClass = 'translate-y-100vh';
    } else if (props.fieldIndex < props.visibleFieldIndex) {
        opacityClass = '-translate-y-100vh';
    }

    const transitionClass = 'transition-transform duration-500';

    return (
        <div
            className={
                'block absolute top-0 left-0 w-full h-auto transform ' +
                transitionClass + ' ' + opacityClass
            }
        >
            <div className='transform -translate-y-1/2'>
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
                    visible={manipulated && ((value.length < min_chars) || (value.length > max_chars))}
                />
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

const TextField = connect(mapStateToProps, mapDispatchToProps)(TextFieldComponent);

export default TextField;
