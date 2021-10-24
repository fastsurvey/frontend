import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {filter} from 'lodash';
import {useHistory} from 'react-router-dom';
import {types} from '/src/types';

import {TimePill, SurveyField, Button} from '/src/components';
import {pathUtils, backend, reduxUtils} from '/src/utilities';

function SurveyFormPage(props: {
    formConfig: types.SurveyConfig | undefined;
    formData: types.FormData | undefined;
    formValidation: types.FormValidation | undefined;
    openMessage(message: types.Message): void;
}) {
    const {formConfig, formData, formValidation} = props;
    const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!formConfig || !formData || !formValidation) {
        return <div />;
    }

    const submittable =
        filter(props.formValidation, (x: boolean) => !x).length === 0;

    const onSubmit = () => {
        setIsSubmitting(true);

        const success = () => {
            setIsSubmitting(false);

            const emailField: types.SurveyField | undefined =
                formConfig.fields.filter(
                    (f) => f.type === 'email' && f.verify,
                )[0];

            history.push(
                pathUtils.getRootPath(window.location.pathname) +
                    (emailField !== undefined
                        ? `/verify?email=${formData[emailField.identifier]}`
                        : '/success'),
            );
        };

        const error = (type?: 'regex' | 'config') => {
            // TODO: Think about error scenarios
            if (type === 'config') {
                props.openMessage({
                    text: 'Survey has been modified, please reload the page',
                    variant: 'error',
                });
            } else {
                props.openMessage({
                    text: 'Backend error',
                    variant: 'error',
                });
            }
            setIsSubmitting(false);
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
            setIsSubmitting(false);
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
                <Button
                    text='Submit'
                    onClick={onSubmit}
                    loading={isSubmitting}
                />
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
