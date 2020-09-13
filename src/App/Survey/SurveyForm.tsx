
import React, {useState} from 'react';
import {ConfigInterface, FormDataInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import EmailField from './FormFields/EmailField';
import RadioField from './FormFields/RadioField';
import SelectionField from './FormFields/SelectionField';
import TextField from './FormFields/TextField';
import Button from '../../Components/Button';
import ButtonRow from '../../Components/ButtonRow';
import {getRootPath} from '../../utilities/pathFunctions';
import {Link} from 'react-router-dom';

interface SurveyFormComponentProps {
    formConfig: ConfigInterface | undefined;
    formData: FormDataInterface | undefined;
}

function SurveyFormComponent(props: SurveyFormComponentProps) {

    const [visibleFieldIndex, setVisibleFieldIndex] = useState(0);

    if ((props.formConfig === undefined) || (props.formData === undefined)) {
        return <React.Fragment/>;
    }

    const fieldCount = props.formConfig?.fields.length + (props.formConfig.email_validation ? 1 : 0);

    function isFirstField() {
        return visibleFieldIndex === 0;
    }

    function isLastField() {
        return visibleFieldIndex === fieldCount - 1;
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
        <div className='block relative w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 my-24'>
            {props.formConfig.email_validation && (
                <EmailField
                    fieldIndex={0}
                    visibleFieldIndex={visibleFieldIndex}
                    setVisibleFieldIndex={setVisibleFieldIndex}
                />
            )}
            {props.formConfig.fields.map((fieldConfig, fieldIndex) => {

                const commonProps = {
                    key: fieldIndex,
                    fieldIndex,
                    visibleFieldIndex,
                    setVisibleFieldIndex,
                };

                switch (fieldConfig.type) {
                    case 'Radio':
                        return <RadioField fieldConfig={fieldConfig} {...commonProps}/>;
                    case 'Selection':
                        return <SelectionField fieldConfig={fieldConfig} {...commonProps}/>;
                    case 'Text':
                        return <TextField fieldConfig={fieldConfig} {...commonProps}/>;
                    default:
                        return <React.Fragment key={fieldIndex}/>;
                }
            })}
            <ButtonRow center>
                <Button
                    text='Prev' onClick={previousField}
                    className={!isFirstField() ? 'opacity-100' : 'opacity-0'}
                />
                <Link to={
                    getRootPath(window.location.pathname) +
                    (props.formConfig.email_validation ? '/verify' : '/success')
                }>
                    <Button
                        text='Submit'
                        className={isLastField() ? 'opacity-100' : 'opacity-0'}
                    />
                </Link>
                <Button
                    text='Next' onClick={nextField}
                    className={!isLastField() ? 'opacity-100' : 'opacity-0'}
                />
            </ButtonRow>
        </div>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formConfig: state.formConfig,
    formData: state.formData,
});

const mapDispatchToProps = () => ({
});

const SurveyForm = connect(mapStateToProps, mapDispatchToProps)(SurveyFormComponent);

export default SurveyForm;
