import React from 'react';
import {types} from '/src/types';
import {icons} from '/src/assets/icons';

function SelectionForm(props: {
    fieldConfig: types.SelectionField;
    fieldData: any;

    modifyFieldData(newFieldData: any): void;
    modifyFieldValidation(valid: boolean): void;
}) {
    const {fieldConfig, fieldData} = props;

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
            {fieldConfig.options.map((fieldOption, optionIndex: number) => (
                <button
                    key={optionIndex}
                    onClick={toggle(fieldOption)}
                    className={
                        'w-full pl-2 pr-3 rounded flex flex-row items-stretch ' +
                        'space-x-2 font-weight-500 ' +
                        'py-2 my-[3px] text-sm relative ' +
                        'border ringable ' +
                        (fieldData.includes(fieldOption)
                            ? 'text-blue-900 border-blue-150 bg-blue-150'
                            : 'text-gray-600 border-gray-150 bg-gray-75 focus:border-gray-75')
                    }
                >
                    <div className={'flex flex-row items-center'}>
                        <div
                            className={`w-4.5 h-4.5 flex-shrink-0 ${
                                fieldData.includes(fieldOption)
                                    ? 'svg-toggle-true'
                                    : 'svg-toggle-false'
                            }`}
                        >
                            {icons.check}
                        </div>
                    </div>
                    <div
                        className={'text-left leading-snug hyphens break-words'}
                        style={{width: 'calc(100% - 1.625rem)'}}
                    >
                        {fieldOption}
                    </div>
                </button>
            ))}
        </>
    );
}

export default SelectionForm;
