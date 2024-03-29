import React, {useState} from 'react';
import {types} from '/src/types';
import {mount} from '@cypress/react';
import {SurveyFieldComponent} from '../survey-field';
import '/src/styles/tailwind.out.css';
import {
    assertDataCy,
    getCySelector,
} from '../../../../cypress/support/utilities';

function State(props: {fieldConfig: types.EmailField; fieldNumber: number}) {
    const [formData, modifyData] = useState({
        [props.fieldConfig.identifier]: '',
    });
    const [formValidation, modifyValidation] = useState({
        [props.fieldConfig.identifier]: false,
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

it('works as for any email', () => {
    mount(
        <State
            fieldConfig={{
                identifier: 4,
                type: 'email',
                description: '<description>',
                hint: '<hint>',
                regex: '.*',
                verify: false,
            }}
            fieldNumber={8}
        />,
    );
    cy.get('h2').contains('8. <description>').should('have.length', 1);
    validationIsCorrect({
        valid: false,
        contains: 'Not a valid email',
    });
    cy.get('input').should('have.length', 1).type('123');
    validationIsCorrect({
        valid: false,
        contains: 'Not a valid email',
    });
    cy.get('input').should('have.length', 1).type('@g');
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
});

it('works as for specific emails', () => {
    mount(
        <State
            fieldConfig={{
                identifier: 4,
                type: 'email',
                description: '<description>',
                hint: '<hint>',
                regex: '[a-z]{6}@somedomain.(de|com)',
                verify: false,
            }}
            fieldNumber={8}
        />,
    );
    cy.get('h2').contains('8. <description>');
    validationIsCorrect({
        valid: false,
        contains: 'Not a valid email',
    });
    cy.get('input').should('have.length', 1).type('123');
    validationIsCorrect({
        valid: false,
        contains: 'Not a valid email',
    });
    cy.get('input').should('have.length', 1).type('@g');
    validationIsCorrect({
        valid: false,
        contains: '<hint>',
    });
    cy.get('input').clear().type('abcdef@somedomain.de');
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    cy.get('input').clear().type('abcdef@somedomain.com');
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    cy.get('input').clear().type('abcdef@somedomain.ru');
    validationIsCorrect({
        valid: false,
        contains: '<hint>',
    });
});
