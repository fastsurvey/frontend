
import React from 'react';
import { ConfigInterface } from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';

interface SurveyFormComponentProps {
    formConfig: ConfigInterface | undefined;
}

function SurveyFormComponent(props: SurveyFormComponentProps) {
    if (props.formConfig === undefined) {
        return <React.Fragment/>;
    }

    return (
        <React.Fragment>
            Survey Form
        </React.Fragment>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = () => ({
});

const SurveyForm = connect(mapStateToProps, mapDispatchToProps)(SurveyFormComponent);

export default SurveyForm;
