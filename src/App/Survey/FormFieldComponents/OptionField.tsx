import React from 'react';
import {ReduxStore} from '../../../utilities/reduxTypes';
import {connect} from 'react-redux';
import {FormDataInterface, OptionFieldConfig} from '../../../utilities/fieldTypes';
import {modifyData} from '../../../utilities/reduxActions';
import CheckboxOption from '../../../Components/CheckboxOption';
import QuestionTitleBox from './FieldParts/QuestionTitleBox';
import HintBox from './FieldParts/HintBox';

interface OptionFieldComponentProps {
    manipulated: boolean;
    fieldConfig: OptionFieldConfig;
    fieldData: string;
    modifyFieldData(newValue: boolean): void;
}

function OptionFieldComponent(props: OptionFieldComponentProps) {

    function handleChange(newChecked: boolean) {
        props.modifyFieldData(newChecked);
    }

    const value = props.fieldData;
    const isRequired = props.fieldConfig.properties.required;

    return (
        <React.Fragment>
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
        </React.Fragment>
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
