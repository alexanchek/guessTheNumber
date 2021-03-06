// input cypress open to manage tests

const cases = [
    {expected: "123", actual: "123"},
    {expected: "12a", actual: "12"},
    {expected: "asdsads", actual: ""}
];

const BUTTON_TRY = "try-it";
const BUTTON_REFRESH = "refresh";
const INPUT_FIELD = "input-field";

const CASES_MESSAGES = [
    {expected: "Please, input a number from 1 to 10!"},
    {expected: "The number must be greater!"},
    {expected: "The number must be less!"},
    {expected: "You tried"}
]

const BIG_NUMBER = "1231234"

describe('Should be input and 2 buttons', () => {
    it ('should be an input', () => {
        cy.visit('/');
        cy.get(`[data-cy=${INPUT_FIELD}]`).should('be.enabled');
    });

    it(`should be a button called "let's try it!"`, () => {
        cy.get(`[data-cy=${BUTTON_TRY}]`).should('be.enabled');
    });

    it(`should be a button called "Please, refresh the number!"`, () => {
        cy.get(`[data-cy=${BUTTON_REFRESH}]`).should('be.enabled');
    });
});

describe('Gameplay testing', () => {
    it ('should enter only numbers, not any text', () => {
        const input = cy.get(`[data-cy=${INPUT_FIELD}]`);

        cases.map((element) => {
            input.type(element.expected);
            input.should('have.value', element.actual);
            console.log(`testcase is ${element.expected} and right answer should be ${element.actual ? element.actual : 'empty'} `)
            input.clear();
        });
    });

    it('Forbidden to enter number more than 10', () => {
        cy.get(`[data-cy=${INPUT_FIELD}]`).type(BIG_NUMBER);
        cy.get(`[data-cy=${BUTTON_TRY}]`).click();
        cy.findByText(/please, input a number from 1 to 10!/i).should('be.visible');
        cy.get(`[data-cy=${INPUT_FIELD}]`).clear();
    })

    it('Should count trials', () => {
        for (let i = 1; i <= 10; i++) {
            cy.get(`[data-cy=${INPUT_FIELD}]`).type(String(i));
            cy.findByRole('button', {
            name: /let's try it!/i
            }).click();
            cy.get(`[data-cy=${INPUT_FIELD}]`).clear();
            cy.findByText(/You tried/i);
        } 
    });

    it('Should be successfully finished', () => {
        cy.findByText(/Congratulations! You win!/i);
    });

    it('Should clear the input field after refreshing the number', () => {
        cy.get(`[data-cy=${BUTTON_REFRESH}]`).click();
        cy.get(`[data-cy=${INPUT_FIELD}]`).should('be.empty');
    });

    it('Should not show the helper message after refreshing the number', () => {
        CASES_MESSAGES.map(message => {
            cy.findByText(`/${message.expected}}/i`).should('not.exist');
            console.log(`"${message.expected}" is not appearing`);
        })  
    });
});

export {}