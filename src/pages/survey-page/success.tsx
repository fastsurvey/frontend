import React from 'react';
import {types} from '@types';
import {connect} from 'react-redux';
import {VisualTextCard, VisualInfoCard} from '@components';

function SurveySuccessPage(props: {
    formConfig: types.SurveyConfig | undefined;
}) {
    if (!props.formConfig) {
        return <div />;
    }

    const config: types.SurveyConfig = props.formConfig;

    if (config.authentication === 'email') {
        return (
            <div className='w-full max-w-xl space-y-4'>
                <VisualTextCard title={'Success!'}>
                    Your submission is now verified. Thank you for using{' '}
                    <strong className='font-weight-600'>FastSurvey!</strong>
                </VisualTextCard>
                <VisualInfoCard variant='change-later' />
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
