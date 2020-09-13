import React, {useState} from 'react';
import {ConfigInterface, FormDataInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import RadioField from './FormFieldComponents/RadioField';
import SelectionField from './FormFieldComponents/SelectionField';
import TextField from './FormFieldComponents/TextField';
import Button from '../../Components/Button';
import ButtonRow from '../../Components/ButtonRow';
import {getRootPath} from '../../utilities/pathFunctions';
import {Link} from 'react-router-dom';
import OptionField from './FormFieldComponents/OptionField';
import FormField from './FormField';

interface SurveyFormComponentProps {
    formConfig: ConfigInterface | undefined;
    formData: FormDataInterface | undefined;
}

function SurveyFormComponent(props: SurveyFormComponentProps) {

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
                {props.formConfig.fields.map((fieldConfig, fieldIndex) => {

                    const commonProps = {
                        key: fieldIndex,
                        fieldIndex,
                        visibleFieldIndex,
                        setVisibleFieldIndex,
                    };

                    switch (fieldConfig.type) {
                        case 'Email':
                        case 'Option':
                        case 'Radio':
                            return <FormField fieldConfig={fieldConfig} {...commonProps}/>;
                        case 'Selection':
                            return <SelectionField fieldConfig={fieldConfig} {...commonProps}/>;
                        case 'Text':
                            return <TextField fieldConfig={fieldConfig} {...commonProps}/>;
                        default:
                            return <React.Fragment key={fieldIndex}/>;
                    }
                })}
            </div>
            <div className='block absolute bottom-0 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 my-6'>
                <ButtonRow center>
                    <Button
                        text='Prev' onClick={previousField}
                        visible={!isFirstField()}
                    />
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
                    <Button
                        text='Next' onClick={nextField}
                        visible={!isLastField()}
                    />
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

const SurveyForm = connect(mapStateToProps, mapDispatchToProps)(SurveyFormComponent);

export default SurveyForm;
