import React from 'react';
import {connect} from 'react-redux';

import {types} from '/src/types';
import {VisualTextCard, VisualInfoCard} from '/src/components';

function SurveySuccessPage(props: {formConfig?: types.SurveyConfig}) {
    if (!props.formConfig || props.formConfig.fields === undefined) {
        throw 'Routing error, rendering page with undefined formConfig';
    }

    // @ts-ignore
    const config: types.FullSurveyConfig = props.formConfig;

    if (
        config.fields.filter((f) => f.type === 'email' && f.verify).length > 0
    ) {
        return (
            <div className='w-full max-w-xl space-y-4'>
                <VisualTextCard title={'Success!'}>
                    Your submission is now verified. Thank you for using{' '}
                    <strong className='font-weight-600'>FastSurvey!</strong>
                </VisualTextCard>
                <VisualInfoCard variant='success' />
            </div>
        );
    } else {
        return (
            <div className='w-full max-w-xl space-y-4'>
                <VisualTextCard title={'Success!'}>
                    Your submission has been counted. Thank you for using{' '}
                    <strong>FastSurvey!</strong>
                </VisualTextCard>
            </div>
        );
    }
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveySuccessPage);
