import React, {useEffect} from 'react';
import {ConfigInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import '../../styles/loader.scss';
import {modifyData} from '../../utilities/reduxActions';
import {generateInitialFormData} from '../../utilities/communicationObjects';
import assert from 'assert';

interface SurveyViewControllerComponentProps {
    children: React.ReactChild;
    fetching: boolean;
    formConfig: ConfigInterface | undefined;
    formData: object | undefined;
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

    const loader = (
        (
            <div className='lds-ripple'>
                <div/>
                <div/>
            </div>
        )
    );

    if (props.formData === undefined) {
        return loader;
    } else if (props.formConfig === undefined) {
        return <React.Fragment>Nothing here</React.Fragment>;
    }

    assert(!props.fetching);
    assert(props.formConfig !== undefined);
    assert(props.formData !== undefined);

    console.debug({formData: props.formData});

    return <React.Fragment>{props.children}</React.Fragment>;
}

const mapStateToProps = (state: ReduxStore) => ({
    fetching: state.fetching,
    formConfig: state.formConfig,
    formData: state.formData,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: (formData: object) => dispatch(modifyData(formData)),
});

const SurveyViewController = connect(mapStateToProps, mapDispatchToProps)(SurveyViewControllerComponent);

export default SurveyViewController;
