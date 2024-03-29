import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {types} from '/src/types';

import {SurveyTitleCard, TimePill, Button} from '/src/components';
import {pathUtils, reduxUtils} from '/src/utilities';

function SurveyIndexPage(props: {
    formConfig: types.SurveyConfig | undefined;
    openMessage(m: types.MessageId): void;
}) {
    const renderable = props.formConfig !== undefined;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [renderable]);

    if (!props.formConfig) {
        throw 'Routing error, rendering page with undefined formConfig';
    }

    const config: types.SurveyConfig = props.formConfig;

    const now: number = new Date().getTime() / 1000;
    const isOpen =
        config.fields !== undefined &&
        config.start !== null &&
        now > config.start &&
        (config.end === null || now < config.end);

    return (
        <div className={'w-full max-w-xl space-y-4 flex-col-top pb-16 pt-4'}>
            <SurveyTitleCard
                title={config.title}
                surveyRequiresVerification={
                    config.fields !== undefined &&
                    config.fields.filter((f) => f.type === 'email' && f.verify)
                        .length > 0
                }
            />
            <div className='w-full flex-row-top'>
                <TimePill config={config} />
                <div className='flex-grow' />
                {isOpen && (
                    <Button
                        text='Start'
                        to={
                            pathUtils.getRootPath(window.location.pathname) +
                            '/form'
                        }
                    />
                )}
                {!isOpen && (
                    <Button
                        text='Start'
                        onClick={() => props.openMessage('error-timing')}
                    />
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({
    openMessage: reduxUtils.dispatchers.openMessage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyIndexPage);
