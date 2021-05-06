import React from 'react';
import {types} from 'types';
import {connect} from 'react-redux';
import TimePill from 'components/time-pill/time-pill';
import {pathUtils} from 'utilities';
import {Link} from 'react-router-dom';
import Button from 'components/button/button';
import SurveyField from 'components/survey-field/survey-field';

function SurveyFormPage(props: {
    formConfig: types.SurveyConfig | undefined;
    formData: types.FormData | undefined;
    formValidation: types.FormValidation | undefined;
}) {
    const {formConfig, formData, formValidation} = props;
    if (!formConfig || !formData || !formValidation) {
        return <div />;
    }

    return (
        <div className='w-full max-w-xl space-y-4'>
            {formConfig.fields.map(
                (fieldConfig: types.SurveyField, fieldIndex: number) => (
                    <div key={fieldIndex}>
                        <SurveyField
                            {...{
                                fieldConfig,
                                fieldIndex,
                                formData,
                                formValidation,
                            }}
                        />
                    </div>
                ),
            )}
            <div className='centering-row'>
                <TimePill config={formConfig} />
                <div className='flex-max' />
                <Link
                    to={
                        pathUtils.getRootPath(window.location.pathname) +
                        (formConfig.authentication === 'email'
                            ? '/verify'
                            : '/success')
                    }
                >
                    <Button text='Submit' />
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
    formData: state.formData,
    formValidation: state.formValidation,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyFormPage);
