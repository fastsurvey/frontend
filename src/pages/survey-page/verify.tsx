import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {VisualTextCard, VisualInfoCard, Button} from '/src/components';
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

    if (token !== null) {
        return (
            <div className='w-full max-w-xl space-y-4 flex-col-center '>
                <Button
                    text='verify submission'
                    onClick={submitVerification}
                    loading={isSubmitting}
                />
            </div>
        );
    }
    return (
        <div className='w-full max-w-xl space-y-4'>
            <VisualTextCard title={'Verify now!'}>
                Please log into your email account and click on the verification
                link in the email named <strong>"FastSurvey Submission"</strong>
            </VisualTextCard>
            <VisualInfoCard
                variant='verify'
                email={email === null ? undefined : email}
            />
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({});
const mapDispatchToProps = (dispatch: any) => ({
    openMessage: reduxUtils.dispatchers.openMessage(dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SurveyVerifyPage);
