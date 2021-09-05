import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {filter} from 'lodash';
import {useHistory} from 'react-router-dom';
import {types} from '@types';

import {TimePill, SurveyField, IconButton} from '@components';
import {pathUtils, backend, reduxUtils} from '@utilities';

function SurveyFormPage(props: {
    formConfig: types.SurveyConfig | undefined;
    formData: types.FormData | undefined;
    formValidation: types.FormValidation | undefined;
    openMessage(message: types.Message): void;
}) {
    const {formConfig, formData, formValidation} = props;
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!formConfig || !formData || !formValidation) {
        return <div />;
    }

    const submittable =
        filter(props.formValidation, (x: boolean) => !x).length === 0;

    const onSubmit = () => {
        const success = () => {
            history.push(
                pathUtils.getRootPath(window.location.pathname) +
                    (formConfig.fields.filter(
                        (f) => f.type === 'email' && f.verify,
                    ).length > 0
                        ? '/verify'
                        : '/success'),
            );
        };

        const error = () => {
            // TODO: Think about error scenarios
            props.openMessage({
                text: 'Backend error',
                variant: 'error',
            });
        };

        if (submittable) {
            const {username, survey_name} = pathUtils.getPathId(
                window.location.pathname,
            );
            backend.postSubmission(
                username,
                survey_name,
                formData,
                success,
                error,
            );
        } else {
            props.openMessage({
                text: 'Please fill out all the fields first!',
                variant: 'error',
            });
        }
    };

    return (
        <div className='w-full max-w-xl space-y-4'>
            {formConfig.fields.map(
                (fieldConfig: types.SurveyField, fieldIndex: number) => (
                    <div key={fieldIndex}>
                        <SurveyField
                            fieldConfig={fieldConfig}
                            fieldIndex={fieldIndex}
                        />
                    </div>
                ),
            )}
            <div className='centering-row'>
                <TimePill config={formConfig} />
                <div className='flex-max' />
                <IconButton text='Submit' onClick={onSubmit} />
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
    formData: state.formData,
    formValidation: state.formValidation,
});

const mapDispatchToProps = (dispatch: any) => ({
    openMessage: reduxUtils.dispatchers.openMessage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyFormPage);
