import React, {useState} from 'react';
import {types} from '/src/types';
import {mount} from '@cypress/react';
import {SurveyFieldComponent} from '../survey-field';
import '/src/styles/tailwind.out.css';

function State(props: {fieldConfig: types.OptionField; fieldIndex: number}) {
    const [formData, modifyData] = useState({
        [props.fieldConfig.identifier]: false,
    });
    const [formValidation, modifyValidation] = useState({
        [props.fieldConfig.identifier]: !props.fieldConfig.required,
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

function validationIsCorrect(props: {valid: boolean}) {
    cy.get('div')
        .contains(props.valid ? 'Valid' : 'Required')
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

it('works as expected', () => {
    mount(
        <State
            fieldConfig={{
                identifier: 4,
                type: 'option',
                title: '<title>',
                description: '<description>',
                required: true,
            }}
            fieldIndex={17}
        />,
    );
    cy.get('h2').contains('18. <title>').should('have.length', 1);
    validationIsCorrect({valid: false});
    cy.get('button').contains('<description>').click();
    validationIsCorrect({valid: true});
    cy.get('button').contains('<description>').click();
    validationIsCorrect({valid: false});
});
