import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {types} from '/src/types';
import {LoadingText, Survey404Text} from '/src/components';
import {formUtils, reduxUtils, pathUtils} from '/src/utilities';
import {Switch, Route} from 'react-router-dom';

import SurveyIndexPage from '/src/pages/survey-page/index';
import SurveyFormPage from '/src/pages/survey-page/form';
import SurveyVerifyPage from '/src/pages/survey-page/verify';
import SurveySuccessPage from '/src/pages/survey-page/success';
import NotFoundPage from '/src/pages/not-found-page';

/*
This component manages the different view states on a survey page:
1. Displaying a loader while the config is not there yet
2. Displaying a 404 page when there is no config with this id
3. Triggering initializeFormData/initializeFormValidation once
   a config has been loaded
4. Rendering the child (form page) which can now expect a valid redux state
*/
function SurveyProvider(props: {
    fetching: boolean;
    formConfig: types.SurveyConfig | undefined;
    formData: types.FormData | undefined;
    formValidation: types.FormValidation | undefined;
    modifyData(formData: types.FormData): void;
    modifyValidation(formData: types.FormValidation): void;
}) {
    const {fetching, formConfig, formData, formValidation} = props;

    useEffect(() => {
        if (!fetching && formConfig && !formData && !formValidation) {
            const newFormData = formUtils.initializeFormData(formConfig);
            const newFormValidation = formUtils.initializeFormValidation(
                formConfig,
                newFormData,
            );
            props.modifyData(newFormData);
            props.modifyValidation(newFormValidation);
        }
        // eslint-disable-next-line
    }, [fetching, formConfig]);

    if (!fetching && !formConfig) {
        return <Survey404Text />;
    }

    if (fetching || !formConfig || !formData || !formValidation) {
        return <LoadingText />;
    }

    if (formConfig.fields === undefined) {
        return (
            <Switch>
                <Route
                    exact
                    path={pathUtils.regex.surveyRoot}
                    component={SurveyIndexPage}
                />
                <Route component={NotFoundPage} />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route
                    exact
                    path={pathUtils.regex.surveyRoot + ''}
                    component={SurveyIndexPage}
                />
                <Route exact path={pathUtils.regex.surveyRoot + '/form'}>
                    <SurveyFormPage
                        formConfig={formConfig}
                        formData={formData}
                        formValidation={formValidation}
                    />
                </Route>
                <Route
                    exact
                    path={pathUtils.regex.surveyRoot + '/verify'}
                    component={SurveyVerifyPage}
                />
                <Route
                    exact
                    path={pathUtils.regex.surveyRoot + '/success'}
                    component={SurveySuccessPage}
                />
            </Switch>
        );
    }
}

const mapStateToProps = (state: types.ReduxState) => ({
    fetching: state.fetching,
    formConfig: state.formConfig,
    formData: state.formData,
    formValidation: state.formValidation,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: reduxUtils.dispatchers.modifyData(dispatch),
    modifyValidation: reduxUtils.dispatchers.modifyValidation(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyProvider);
