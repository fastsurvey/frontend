import React from 'react';
import {types} from 'types';
import {filter} from 'lodash';

function SelectionForm(props: {
    fieldConfig: types.SelectionField;
    fieldIndex: number;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, fieldData} = props;

    const toggle = (optionIndex: number) => () => {
        let newFieldData: any = {
            ...fieldData,
            [optionIndex + 1]: !fieldData[optionIndex + 1],
        };

        const newSelectionCount: number = filter(newFieldData).length;

        props.modifyFieldData(newFieldData);
        props.modifyFieldValidation(
            newSelectionCount >= fieldConfig.min_select &&
                newSelectionCount <= fieldConfig.max_select,
        );
    };

    return (
        <>
            <div className='w-full mb-2 text-xl text-left text-grey-900 font-weight-700'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.length > 0 && (
                <div className='w-full mb-4 text-base text-justify text-grey-500 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            <div className='w-full mt-0 mb-3 text-base leading-tight text-left text-grey-400 font-weight-500'>
                Select between {fieldConfig.min_select} and{' '}
                {fieldConfig.max_select} options.
            </div>
            {fieldConfig.fields.map((fieldOption, optionIndex: number) => (
                <button
                    key={optionIndex}
                    onClick={toggle(optionIndex)}
                    className={
                        'w-full mt-2 focus:outline-none focus:ring-blue-300 ' +
                        'ring hover:bg-grey-100 bg-grey-050 rounded ' +
                        (fieldData[optionIndex + 1]
                            ? 'ring-grey-300 focus:bg-grey-100 text-grey-900 '
                            : 'ring-transparent focus:ring-blue-300 text-grey-500 ')
                    }
                >
                    <div
                        className={
                            'w-full flex-row-left no-selection ' +
                            'px-4 py-2 cursor-pointer ' +
                            'font-weight-400 text-base '
                        }
                    >
                        {fieldOption.title}
                    </div>
                </button>
            ))}
        </>
    );
}

export default SelectionForm;
