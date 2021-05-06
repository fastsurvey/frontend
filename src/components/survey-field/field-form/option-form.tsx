import React from 'react';
import {types} from 'types';
import {icons} from '../../../assets/icons/index';

function OptionForm(props: {
    fieldConfig: types.SurveyField;
    fieldIndex: number;
    formData: types.FormData;
}) {
    const {fieldConfig, fieldIndex, formData} = props;

    return (
        <>
            <div className='w-full text-2xl text-left text-black font-weight-600'>
                {fieldIndex + 1}. {fieldConfig.title}
            </div>
            <div className='w-full mt-3 space-x-2 flex-row-left'>
                <div className='flex-shrink-0 w-10 h-10 p-1.5 cursor-pointer'>
                    {formData[fieldIndex + 1]
                        ? icons.checkboxFilled
                        : icons.checkboxEmpty}
                </div>
                <div className='w-full text-grey-900 markdown font-weight-500'>
                    {fieldConfig.description}
                </div>
            </div>
        </>
    );
}

export default OptionForm;
