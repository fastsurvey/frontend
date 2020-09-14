import React, {useEffect} from 'react';
import {ConfigInterface, FormDataInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import '../../styles/loader.scss';
import {modifyData} from '../../utilities/reduxActions';
import {generateInitialFormData} from '../../utilities/communicationObjects';
import assert from 'assert';
import Loader from '../../Components/Loader';

interface SurveyViewControllerComponentProps {
    children: React.ReactChild;
    fetching: boolean;
    formConfig: ConfigInterface | undefined;
    formData: FormDataInterface | undefined;
    modifyData(formData: object): any;
}

function SurveyViewControllerComponent(props: SurveyViewControllerComponentProps) {

    useEffect(() => {
        if (
            (!props.fetching) &&
            (props.formConfig !== undefined) &&
            (props.formData === undefined)
        ) {
            props.modifyData(generateInitialFormData(props.formConfig));
        }
    });

    if (props.fetching) {
        return <Loader/>;
    } else if (props.formConfig === undefined) {
        return <React.Fragment>Nothing here</React.Fragment>;
    } else if (props.formData === undefined) {
        return <Loader/>;
    }

    assert(!props.fetching);
    assert(props.formConfig !== undefined);
    assert(props.formData !== undefined);

    return <React.Fragment>{props.children}</React.Fragment>;
}

const mapStateToProps = (state: ReduxStore) => ({
    fetching: state.fetching,
    formConfig: state.formConfig,
    formData: state.formData,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: (formData: FormDataInterface) => dispatch(modifyData(formData)),
});

const SurveyViewController = connect(mapStateToProps, mapDispatchToProps)(SurveyViewControllerComponent);

export default SurveyViewController;
