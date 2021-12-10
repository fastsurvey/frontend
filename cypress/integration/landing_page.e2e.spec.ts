import * as utilities from '../support/utilities';

const {getCySelector, assertDataCy} = utilities;
const get = getCySelector;

const elements = {
    sectionIntro: () => get(['landing-section-intro'], {count: 1}),
    sectionDemo: () => get(['landing-section-demo'], {count: 1}),
    sectionPricingForIndividuals: () =>
        get(['landing-section-pricing-for-individuals'], {count: 1}),
    sectionPricingForBusiness: () =>
        get(['landing-section-pricing-for-businesses'], {count: 1}),
    sectionQuestions: () => get(['landing-section-faq'], {count: 1}),
    sectionLinks: () => get(['landing-section-links'], {count: 1}),

    demoButton: (index: number) =>
        get(['landing-section-demo', `button-step-${index}`], {count: 1}),

    notifyContainer: () => get(['notify-at-launch'], {count: 1}),
    notifyEmail: () => get(['notify-at-launch', 'input-email'], {count: 1}),
    notifyEmailConfirmation: () =>
        get(['notify-at-launch', 'email-confirmation'], {count: 1}),
    notifySubmit: () => get(['notify-at-launch', 'button-submit'], {count: 1}),
    notifyTypo: () => get(['notify-at-launch', 'button-typo'], {count: 1}),
};

describe('The Landing Page', () => {
    it('successfully loads, contains all sections', () => {
        cy.visit('/');
        elements.sectionIntro();
        elements.sectionDemo();
        elements.sectionPricingForIndividuals();
        elements.sectionPricingForBusiness();
        elements.sectionQuestions();
        elements.sectionLinks();
    });

    it('has a working demo image slider', () => {
        const assertButtonState = (activeIndex: number) => {
            [0, 1, 2].forEach((i) =>
                assertDataCy(
                    elements.demoButton(i),
                    activeIndex === i ? 'isactive' : 'isinactive',
                ),
            );
        };

        elements.demoButton(0);
        elements.demoButton(1);
        elements.demoButton(2);
        assertButtonState(0);

        elements.demoButton(1).click();
        assertButtonState(1);

        elements.demoButton(1).click();
        assertButtonState(1);

        elements.demoButton(0).click();
        assertButtonState(0);

        elements.demoButton(2).click();
        assertButtonState(2);
    });

    it('has a working notify form', () => {
        const assertSubmitState = (
            state: 'not-submitted' | 'submitting' | 'submitted',
        ) => {
            assertDataCy(elements.notifyContainer(), `form-is-${state}`);
        };

        cy.intercept(
            'POST',
            '/users/fastsurvey/surveys/self-hosting-notification/submissions',
            (req) => {
                expect(req.body).to.deep.equal({
                    1: 'some@company.de',
                });
                req.reply({statusCode: 200});
            },
        );

        elements.notifyEmail().should('be.empty');
        assertSubmitState('not-submitted');

        elements.notifySubmit().click();
        assertSubmitState('not-submitted');

        elements.notifyEmail().type('some@');
        elements.notifySubmit().click();
        assertSubmitState('not-submitted');
        elements
            .notifyEmail()
            .type('company.de')
            .should('have.value', 'some@company.de');

        elements.notifySubmit().click();
        assertSubmitState('submitted');
        elements
            .notifyEmailConfirmation()
            .should('have.text', 'some@company.de');

        elements.notifyTypo().click();
        assertSubmitState('not-submitted');
        elements.notifyEmail().should('have.value', 'some@company.de');
    });
});
