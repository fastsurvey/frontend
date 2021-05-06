import React, {useEffect} from 'react';
import {types} from 'types';
import {connect} from 'react-redux';
import TimePill from 'components/time-pill/time-pill';
import {pathUtils, backend} from 'utilities';
import Button from 'components/button/button';
import SurveyField from 'components/survey-field';
import {filter} from 'lodash';
import {useHistory} from 'react-router-dom';
import reduxUtils from '../../utilities/redux-utils/index';

function SurveyFormPage(props: {
    formConfig: types.SurveyConfig | undefined;
    formData: types.FormData | undefined;
    formValidation: types.FormValidation | undefined;
    openMessage(message: types.Message): void;
}) {
    const {formConfig, formData, formValidation} = props;
    const renderable = formConfig && formData && formValidation;
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [renderable]);

    // duplicate expression necessary for typescript inference
    if (!formConfig || !formData || !formValidation) {
        return <div />;
    }

    const submittable =
        filter(props.formValidation, (x: boolean) => !x).length === 0;

    const onSubmit = () => {
        const success = () => {
            history.push(
                pathUtils.getRootPath(window.location.pathname) +
                    (formConfig.authentication === 'email'
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
            // TODO: Show error message -> "Fill out all fields"
        }
    };

    return (
        <div className='w-full max-w-xl space-y-8'>
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
                <button
                    className={
                        'focus:outline-none ring ring-transparent rounded ' +
                        (submittable
                            ? 'focus:ring-blue-300 '
                            : 'focus:ring-grey-300 ')
                    }
                    onClick={onSubmit}
                >
                    <Button text='Submit' notAllowed={!submittable} />
                </button>
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
