import React, {useEffect, useMemo, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {every, filter, initial, last, reduce} from 'lodash';
import {useHistory} from 'react-router-dom';
import {types} from '/src/types';

import {SurveyField, Button, MarkdownContent} from '/src/components';
import {pathUtils, backend, reduxUtils} from '/src/utilities';
import Pagination from '/src/components/pagination/pagination';

function SurveyFormPage(props: {
    formConfig: types.SurveyConfig;
    formData: types.FormData;
    formValidation: types.FormValidation;
    openMessage(m: types.MessageId): void;
}) {
    const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [pageIndex, setPageIndex] = useState(0);
    const [paginationHintsVisible, setPaginationHintsVisible] = useState(false);

    const prevButtonRef = useRef<HTMLButtonElement>(null);
    const nextButtonRef = useRef<HTMLButtonElement>(null);

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
        return groups.filter((g) => g.length > 0);
    }, [props.formConfig]);

    const paginationHints = fieldGroups
        .map((g) =>
            g
                .filter((f) => f.type !== 'markdown')
                .map((f: any) => props.formValidation[f.identifier]),
        )
        .map((g) => every(g, Boolean));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pageIndex]);

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
            window.scrollTo(0, 0);
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
            setIsSubmitting(true);
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
            setPaginationHintsVisible(true);
            props.openMessage('error-incomplete');
        }
    };

    const identifierToOrder: any = reduce(
        props.formConfig.fields.filter((f) =>
            ['email', 'selection', 'text'].includes(f.type),
        ),
        (acc, f: any, i) => ({...acc, [f.identifier]: i + 1}),
        {},
    );

    return (
        <>
            <div
                className={
                    'flex w-full max-w-xl space-y-4 flex-col-top pb-16 pt-4'
                }
            >
                {pageIndex !== 0 && (
                    <button
                        ref={prevButtonRef}
                        onClick={() => {
                            setPageIndex(pageIndex - 1);
                            setTimeout(
                                () => nextButtonRef.current?.focus(),
                                50,
                            );
                        }}
                        className={
                            'mb-2 rounded px-3 py-2 md:px-2 md:py-1 ringable ' +
                            'text-base md:text-sm font-weight-600 text-blue-700 ' +
                            'bg-gray-50 hover:bg-white'
                        }
                    >
                        Previous Page
                    </button>
                )}
                {fieldGroups[pageIndex].map(
                    (fieldConfig, fieldIndex: number) => (
                        <>
                            {(fieldConfig.type === 'selection' ||
                                fieldConfig.type === 'text' ||
                                fieldConfig.type === 'email') && (
                                <SurveyField
                                    key={fieldConfig.identifier}
                                    fieldConfig={fieldConfig}
                                    fieldNumber={
                                        identifierToOrder[
                                            fieldConfig.identifier
                                        ]
                                    }
                                />
                            )}
                            {fieldConfig.type === 'markdown' && (
                                <MarkdownContent
                                    key={fieldIndex}
                                    content={fieldConfig.description}
                                />
                            )}
                        </>
                    ),
                )}
                {pageIndex !== fieldGroups.length - 1 && (
                    <button
                        ref={nextButtonRef}
                        onClick={() => {
                            setPageIndex(pageIndex + 1);
                            setTimeout(
                                () => prevButtonRef.current?.focus(),
                                50,
                            );
                        }}
                        className={
                            'mt-2 rounded px-3 py-2 md:px-2 md:py-1 ringable ' +
                            'text-base md:text-sm font-weight-600 text-blue-700 ' +
                            'bg-gray-50 hover:bg-white'
                        }
                    >
                        Next Page
                    </button>
                )}
            </div>
            <div
                className={
                    'bottom-0 left-0 w-full p-3 md:p-4 shadow-lg bg-gray-75 flex-row-center dark:bg-gray-800 fixed '
                }
            >
                <div className='flex w-full max-w-xl'>
                    {fieldGroups.length > 1 && (
                        <Pagination
                            index={pageIndex}
                            setIndex={setPageIndex}
                            length={fieldGroups.length}
                            hints={
                                paginationHintsVisible
                                    ? paginationHints
                                    : undefined
                            }
                        />
                    )}
                    <div className='flex-grow' />
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

const mapStateToProps = (state: types.ReduxState) => ({});

const mapDispatchToProps = (dispatch: any) => ({
    openMessage: reduxUtils.dispatchers.openMessage(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyFormPage);
