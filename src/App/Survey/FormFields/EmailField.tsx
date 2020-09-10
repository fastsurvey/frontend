
import React from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import TextInput from '../../../Components/TextInput';
import assert from 'assert';
import {FormDataInterface} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';

interface EmailFieldComponentProps {
    formData: any;
    modifyData(formData: any): any;
}

function EmailFieldComponent(props: EmailFieldComponentProps) {

    assert(props.formData !== undefined);

    function handleChange(newValue: string) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));
        newFormData.email = newValue;
        props.modifyData(newFormData);
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
