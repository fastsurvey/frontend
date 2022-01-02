import React from 'react';
import {connect} from 'react-redux';

import {types} from '/src/types';
import {SurveySuccessCard} from '/src/components';

function SurveySuccessPage(props: {formConfig?: types.SurveyConfig}) {
    if (!props.formConfig || props.formConfig.fields === undefined) {
        throw 'Routing error, rendering page with undefined formConfig';
    }

    // @ts-ignore
    const config: types.FullSurveyConfig = props.formConfig;

    return (
        <div className='w-full max-w-xl space-y-4'>
            <SurveySuccessCard
                surveyRequiresVerification={
                    config.fields.filter((f) => f.type === 'email' && f.verify)
                        .length > 0
                }
            />
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveySuccessPage);
