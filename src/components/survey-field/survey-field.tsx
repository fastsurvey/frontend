import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {types} from '/src/types';
import {icons} from '/src/assets/icons';
import {formUtils, reduxUtils} from '/src/utilities';

import SelectionForm from './field-form/selection-form';
import TextForm from './field-form/text-form';
import EmailForm from './field-form/email-form';

export function SurveyFieldComponent(props: {
    fieldConfig: types.QuestionField;
    fieldNumber: number;
    formData: any;
    formValidation: any;

    modifyData(newData: any): void;
    modifyValidation(newValidation: any): void;
}) {
    const {fieldConfig, fieldNumber, formData, formValidation} = props;
    const ref = useRef<HTMLDivElement>(null);

    const modifyFieldData = (newFieldData: any) => {
        props.modifyData({
            ...formData,
            [fieldConfig.identifier]: newFieldData,
        });
    };

    const modifyFieldValidation = (valid: boolean) => {
        props.modifyValidation({
            ...formValidation,
            [fieldConfig.identifier]: valid,
        });
    };

    let Component: any;
    switch (fieldConfig.type) {
        case 'email':
            Component = EmailForm;
            break;
        case 'selection':
            Component = SelectionForm;
            break;
        case 'text':
            Component = TextForm;
            break;
    }

    return (
        <div
            ref={ref}
            onFocus={() => {
                setTimeout(() => {
                    if (ref.current) {
                        const rect = ref.current.getBoundingClientRect();
                        if (rect.bottom > window.innerHeight) {
                            ref.current?.scrollIntoView();
                        }
                    }
                }, 50);
            }}
            className='z-10 w-full py-12 -my-12'
        >
            <div
                className={
                    'w-full overflow-hidden rounded shadow-sm ' +
                    'flex-col-center flex-shrink-0'
                }
            >
                <div
                    className={
                        'w-full px-2 py-2 lg:px-3 lg:py-3 ' +
                        'bg-white dark:bg-gray-700 centering-col'
                    }
                >
                    <h2
                        className={
                            'w-full mt-2 mb-2 md:mt-1 px-2 text-left ' +
                            'text-xl font-weight-700 leading-snug ' +
                            'text-black dark:text-white '
                        }
                    >
                        {fieldNumber}. {fieldConfig.description}
                    </h2>
                    <Component
                        fieldConfig={fieldConfig}
                        fieldData={formData[fieldConfig.identifier]}
                        modifyFieldData={modifyFieldData}
                        modifyFieldValidation={modifyFieldValidation}
                    />
                </div>
                <div
                    className={
                        'w-full flex flex-row items-stretch space-x-1.5 ' +
                        'px-3 text-justify border-t rounded-b ' +
                        'bg-gray-75 border-gray-150 ' +
                        'dark:bg-gray-800 dark:border-gray-600 ' +
                        (formValidation[fieldConfig.identifier]
                            ? 'text-green-800 dark:text-green-50 '
                            : 'text-red-800 dark:text-red-50 ')
                    }
                    data-cy={`validation-bar ${
                        formValidation[fieldConfig.identifier]
                            ? 'isvalid'
                            : 'isinvalid'
                    }`}
                >
                    <div className='flex flex-row items-center'>
                        <div
                            className={
                                'flex-shrink-0 w-2.5 h-2.5 ' +
                                (formValidation[fieldConfig.identifier]
                                    ? 'icon-validation-green '
                                    : 'icon-validation-red ')
                            }
                        >
                            {icons.circle}
                        </div>
                    </div>
                    <div className='py-2 text-base text-left md:text-sm font-weight-600'>
                        {formUtils.getFieldValidationMessage(
                            fieldConfig,
                            formData[fieldConfig.identifier],
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: types.ReduxState) => ({
    formData: state.formData,
    formValidation: state.formValidation,
});

const mapDispatchToProps = (dispatch: any) => ({
    modifyData: reduxUtils.dispatchers.modifyData(dispatch),
    modifyValidation: reduxUtils.dispatchers.modifyValidation(dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SurveyFieldComponent);
