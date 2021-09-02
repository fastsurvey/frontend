import React from 'react';
import {types} from '@types';
import {without} from 'lodash';
import {icons} from '../../../assets/icons/index';

function SelectionForm(props: {
    fieldConfig: types.SelectionField;
    fieldIndex: number;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, fieldData} = props;

    const toggle = (fieldOption: string) => () => {
        let newFieldData: any = fieldData;

        if (fieldData.includes(fieldOption)) {
            newFieldData = newFieldData.filter(
                (f: string) => f !== fieldOption,
            );
        } else {
            newFieldData.push(fieldOption);
        }

        props.modifyFieldData(newFieldData);
        props.modifyFieldValidation(
            newFieldData.length >= fieldConfig.min_select &&
                newFieldData.length <= fieldConfig.max_select,
        );
    };

    return (
        <>
            <div className='w-full mb-1 text-lg text-left text-gray-700 font-weight-700'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.length > 0 && (
                <div className='w-full mt-1 mb-2 text-sm text-justify text-gray-700 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            <div className='w-full mt-0 mb-3 text-sm leading-tight text-left text-gray-600 font-weight-500'>
                Select between {fieldConfig.min_select} and{' '}
                {fieldConfig.max_select} options.
            </div>
            {fieldConfig.options.map((fieldOption, optionIndex: number) => (
                <button
                    key={optionIndex}
                    onClick={toggle(fieldOption)}
                    className={
                        'w-full mt-2 ringable rounded ' +
                        (fieldData.includes(fieldOption)
                            ? 'bg-gray-100 text-gray-900 '
                            : 'bg-gray-200 text-gray-500 ')
                    }
                >
                    <div
                        className={
                            'w-full flex-row-left no-selection ' +
                            'pl-3 pr-2 py-2 cursor-pointer ' +
                            'font-weight-600 text-sm '
                        }
                    >
                        {fieldOption}
                        <div className='flex-grow' />
                        {fieldData.includes(fieldOption) && (
                            <div className='w-5 h-5 icon-blue'>
                                {icons.check}
                            </div>
                        )}
                    </div>
                </button>
            ))}
        </>
    );
}

export default SelectionForm;
