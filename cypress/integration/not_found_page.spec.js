describe('The Not Found Page', () => {
    function backButtonIsWorking() {
        cy.get('main').find('button').should('have.length', 1);
        cy.get('main')
            .find('button')
            .first()
            .should('have.text', 'Back to Landing Page')
            .click();
        cy.url().should('eq', 'http://localhost:3000/');
    }
    it('works for 404s', () => {
        cy.visit('/some-unknown-url');
        cy.get('h1').should('have.text', '404: Page not found');
        backButtonIsWorking();
    });

    it('works for unknown surveys', () => {
        cy.visit('/blueberry/definitely-not-a-survey');
        cy.get('h1').should('have.text', '404: Survey not found');
        backButtonIsWorking();
    });
});
