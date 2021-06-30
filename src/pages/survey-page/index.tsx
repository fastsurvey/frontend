import React, {useEffect} from 'react';
import {types} from 'types';
import {connect} from 'react-redux';
import VisualUserTextCard from 'components/text-card/visual-user-text-card';
import VisualInfoCard from 'components/info-card/visual-info-card';
import TimePill from 'components/time-pill/time-pill';
import {pathUtils} from 'utilities';
import {Link} from 'react-router-dom';
import Button from 'components/button/button';

function SurveyIndexPage(props: {formConfig: types.SurveyConfig | undefined}) {
    const renderable = props.formConfig !== undefined;
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [renderable]);

    if (!props.formConfig) {
        return <div />;
    }

    const config: types.SurveyConfig = props.formConfig;

    const now: number = new Date().getTime() / 1000;
    const isOpen = now > config.start && now < config.end;

    return (
        <div className='w-full max-w-xl space-y-4'>
            <VisualUserTextCard
                title={config.title}
                text={config.description}
            />
            {config.authentication !== 'open' && (
                <VisualInfoCard variant='email-auth' />
            )}
            <div className='centering-row'>
                <TimePill config={config} />
                <div className='flex-max' />
                {isOpen && (
                    <Link
                        to={
                            pathUtils.getRootPath(window.location.pathname) +
                            '/form'
                        }
                        className={
                            'focus:outline-none ring ring-transparent focus:ring-blue-300 rounded'
                        }
                    >
                        <Button text='Start' />
                    </Link>
                )}
                {!isOpen && (
                    <button
                        className={
                            'focus:outline-none ring ring-transparent focus:ring-grey-300 rounded'
                        }
                    >
                        <Button text='Start' notAllowed />
                    </button>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyIndexPage);
