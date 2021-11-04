describe('The Page Header', () => {
    function switchToLight() {
        cy.root()
            .get('header')
            .find('button')
            .contains('light')
            .should('have.length', 1)
            .click({force: true});
    }

    function switchToDark() {
        cy.root()
            .get('header')
            .find('button')
            .contains('dark')
            .should('have.length', 1)
            .click({force: true});
    }

    function assertLightBackground() {
        cy.root()
            .get('main')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(241, 245, 249)');
    }

    function assertDarkBackground() {
        cy.root()
            .get('main')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(15, 23, 42)');
    }

    it('has a working logo link', () => {
        cy.visit('/some-unknown-url');
        cy.get('header').find('a').should('have.text', 'FastSurvey').click();
        cy.url().should('eq', 'http://localhost:3000/');
    });

    it('has working dark mode toggles', () => {
        cy.visit('/some-unknown-url');
        cy.root()
            .get('header')
            .find('button:visible')
            .should('have.length', 1)
            .parents('.group')
            .find('button')
            .should('have.length', 5);

        switchToLight();
        assertLightBackground();

        switchToDark();
        assertDarkBackground();
    });

    it('stores the dark mode state in cookie', () => {
        cy.visit('/some-unknown-url');

        switchToLight();
        assertLightBackground();
        cy.visit('/some-unknown-url'); // reload page
        assertLightBackground();

        switchToDark();
        assertDarkBackground();
        cy.visit('/some-unknown-url'); // reload page
        assertDarkBackground();
    });
});
