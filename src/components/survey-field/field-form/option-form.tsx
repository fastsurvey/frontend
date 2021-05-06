import React from 'react';
import {types} from 'types';

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
            <div className='w-full mt-3 text-grey-900 markdown font-weight-500'>
                {fieldConfig.description}
            </div>
            {JSON.stringify(fieldConfig)},{' '}
            {JSON.stringify(formData[fieldIndex + 1])},{' '}
        </>
    );
}

export default OptionForm;
