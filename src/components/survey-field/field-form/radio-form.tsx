import React from 'react';
import {types} from 'types';
import {filter, mapValues} from 'lodash';

function RadioForm(props: {
    fieldConfig: types.RadioField;
    fieldIndex: number;
    formData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, formData} = props;

    const toggle = (optionIndex: number) => () => {
        const oldFieldData: any = formData[fieldIndex + 1];
        const newValue: boolean = !oldFieldData[optionIndex + 1];
        let newFieldData: any;

        if (newValue) {
            newFieldData = {
                ...mapValues(oldFieldData, () => false),
                [optionIndex + 1]: true,
            };
        } else {
            newFieldData = {
                ...oldFieldData,
                [optionIndex + 1]: false,
            };
        }

        props.modifyFieldData(newFieldData);
        props.modifyFieldValidation(filter(newFieldData).length === 1);
    };

    return (
        <>
            <div className='w-full mb-2 text-2xl text-left text-black font-weight-600'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.fields.map((fieldOption, optionIndex: number) => (
                <div
                    className={
                        'w-full mt-3 space-x-2 flex-row-left no-selection ' +
                        'ring rounded px-4 py-2 cursor-pointer ' +
                        'font-weight-600 text-base hover:bg-grey-050 ' +
                        (formData[fieldIndex + 1][optionIndex + 1]
                            ? 'ring-blue-300 text-gray-800 '
                            : 'ring-grey-100 text-gray-500 ')
                    }
                    onClick={toggle(optionIndex)}
                >
                    {fieldOption.title}
                </div>
            ))}
        </>
    );
}

export default RadioForm;
