import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {SurveyVerifyCard, Button} from '/src/components';
import {pathUtils, backend, reduxUtils} from '/src/utilities';
import {types} from '/src/types';

function SurveyVerifyPage(props: {openMessage(m: types.MessageId): void}) {
    const email = new URLSearchParams(window.location.search).get('email');
    const token = new URLSearchParams(window.location.search).get('token');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const history = useHistory();

    const submitVerification = () => {
        setIsSubmitting(true);

        const success = () => {
            setIsSubmitting(false);
            history.push(
                pathUtils.getRootPath(window.location.pathname) + '/success',
            );
        };

        const error = (cose: 401 | 500) => {
            if (cose === 401) {
                props.openMessage('error-verification');
            } else {
                props.openMessage('error-server');
            }
            setIsSubmitting(false);
        };

        const {username, survey_name} = pathUtils.getPathId(
            window.location.pathname,
        );
        if (token !== null) {
            backend.postVerification(
                username,
                survey_name,
                token,
                success,
                error,
            );
        }
    };

    return (
        <div
            className={'flex w-full max-w-xl space-y-4 flex-col-top pb-16 pt-4'}
        >
            {token !== null && (
                <Button
                    text='verify submission'
                    onClick={submitVerification}
                    loading={isSubmitting}
                />
            )}
            {token === null && (
                <SurveyVerifyCard email={email === null ? undefined : email} />
            )}
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({});
const mapDispatchToProps = (dispatch: any) => ({
    openMessage: reduxUtils.dispatchers.openMessage(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SurveyVerifyPage);
