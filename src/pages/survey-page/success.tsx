import React from 'react';
import {types} from 'types';
import {connect} from 'react-redux';
import VisualTextCard from 'components/text-card/visual-text-card';
import VisualInfoCard from '../../components/info-card/visual-info-card';

const ColoredText = (props: {children: React.ReactNode; good?: boolean}) => (
    <div className='relative inline-block'>
        <div className='relative z-10 block text-black font-weight-500'>
            {props.children}
        </div>
        <div
            className={
                'absolute block bottom-[0.3125rem] left-0 z-0 w-full h-1.5 ' +
                (props.good ? 'bg-green-100 ' : 'bg-red-100 ')
            }
        />
    </div>
);

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
