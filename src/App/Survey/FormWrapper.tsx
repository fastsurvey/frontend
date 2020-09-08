import React from 'react';
import {ConfigInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import '../../styles/loader.scss';

interface FormWrapperProps {
    children: React.ReactChild;
    fetching: boolean;
    formConfig: ConfigInterface | undefined;
}

function FormWrapperComponent(props: FormWrapperProps) {
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

const FormWrapper = connect(mapStateToProps, () => ({}))(FormWrapperComponent);

export default FormWrapper;
