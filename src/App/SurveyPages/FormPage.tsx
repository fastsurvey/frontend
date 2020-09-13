import React, {useState} from 'react';
import {ConfigInterface, FormDataInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import Button from '../../Components/Button';
import ButtonRow from '../../Components/ButtonRow';
import {getRootPath} from '../../utilities/pathFunctions';
import {Link} from 'react-router-dom';
import FormFieldWrapper from './FormFieldWrapper';
import NavigationButtons from './Navigation/NavigationButtons';

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
        <React.Fragment>
            <div className='block relative w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 my-24'>
                {props.formConfig.fields.map((fieldConfig, fieldIndex) => (
                    <FormFieldWrapper
                        key={fieldIndex}
                        fieldConfig={fieldConfig}
                        fieldIndex={fieldIndex}
                        visibleFieldIndex={visibleFieldIndex}
                    />
                ))}
            </div>
            <div className='block absolute bottom-0 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 my-6'>
                <NavigationButtons
                    isFirst={isFirstField()} isLast={isLastField()}
                    onPrev={previousField} onNext={nextField}
                />
                <ButtonRow center>
                    {isLastField() ? (
                        <Link to={
                            getRootPath(window.location.pathname) + '/success'
                        }>
                            <Button
                                text='Submit'
                            />
                        </Link>
                    ) : (
                        <Button
                            text='Submit'
                            visible={false}
                        />
                    )}
                </ButtonRow>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formConfig: state.formConfig,
    formData: state.formData,
});

const mapDispatchToProps = () => ({});

const FormPage = connect(mapStateToProps, mapDispatchToProps)(FormPageComponent);

export default FormPage;
