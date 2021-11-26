describe('The Landing Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });

    it('contains five sections', () => {
        cy.get('main').children().should('have.length', 5);
    });

    it('contains three content sections', () => {
        cy.get('h2').contains('how does it work?').should('have.length', 1);
        cy.get('h2')
            .contains('pricing should be transparent and fair')
            .should('have.length', 1);
        cy.get('h2')
            .contains('frequently asked questions')
            .should('have.length', 1);
    });

    it('has a working demo image slider', () => {
        cy.get('h2')
            .contains('how does it work?')
            .parents('.grid')
            .as('demoSection');

        cy.get('@demoSection').children().should('have.length', 2);
        cy.get('@demoSection')
            .find('img')
            .parent()
            .find('button')
            .should('have.length', 2)
            .as('imageButtons');

        cy.get('@demoSection')
            .children()
            .first()
            .find('button')
            .parent()
            .children()
            .should('have.length', 3)
            .as('listButtons');

        // make sure list buttons work
        cy.get('@listButtons').first().should('have.class', 'bg-gray-700');
        cy.get('@listButtons')
            .first()
            .next()
            .click()
            .should('have.class', 'bg-gray-700');
        cy.get('@listButtons')
            .first()
            .click()
            .should('have.class', 'bg-gray-700');

        // make sure image buttons work
        cy.get('@imageButtons').first().click();
        cy.get('@listButtons').last().should('have.class', 'bg-gray-700');
        cy.get('@imageButtons').last().click();
        cy.get('@listButtons').first().should('have.class', 'bg-gray-700');
    });
});
