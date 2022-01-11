import React, {useState} from 'react';
import {types} from '/src/types';
import {mount} from '@cypress/react';
import {SurveyFieldComponent} from '../survey-field';
import '/src/styles/tailwind.out.css';
import {
    assertDataCy,
    getCySelector,
} from '../../../../cypress/support/utilities';

function State(props: {
    fieldConfig: types.SelectionField;
    fieldNumber: number;
}) {
    const [formData, modifyData] = useState({
        [props.fieldConfig.identifier]: [],
    });
    const [formValidation, modifyValidation] = useState({
        [props.fieldConfig.identifier]: props.fieldConfig.min_select === 0,
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

function selectionIsCorrect(selectionState: boolean[]) {
    selectionState.forEach((ss, i) => {
        assertDataCy(
            getCySelector([`selection-option-${i}`], {count: 1}),
            ss ? 'isselected' : 'isnotselected',
        );
    });
}

it('works as expected', () => {
    mount(
        <State
            fieldConfig={{
                identifier: 2,
                type: 'selection',
                description: '<description>',
                options: ['<option 1>', '<option 2>', '<option 3>'],
                min_select: 0,
                max_select: 2,
            }}
            fieldNumber={2}
        />,
    );
    cy.get('h2').contains('2. <description>').should('have.length', 1);

    cy.get('button').should('have.length', 3);
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect([false, false, false]);

    cy.get('button').contains('<option 1>').click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect([true, false, false]);

    cy.get('button').contains('<option 2>').click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect([true, true, false]);

    cy.get('button').contains('<option 3>').click();
    validationIsCorrect({
        valid: false,
        contains: 'Select at most 2 options',
    });
    selectionIsCorrect([true, true, true]);

    cy.get('button').contains('<option 2>').click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect([true, false, true]);
});

it('works for min_select > 0', () => {
    mount(
        <State
            fieldConfig={{
                identifier: 2,
                type: 'selection',
                description: '<description>',
                options: ['<option 1>', '<option 2>', '<option 3>'],
                min_select: 2,
                max_select: 3,
            }}
            fieldNumber={2}
        />,
    );
    cy.get('h2').contains('2. <description>').should('have.length', 1);

    cy.get('button').should('have.length', 3);
    validationIsCorrect({
        valid: false,
        contains: 'Select at least 2 options',
    });
    selectionIsCorrect([false, false, false]);

    cy.get('button').contains('<option 1>').click();
    validationIsCorrect({
        valid: false,
        contains: 'Select at least 2 options',
    });
    selectionIsCorrect([true, false, false]);

    cy.get('button').contains('<option 2>').click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect([true, true, false]);

    cy.get('button').contains('<option 3>').click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect([true, true, true]);

    cy.get('button').contains('<option 2>').click();
    validationIsCorrect({
        valid: true,
        contains: 'Valid',
    });
    selectionIsCorrect([true, false, true]);
    cy.get('button').contains('<option 1>').click();
    validationIsCorrect({
        valid: false,
        contains: 'Select at least 2 options',
    });
    selectionIsCorrect([false, false, true]);
});
