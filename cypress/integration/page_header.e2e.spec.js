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
            .and('eq', 'rgb(233, 238, 244)');
    }

    function assertDarkBackground() {
        cy.root()
            .get('main')
            .should('have.css', 'background-color')
            .and('eq', 'rgb(11, 17, 31)');
    }

    it('has a working logo link', () => {
        cy.visit('/some-unknown-url');
        cy.get('header').find('a').should('have.text', 'FastSurvey').click();
        cy.location('pathname').should('eq', '/');
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
