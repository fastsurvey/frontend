import React, {useState} from 'react';
import {types} from '/src/types';
import {mount} from '@cypress/react';
import {SurveyFieldComponent} from '../survey-field';
import '/src/styles/tailwind.out.css';

function State(props: {fieldConfig: types.RadioField; fieldIndex: number}) {
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
    // TODO: Test the validation message text, not only the color
    cy.get('div')
        .contains(props.contains)
        .should('have.length', 1)
        .parent()
        .should('have.class', props.valid ? 'text-green-900' : 'text-red-900')
        .find('svg')
        .should('have.length', 1)
        .parent()
        .should(
            'have.class',
            props.valid ? 'icon-dark-green' : 'icon-dark-red',
        );
}

function selectionIsCorrect(props: {[key: number]: boolean}) {
    Object.keys(props).forEach((n) => {
        cy.get('button')
            .contains(`<option ${parseInt(n) + 1}>`)
            .find('svg')
            .should('have.length', props[parseInt(n)] ? 1 : 0);
    });
}

it('works as expected', () => {
    mount(
        <State
            fieldConfig={{
                identifier: 2,
                type: 'radio',
                title: '<title>',
                description: '<description>',
                options: ['<option 1>', '<option 2>', '<option 3>'],
            }}
            fieldIndex={32}
        />,
    );
    cy.get('h2').contains('33. <title>');

    cy.get('button').should('have.length', 3);
    validationIsCorrect({
        valid: false,
        contains: 'Please choose one',
    });
    selectionIsCorrect({0: false, 1: false, 2: false});

    cy.get('button').first().click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect({0: true, 1: false, 2: false});

    cy.get('button').first().click();
    validationIsCorrect({
        valid: false,
        contains: 'Please choose one',
    });
    selectionIsCorrect({0: false, 1: false, 2: false});

    cy.get('button').contains('<option 3>').click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect({0: false, 1: false, 2: true});

    cy.get('button').contains('<option 2>').click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect({0: false, 1: true, 2: false});

    cy.get('button').contains('<option 2>').click();
    validationIsCorrect({
        valid: false,
        contains: 'Please choose one',
    });
    selectionIsCorrect({0: false, 1: false, 2: false});
});
