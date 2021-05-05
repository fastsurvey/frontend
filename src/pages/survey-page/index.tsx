import React from 'react';
import {types} from 'types';
import {connect} from 'react-redux';

function SurveyIndexPage(props: {formConfig: types.SurveyConfig | undefined}) {
    if (!props.formConfig) {
        return <div />;
    }

    return <div>Hello there</div>;
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyIndexPage);
