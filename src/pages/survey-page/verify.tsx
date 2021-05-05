import React from 'react';
import {types} from 'types';
import {connect} from 'react-redux';
import VisualTextCard from 'components/text-card/visual-text-card';
import VisualInfoCard from '../../components/info-card/visual-info-card';

function SurveyVerifyPage(props: {formConfig: types.SurveyConfig | undefined}) {
    if (!props.formConfig) {
        return <div />;
    }

    const config: types.SurveyConfig = props.formConfig;

    return (
        <div className='w-full max-w-xl space-y-4'>
            <VisualTextCard title={'Verify now!'}>
                Please log into your email account and click on the verification
                link in the email <strong>"FastSurvey Submission"</strong>.
            </VisualTextCard>
            <VisualInfoCard variant='change-later' />
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyVerifyPage);
