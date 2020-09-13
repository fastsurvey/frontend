import React, {useState} from 'react';
import {ConfigInterface, FormDataInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import FormFieldWrapper from './FormFieldWrapper';
import NavigationButtons from './Navigation/NavigationButtons';
import './FormPage.scss';
import SubmitButton from './Navigation/SubmitButton';

interface FormPageComponentProps {
    formConfig: ConfigInterface | undefined;
    formData: FormDataInterface | undefined;
}

function FormPageComponent(props: FormPageComponentProps) {

    const [visibleFieldIndex, setVisibleFieldIndex] = useState(0);

    if ((props.formConfig === undefined) || (props.formData === undefined)) {
        return <React.Fragment/>;
    }

    const fieldCount = props.formConfig.fields.length;

    function isFirstField() {
        return visibleFieldIndex === 0;
    }

    function isLastField() {
        return visibleFieldIndex === (fieldCount - 1);
    }

    function previousField() {
        if (!isFirstField()) {
            setVisibleFieldIndex(visibleFieldIndex - 1);
        }
    }

    function nextField() {
        if (!isLastField()) {
            setVisibleFieldIndex(visibleFieldIndex + 1);
        }
    }

    console.debug({formData: props.formData});

    return (
        <div className='FormPage'>
            <div className='FormFieldSection'>
                {props.formConfig.fields.map((fieldConfig, fieldIndex) => (
                    <FormFieldWrapper
                        key={fieldIndex}
                        fieldConfig={fieldConfig}
                        fieldIndex={fieldIndex}
                        visibleFieldIndex={visibleFieldIndex}
                    />
                ))}
            </div>
            <div className='NavigationSection flex flex-row items-start'>
                <NavigationButtons
                    isFirst={isFirstField()} isLast={isLastField()}
                    onPrev={previousField} onNext={nextField}
                />
                <div className='flex-1'/>
                <SubmitButton
                    clickable={isLastField()}
                    onClick={() => console.info('Submitting')}
                />
            </div>
        </div>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formConfig: state.formConfig,
    formData: state.formData,
});

const mapDispatchToProps = () => ({});

const FormPage = connect(mapStateToProps, mapDispatchToProps)(FormPageComponent);

export default FormPage;
