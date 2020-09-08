
import React from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import TextInput from '../../../Components/TextInput';
import assert from 'assert';
import {FormDataInterface} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';

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
        <div className='display-block'>
            <TextInput
                label='Email'
                value={props.formData.email}
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

const EmailField = connect(mapStateToProps, mapDispatchToProps)(EmailFieldComponent);

export default EmailField;
