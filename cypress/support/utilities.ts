import {join} from 'lodash';

export function getCySelector(
    selectors: string[],
    props?: {count?: number; invisible?: boolean},
): Cypress.Chainable<JQuery<HTMLElement>> {
    const grab = () =>
        cy.root().get(
            join(
                selectors.map((s) => `[data-cy*="${s}"]`),
                ' ',
            ) + (props?.invisible ? '' : ':visible'),
        );
    return props?.count !== undefined
        ? grab().should('have.length', props.count)
        : grab();
}

export function assertDataCy(
    element: Cypress.Chainable<JQuery<HTMLElement>>,
    dataCy: string,
) {
    element.should('have.attr', 'data-cy').and('include', dataCy);
}
