import React from 'react';
import {types} from '@types';
import {filter, pull} from 'lodash';
import {icons} from '@assets/icons';

function RadioForm(props: {
    fieldConfig: types.RadioField;
    fieldIndex: number;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldIndex, fieldData} = props;

    const toggle = (fieldOption: string) => () => {
        let newFieldData: any = fieldData;

        if (fieldData === fieldOption) {
            newFieldData = '';
        } else {
            newFieldData = fieldOption;
        }

        props.modifyFieldData(newFieldData);
        props.modifyFieldValidation(newFieldData !== '');
    };

    return (
        <>
            <div className='w-full mb-0.5 text-lg text-left text-gray-700 font-weight-700'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            {fieldConfig.description.replace(' ', '').length > 0 && (
                <div className='w-full mt-0.5 mb-2 text-sm leading-tight text-justify text-gray-700 font-weight-500'>
                    {fieldConfig.description}
                </div>
            )}
            <div className='w-full mt-2 text-sm leading-tight text-left text-blue-800 font-weight-600'>
                Select 1 option
            </div>
            {fieldConfig.options.map((fieldOption, optionIndex: number) => (
                <button
                    key={optionIndex}
                    onClick={toggle(fieldOption)}
                    className={
                        'w-full mt-2 ringable rounded ' +
                        (fieldData === fieldOption
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
                        {fieldData === fieldOption && (
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

export default RadioForm;
