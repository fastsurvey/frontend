import * as utilities from '../support/utilities';

const {getCySelector, assertDataCy} = utilities;
const get = getCySelector;

const elements = {
    sectionIntro: () => get(['landing-section-intro'], {count: 1}),
    sectionWhy: () => get(['landing-section-why'], {count: 1}),
    sectionDemo: () => get(['landing-section-demo'], {count: 1}),
    sectionPricing: () => get(['landing-section-pricing'], {count: 1}),
    sectionQuestions: () => get(['landing-section-faq'], {count: 1}),
    sectionLinks: () => get(['landing-section-links'], {count: 1}),

    demoButton: (index: number) =>
        get(['landing-section-demo', `button-step-${index}`], {count: 1}),
};

describe('The Landing Page', () => {
    it('successfully loads, contains all sections', () => {
        cy.visit('/');
        elements.sectionIntro();
        elements.sectionWhy();
        elements.sectionDemo();
        elements.sectionPricing();
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
});
