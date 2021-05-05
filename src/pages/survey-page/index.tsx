import React from 'react';
import {types} from 'types';
import {connect} from 'react-redux';
import VisualTextCard from 'components/text-card/visual-text-card';
import VisualInfoCard from '../../components/info-card/visual-info-card';

const LIPSUM =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut placerat orci nulla pellentesque dignissim enim sit amet venenatis.\n Interdum velit euismod in pellentesque. Suspendisse interdum consectetur libero id faucibus. Commodo nulla facilisi nullam.';

function SurveyIndexPage(props: {formConfig: types.SurveyConfig | undefined}) {
    if (!props.formConfig) {
        return <div />;
    }

    const config: types.SurveyConfig = props.formConfig;

    return (
        <div className='w-full max-w-xl space-y-4'>
            <VisualTextCard title={config.title} text={LIPSUM} />
            {config.authentication !== 'email' && (
                <VisualInfoCard variant='email-auth' />
            )}
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyIndexPage);
