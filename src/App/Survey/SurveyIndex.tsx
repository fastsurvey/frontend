import React from 'react';
import {ConfigInterface} from '../../utilities/fieldTypes';
import {ReduxStore} from '../../utilities/reduxTypes';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Button from '../../Components/Button';
import ButtonRow from '../../Components/ButtonRow';
import {getRootPath} from '../../utilities/pathFunctions';

interface SurveyIndexComponentProps {
    formConfig: ConfigInterface | undefined;
}

function SurveyIndexComponent(props: SurveyIndexComponentProps) {
    if (props.formConfig === undefined) {
        return <React.Fragment/>;
    }

    return (
        <div>
            <h2 className='mb-6 text-center'>{props.formConfig.title}</h2>

            <p className='mb-8'>{props.formConfig.description}</p>


            <ButtonRow center>
                <Link to={getRootPath(window.location.pathname) + '/form'}>
                    <Button text='Begin'/>
                </Link>
            </ButtonRow>
        </div>
    );
}

const mapStateToProps = (state: ReduxStore) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = () => ({});

const SurveyIndex = connect(mapStateToProps, mapDispatchToProps)(SurveyIndexComponent);

export default SurveyIndex;
