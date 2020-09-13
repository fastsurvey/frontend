
import React, {useState} from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import TextInput from '../../../Components/TextInput';
import assert from 'assert';
import {FormDataInterface} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';


const EMAIL_REGEX = '^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$';
interface EmailFieldComponentProps {
    formData: any;
    modifyData(formData: any): any;
}

function EmailFieldComponent(props: EmailFieldComponentProps) {

    assert(props.formData !== undefined);

    const [manipulated, setManipulated] = useState(false);

    function handleChange(newValue: string) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));
        newFormData.email = newValue;
        props.modifyData(newFormData);
        setManipulated(true);
    }

    return (
        <div className='block w-full mb-12'>
            <QuestionTitleBox
                title='Email'
                description=''
            />
            <TextInput
                value={props.formData.email}
                onChange={handleChange}
                placeholder='Your email address ...'
            />
            <HintBox
                text={`Enter a valid email address.`}
                visible={manipulated && !(new RegExp(EMAIL_REGEX).test(props.formData.email))}
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

const EmailField = connect(mapStateToProps, mapDispatchToProps)(EmailFieldComponent);

export default EmailField;
