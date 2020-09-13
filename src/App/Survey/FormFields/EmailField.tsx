
import React, {useState} from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import TextInput from '../../../Components/TextInput';
import assert from 'assert';
import {EmailFieldConfig, FormDataInterface} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';


// const DEFAULT_EMAIL_REGEX = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@
// [a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:
// [a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$';

interface EmailFieldComponentProps {
    fieldIndex: number;
    visibleFieldIndex: number;
    setVisibleFieldIndex(newIndex: number): void;

    fieldConfig: EmailFieldConfig;

    formData: any;
    modifyData(formData: any): any;
}

function EmailFieldComponent(props: EmailFieldComponentProps) {

    assert(props.formData !== undefined);

    const [manipulated, setManipulated] = useState(false);

    function handleChange(newValue: string) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));
        newFormData[(props.fieldIndex + 1).toString()] = newValue;
        props.modifyData(newFormData);
        setManipulated(true);
    }

    const value: string = props.formData[(props.fieldIndex + 1).toString()];
    const formatTest = new RegExp(
        '^' + props.fieldConfig.properties.format_regex + '$'
    );

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
                    title='Email'
                    description=''
                />
                <TextInput
                    value={value}
                    onChange={handleChange}
                    placeholder='Your email address ...'
                />
                <HintBox
                    text={`Enter a valid email address.`}
                    visible={manipulated && !(formatTest.test(value))}
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

const EmailField = connect(mapStateToProps, mapDispatchToProps)(EmailFieldComponent);

export default EmailField;
