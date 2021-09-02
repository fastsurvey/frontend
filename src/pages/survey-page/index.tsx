import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {types} from '@types';

import {
    VisualUserTextCard,
    VisualInfoCard,
    TimePill,
    Button,
    IconButton,
} from '@components';
import {pathUtils} from '@utilities';

function SurveyIndexPage(props: {formConfig: types.SurveyConfig | undefined}) {
    const renderable = props.formConfig !== undefined;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [renderable]);

    if (!props.formConfig) {
        return <div />;
    }

    const config: types.SurveyConfig = props.formConfig;

    const now: number = new Date().getTime() / 1000;
    const isOpen = now > config.start && now < config.end;

    return (
        <div className='w-full max-w-xl space-y-4'>
            <VisualUserTextCard
                title={config.title}
                text={config.description}
            />
            {config.authentication !== 'open' && (
                <VisualInfoCard variant='email-auth' />
            )}
            <div className='flex-row-top'>
                <TimePill config={config} />
                <div className='flex-max' />
                {isOpen && (
                    <IconButton
                        text='Start'
                        to={
                            pathUtils.getRootPath(window.location.pathname) +
                            '/form'
                        }
                    />
                )}
                {!isOpen && <IconButton text='Start' disabled />}
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyIndexPage);
