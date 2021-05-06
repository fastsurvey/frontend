import React from 'react';
import {connect} from 'react-redux';
import {types} from 'types';

function SurveyField(props: {
    fieldConfig: types.SurveyField;
    fieldIndex: number;
    formData: types.FormData;
    formValidation: types.FormValidation;
}) {
    const {fieldConfig, fieldIndex, formData, formValidation} = props;

    return (
        <div className='w-full p-6 bg-white rounded shadow-md centering-col'>
            <div className='text-2xl text-black font-weight-600'>
                {fieldConfig.title}
            </div>
            <div className='w-full mt-3 text-grey-900 markdown font-weight-500'>
                {fieldConfig.description}
            </div>
            {JSON.stringify(fieldConfig)},{' '}
            {JSON.stringify(formData[fieldIndex + 1])},{' '}
            {JSON.stringify(formValidation[fieldIndex + 1])}
        </div>
    );
}

export default SurveyField;
