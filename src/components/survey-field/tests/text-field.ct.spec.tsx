import React, {useState} from 'react';
import {types} from '/src/types';
import {mount} from '@cypress/react';
import {SurveyFieldComponent} from '../survey-field';
import '/src/styles/tailwind.out.css';
import {
    assertDataCy,
    getCySelector,
} from '../../../../cypress/support/utilities';

function State(props: {fieldConfig: types.TextField; fieldNumber: number}) {
    const [formData, modifyData] = useState({
        [props.fieldConfig.identifier]: '',
    });
    const [formValidation, modifyValidation] = useState({
        [props.fieldConfig.identifier]: props.fieldConfig.min_chars === 0,
    });

    return (
        <div className='w-full h-full px-4 py-8 bg-gray-100'>
            <SurveyFieldComponent
                {...{
                    formData,
                    modifyData,
                    formValidation,
                    modifyValidation,
                    ...props,
                }}
            />
        </div>
    );
}

function validationIsCorrect(props: {valid: boolean; contains: string}) {
    assertDataCy(
        getCySelector(['validation-bar'], {count: 1}),
        props.valid ? 'isvalid' : 'isinvalid',
    );
    getCySelector(['validation-bar'], {count: 1}).contains(props.contains);
}

it('works as expected', () => {
    mount(
        <State
            fieldConfig={{
                identifier: 4,
                type: 'text',
                description: '<description>',
                min_chars: 4,
                max_chars: 10,
            }}
            fieldNumber={4}
        />,
    );
    cy.get('h2').contains('4. <description>').should('have.length', 1);
    validationIsCorrect({
        valid: false,
        contains: '4 characters below minimum (4)',
    });
    cy.get('textarea').should('have.length', 1).type('123');
    validationIsCorrect({
        valid: false,
        contains: '1 character below minimum (4)',
    });
    cy.get('textarea').type('4');
    validationIsCorrect({valid: true, contains: 'Valid'});
    cy.get('textarea').type('567890');
    validationIsCorrect({valid: true, contains: 'Valid'});
    cy.get('textarea').type('1');
    validationIsCorrect({
        valid: false,
        contains: '1 character above maximum (10)',
    });
    cy.get('textarea').type('23');
    validationIsCorrect({
        valid: false,
        contains: '3 characters above maximum (10)',
    });
});
