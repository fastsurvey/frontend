
import React from 'react';
import { ConfigInterface } from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';

interface SurveyIndexComponentProps {
    formConfig: ConfigInterface | undefined;
}

function SurveyIndexComponent(props: SurveyIndexComponentProps) {
    if (props.formConfig === undefined) {
        return <React.Fragment/>;
    }

    return (
        <React.Fragment>
            Survey Index
        </React.Fragment>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = () => ({
});

const SurveyIndex = connect(mapStateToProps, mapDispatchToProps)(SurveyIndexComponent);

export default SurveyIndex;
