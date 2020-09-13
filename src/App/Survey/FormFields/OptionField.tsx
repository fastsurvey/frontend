import React, {useState} from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import assert from 'assert';
import {FormDataInterface, OptionFieldConfig} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import CheckboxOption from '../../../Components/CheckboxOption';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface OptionFieldComponentProps {
    fieldIndex: number;
    visibleFieldIndex: number;
    setVisibleFieldIndex(newIndex: number): void;

    fieldConfig: OptionFieldConfig;

    formData: any;
    modifyData(formData: any): any;
}

function OptionFieldComponent(props: OptionFieldComponentProps) {

    assert(props.formData !== undefined);

    function handleChange(newChecked: boolean) {
        const newFormData: any = JSON.parse(JSON.stringify(props.formData));
        newFormData[(props.fieldIndex + 1).toString()] = newChecked;
        props.modifyData(newFormData);
    }

    let opacityClass = '';
    if (props.fieldIndex > props.visibleFieldIndex) {
        opacityClass = 'translate-y-100vh';
    } else if (props.fieldIndex < props.visibleFieldIndex) {
        opacityClass = '-translate-y-100vh';
    }

    const transitionClass = 'transition-transform duration-500';

    const value = props.formData[(props.fieldIndex + 1).toString()];
    const isRequired = props.fieldConfig.properties.required;

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
                />
                <div className='w-full block relative'>
                    <CheckboxOption
                        label={props.fieldConfig.description}
                        checked={value}
                        onChange={newChecked => handleChange(newChecked)}
                    />
                </div>
                <div className='relative block h-6 mb-1'>
                    {!isRequired && (
                        <HintBox
                            text={`You can leave this empty if you want`}
                            visible
                            hint
                        />
                    )}
                    {isRequired && (
                        <HintBox
                            text={`You have to select this option`}
                            visible={!value}
                        />
                    )}
                </div>
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

const OptionField = connect(mapStateToProps, mapDispatchToProps)(OptionFieldComponent);

export default OptionField;
