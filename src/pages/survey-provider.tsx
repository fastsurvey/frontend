import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {formUtils, reduxUtils} from 'utilities';
import assert from 'assert';
import {types} from 'types';
import LoadingText from 'components/loading-text/loading-text';
import Survey404Text from 'components/survey-404-text';

/*
This component manages the different view states on a survey page:
1. Displaying a loader while the config is not there yet
2. Displaying a 404 page when there is no config with this id
3. Triggering initializeFormData/initializeFormValidation once
   a config has been loaded
4. Rendering the child (form page) which can now expect a valid redux state
*/
function SurveyProvider(props: {
    children: React.ReactChild;
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
            props.modifyData(formUtils.initializeFormData(formConfig));
            props.modifyValidation(
                formUtils.initializeFormValidation(formConfig),
            );
        }
        // eslint-disable-next-line
    }, [fetching, formConfig]);

    if (!fetching && !formConfig) {
        return <Survey404Text />;
    }

    if (fetching || !formData || !formValidation) {
        return <LoadingText />;
    }

    assert(!fetching);
    assert(formConfig !== undefined);
    assert(formData !== undefined);
    assert(formValidation !== undefined);

    return <React.Fragment>{props.children}</React.Fragment>;
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
