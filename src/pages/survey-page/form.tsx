import React, {useEffect, useMemo, useState} from 'react';
import {connect} from 'react-redux';
import {filter, initial, last, reduce} from 'lodash';
import {useHistory} from 'react-router-dom';
import {types} from '/src/types';

import {SurveyField, Button} from '/src/components';
import {pathUtils, backend, reduxUtils, eventUtils} from '/src/utilities';
import Pagination from '/src/components/pagination/pagination';

function SurveyFormPage(props: {
    formConfig: types.SurveyConfig | undefined;
    formData: types.FormData | undefined;
    formValidation: types.FormValidation | undefined;
    openMessage(m: types.MessageId): void;
}) {
    const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [paginationIsFixed, setPaginationIsFixed] = useState(true);

    const fieldGroups = useMemo(() => {
        let groups: types.SurveyField[][] = [];
        if (props.formConfig?.fields !== undefined) {
            groups = reduce(
                props.formConfig.fields,
                (acc: types.SurveyField[][], f) =>
                    f.type === 'break'
                        ? [...acc, []]
                        : // @ts-ignore
                          [...initial(acc), [...last(acc), f]],
                [[]],
            );
        }
        return groups;
    }, [props.formConfig]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageIndex]);

    function updatePaginationClass() {
        const footerElementRect = document
            .querySelector('footer')
            ?.getBoundingClientRect();
        if (footerElementRect !== undefined) {
            setPaginationIsFixed(
                footerElementRect.top >
                    (window.innerHeight ||
                        document.documentElement.clientHeight),
            );
        }
    }

    eventUtils.useEvent('scroll', updatePaginationClass);

    if (
        props.formConfig === undefined ||
        props.formConfig.fields === undefined ||
        props.formData === undefined ||
        props.formValidation === undefined
    ) {
        throw 'Routing error, rendering page with undefined formConfig';
    }

    // @ts-ignore
    const formConfig: types.FullSurveyConfig = props.formConfig;
    const formData: types.FormData = props.formData;
    const formValidation: types.FormValidation = props.formValidation;

    const submittable = filter(formValidation, (x: boolean) => !x).length === 0;

    const onSubmit = () => {
        setIsSubmitting(true);

        const success = () => {
            setIsSubmitting(false);

            const emailField: any = formConfig.fields.filter(
                (f) => f.type === 'email' && f.verify,
            )[0];

            history.push(
                pathUtils.getRootPath(window.location.pathname) +
                    (emailField !== undefined
                        ? `/verify?email=${formData[emailField.identifier]}`
                        : '/success'),
            );
        };

        const error = (type?: 'regex' | 'config') => {
            // TODO: Think about error scenarios
            if (type === 'config') {
                props.openMessage('error-config-change');
            } else {
                props.openMessage('error-server');
            }
            setIsSubmitting(false);
        };

        if (submittable) {
            const {username, survey_name} = pathUtils.getPathId(
                window.location.pathname,
            );
            backend.postSubmission(
                username,
                survey_name,
                formData,
                success,
                error,
            );
        } else {
            props.openMessage('warning-incomplete');
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div
                className={
                    'flex w-full max-w-xl space-y-4 flex-col-top ' +
                    'pb-18 sm:pb-16 md:pb-15'
                    // padding bottom for pagination bar
                }
            >
                {fieldGroups[pageIndex].map(
                    (fieldConfig, fieldIndex: number) => (
                        <>
                            {(fieldConfig.type === 'selection' ||
                                fieldConfig.type === 'text' ||
                                fieldConfig.type === 'email') && (
                                <SurveyField
                                    key={fieldIndex}
                                    fieldConfig={fieldConfig}
                                    fieldIndex={fieldIndex}
                                />
                            )}
                            {fieldConfig.type === 'markdown' && (
                                <div key={fieldIndex}>markdown</div>
                            )}
                        </>
                    ),
                )}
            </div>
            <div
                className={
                    'bottom-0 left-0 w-full py-4 shadow-lg bg-gray-50 flex-row-center ' +
                    (paginationIsFixed ? 'fixed ' : 'absolute')
                }
            >
                <div className='flex w-full max-w-xl'>
                    <Pagination
                        index={pageIndex}
                        setIndex={setPageIndex}
                        length={fieldGroups.length}
                    />
                    <div className='flex-max' />
                    <Button
                        text='Submit'
                        onClick={onSubmit}
                        loading={isSubmitting}
                    />
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formConfig: state.formConfig,
    formData: state.formData,
    formValidation: state.formValidation,
});

const mapDispatchToProps = (dispatch: any) => ({
    openMessage: reduxUtils.dispatchers.openMessage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyFormPage);
