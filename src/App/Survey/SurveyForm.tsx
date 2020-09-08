
import React from 'react';
import {ConfigInterface, FormDataInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import EmailField from './FormFields/EmailField';
import RadioField from './FormFields/RadioField';

interface SurveyFormComponentProps {
    formConfig: ConfigInterface | undefined;
    formData: FormDataInterface | undefined;
}

function SurveyFormComponent(props: SurveyFormComponentProps) {
    if ((props.formConfig === undefined) || (props.formData === undefined)) {
        return <React.Fragment/>;
    }

    return (
        <div className='display-block'>
            {props.formConfig.email_validation && <EmailField/>}
            {props.formConfig.fields.map((fieldConfig, fieldIndex) => {
                switch (fieldConfig.type) {
                    case 'Radio':
                        return (
                            <RadioField
                                key={fieldIndex}
                                fieldConfig={fieldConfig}
                                fieldIndex={fieldIndex}
                            />
                        );
                    default:
                        return <React.Fragment key={fieldIndex}/>;
                }
            })}
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
