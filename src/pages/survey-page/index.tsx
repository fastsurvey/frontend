import React from 'react';
import {types} from 'types';
import {connect} from 'react-redux';
import VisualTextCard from 'components/text-card/visual-text-card';
import VisualInfoCard from '../../components/info-card/visual-info-card';
import TimePill from 'components/time-pill/time-pill';
import {pathUtils} from 'utilities';
import {Link} from 'react-router-dom';
import Button from 'components/button/button';

function SurveyIndexPage(props: {formConfig: types.SurveyConfig | undefined}) {
    if (!props.formConfig) {
        return <div />;
    }

    const config: types.SurveyConfig = props.formConfig;

    return (
        <div className='w-full max-w-xl space-y-4'>
            <VisualTextCard title={config.title} text={config.description} />
            {config.authentication !== 'email' && (
                <VisualInfoCard variant='email-auth' />
            )}
            <div className='centering-row'>
                <TimePill config={config} />
                <div className='flex-max' />
                <Link
                    to={
                        pathUtils.getRootPath(window.location.pathname) +
                        '/form'
                    }
                >
                    <Button text='Start' />
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyIndexPage);
