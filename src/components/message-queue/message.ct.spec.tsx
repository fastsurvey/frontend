import React, {useState} from 'react';
import {types} from '/src/types';
import {mount} from '@cypress/react';
import {VisualMessage} from './visual-message';
import '/src/styles/tailwind.out.css';

function ComponentWrapper(props: {message: types.Message}) {
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && (
                <VisualMessage
                    message={props.message}
                    close={() => setVisible(false)}
                />
            )}
        </>
    );
}

it('message works as expected', () => {
    mount(
        <ComponentWrapper
            message={{
                id: 'error-config-change',
                randomToken: 0,
                text: 'test message 1',
                type: 'error',
            }}
        />,
    );
    cy.get('div').contains('test message 1').should('have.length', 1);
    cy.get('div')
        .contains('test message 1')
        .parent()
        .find('button')
        .should('have.length', 1)
        .should('have.class', 'fill-red-200')
        .click();

    cy.get('div').contains('test message 1').should('have.length', 0);
});
