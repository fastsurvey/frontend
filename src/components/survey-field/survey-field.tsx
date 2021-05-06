import {icons} from 'assets/icons';
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
        <div className='w-full overflow-hidden rounded shadow-md centering-col'>
            <div className='w-full p-6 bg-white centering-col'>
                <div className='w-full text-2xl text-left text-black font-weight-600'>
                    {fieldIndex + 1}. {fieldConfig.title}
                </div>
                <div className='w-full mt-3 text-grey-900 markdown font-weight-500'>
                    {fieldConfig.description}
                </div>
                {JSON.stringify(fieldConfig)},{' '}
                {JSON.stringify(formData[fieldIndex + 1])},{' '}
                {JSON.stringify(formValidation[fieldIndex + 1])}
            </div>
            <div
                className={
                    'w-full p-3 pr-6 text-justify flex-row-top space-x-2 ' +
                    (formValidation[fieldIndex + 1]
                        ? 'text-green-600 bg-green-100 '
                        : 'text-red-600 bg-red-100')
                }
            >
                <div
                    className={
                        'flex-shrink-0 w-6 h-6 ' +
                        (formValidation[fieldIndex + 1]
                            ? 'icon-green '
                            : 'icon-red ')
                    }
                >
                    {formValidation[fieldIndex + 1] ? icons.check : icons.close}
                </div>
                <div className='text-left flex-max font-weight-600 text-md'>
                    Hello there
                </div>
            </div>
        </div>
    );
}

export default SurveyField;
