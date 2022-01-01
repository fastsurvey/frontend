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
    openMessage(m: types.MessageId): void;
}) {
    const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (
        props.formConfig === undefined ||
        props.formConfig.fields === undefined ||
        props.formData === undefined ||
        props.formValidation === undefined
    ) {
        throw 'Routing error, rendering page with undefined formConfig';
    }

    // @ts-ignore
    const formConfig: types.FullSurveyConfig = props.formConfig;
    const formData: types.FormData = props.formData;
    const formValidation: types.FormValidation = props.formValidation;

    const submittable = filter(formValidation, (x: boolean) => !x).length === 0;

    const onSubmit = () => {
        setIsSubmitting(true);

        const success = () => {
            setIsSubmitting(false);

            const emailField: any = formConfig.fields.filter(
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
                props.openMessage('error-config-change');
            } else {
                props.openMessage('error-server');
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
            props.openMessage('warning-incomplete');
            setIsSubmitting(false);
        }
    };

    return (
        <div className='w-full max-w-xl space-y-4'>
            {formConfig.fields
                .filter((f) => ['selection', 'text', 'email'].includes(f.type))
                .map((fieldConfig: any, fieldIndex: number) => (
                    <div key={fieldIndex}>
                        <SurveyField
                            fieldConfig={fieldConfig}
                            fieldIndex={fieldIndex}
                        />
                    </div>
                ))}
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
