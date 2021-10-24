import React, {useState} from 'react';
import {types} from 'types';
import {mount} from '@cypress/react';
import {MessageComponent} from './message';
import '/src/styles/tailwind.out.css';

function ComponentWrapper(props: {message: types.Message | undefined}) {
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && (
                <MessageComponent
                    message={props.message}
                    closeMessage={() => setVisible(false)}
                />
            )}
        </>
    );
}

it('message works as expected', () => {
    mount(
        <ComponentWrapper
            message={{text: 'test message 1', variant: 'error'}}
        />,
    );
    cy.get('div')
        .contains('test message 1')
        .parent()
        .children()
        .should('have.length', 2);
    cy.get('div')
        .contains('test message 1')
        .parent()
        .find('button')
        .should('have.length', 1)
        .should('have.class', 'fill-red-200')
        .click();

    cy.get('div').contains('test message 1').should('have.length', 0);

    mount(
        <ComponentWrapper
            message={{text: 'test message 2', variant: 'success'}}
        />,
    );
    cy.get('div')
        .contains('test message 2')
        .parent()
        .children()
        .should('have.length', 2);
    cy.get('div')
        .contains('test message 2')
        .parent()
        .find('button')
        .should('have.length', 1)
        .should('have.class', 'fill-green-200');
});
