import React, {useEffect} from 'react';
import {ConfigInterface, FormDataInterface, FormValidationInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import '../../styles/loader.scss';
import {modifyData, modifyValidation} from '../../utilities/reduxActions';
import {generateInitialFormData, generateInitialFormValidation} from '../../utilities/communicationObjects';
import assert from 'assert';
import Loader from '../../Components/Loader';

interface SurveyViewControllerComponentProps {
    children: React.ReactChild;
    fetching: boolean;
    formConfig: ConfigInterface | undefined;
    formData: FormDataInterface | undefined;
    formValidation: FormValidationInterface | undefined;
    modifyData(formData: object): void;
    modifyValidation(formData: object): void;
}

function SurveyViewControllerComponent(props: SurveyViewControllerComponentProps) {

    useEffect(() => {
        if (
            (!props.fetching) &&
            (props.formConfig !== undefined) &&
            (props.formData === undefined) &&
            (props.formValidation === undefined)
        ) {
            props.modifyData(generateInitialFormData(props.formConfig));
            props.modifyValidation(generateInitialFormValidation(props.formConfig));
        }
    });

    if (props.fetching) {
        return <Loader/>;
    } else if (props.formConfig === undefined) {
        return <React.Fragment>Nothing here</React.Fragment>;
    } else if ([props.formData, props.formValidation].includes(undefined)) {
        return <Loader/>;
    }

    assert(!props.fetching);
    assert(props.formConfig !== undefined);
    assert(props.formData !== undefined);
    assert(props.formValidation !== undefined);

    console.debug({formValidation: props.formValidation});

    return <React.Fragment>{props.children}</React.Fragment>;
}

const mapStateToProps = (state: ReduxStore) => ({
    fetching: state.fetching,
    formConfig: state.formConfig,
    formData: state.formData,
    formValidation: state.formValidation,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: (formData: FormDataInterface) => dispatch(modifyData(formData)),
    modifyValidation: (formValidation: FormValidationInterface) => dispatch(modifyValidation(formValidation)),
});

const SurveyViewController = connect(mapStateToProps, mapDispatchToProps)(SurveyViewControllerComponent);

export default SurveyViewController;
