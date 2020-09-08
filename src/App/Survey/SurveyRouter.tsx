import React from 'react';
import {ConfigInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import '../../styles/loader.scss';

interface SurveyRouterProps {
    children: React.ReactChild;
    fetching: boolean;
    formConfig: ConfigInterface | undefined;
}

function SurveyRouterComponent(props: SurveyRouterProps) {
    if (props.fetching) {
        return (
            <div className='lds-ripple'>
                <div/>
                <div/>
            </div>
        );
    } else if (props.formConfig === undefined) {
        return <React.Fragment>Nothing here</React.Fragment>;
    }

    return <React.Fragment>{props.children}</React.Fragment>;
}

const mapStateToProps = (state: ReduxStore) => ({
    fetching: state.fetching,
    formConfig: state.formConfig,
});

const SurveyRouter = connect(mapStateToProps, () => ({}))(SurveyRouterComponent);

export default SurveyRouter;
