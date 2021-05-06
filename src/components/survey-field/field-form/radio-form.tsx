import React from 'react';
import {types} from 'types';
import {filter, mapValues} from 'lodash';

function RadioForm(props: {
    fieldConfig: types.RadioField;
    fieldIndex: number;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, fieldData} = props;

    const toggle = (optionIndex: number) => () => {
        const newValue: boolean = !fieldData[optionIndex + 1];
        let newFieldData: any;

        if (newValue) {
            newFieldData = {
                ...mapValues(fieldData, () => false),
                [optionIndex + 1]: true,
            };
        } else {
            newFieldData = {
                ...fieldData,
                [optionIndex + 1]: false,
            };
        }

        props.modifyFieldData(newFieldData);
        props.modifyFieldValidation(filter(newFieldData).length === 1);
    };

    return (
        <>
            <div className='w-full mb-2 text-xl text-left text-gray-900 font-weight-600'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.length > 0 && (
                <div className='w-full mb-4 text-base text-left text-gray-500 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            {fieldConfig.fields.map((fieldOption, optionIndex: number) => (
                <button
                    onClick={toggle(optionIndex)}
                    className={
                        'w-full mt-2 focus:outline-none ' +
                        'ring hover:bg-grey-050 rounded ' +
                        (fieldData[optionIndex + 1]
                            ? 'ring-blue-300 focus:ring-blue-500 text-gray-900 '
                            : 'ring-grey-100 focus:ring-grey-300 text-gray-500 ')
                    }
                >
                    <div
                        className={
                            'w-full flex-row-left no-selection ' +
                            'px-4 py-2 cursor-pointer ' +
                            'font-weight-600 text-base '
                        }
                    >
                        {fieldOption.title}
                    </div>
                </button>
            ))}
        </>
    );
}

export default RadioForm;
