const mocks = [
    {testcase: "123", right: "123"},
    {testcase: "12a", right: "12"},
    {testcase: "asdsads", right: ""}
]

describe('Should be input and 2 buttons', () => {
    it ('should be an input', () => {
        cy.visit('/');
        cy.findByRole('spinbutton').should('be.visible');
    });

    it(`should be a button called "let's try it!"`, () => {
        cy.findByRole('button', {
            name: /let's try it!/i
          });
    });

    it(`should be a button called "Please, refresh the number!"`, () => {
        cy.findByRole('button', {
            name: /please, refresh the number/i
          });
    });
});

describe('Gameplay testing', () => {
    it ('should enter only numbers, not any text', () => {
        const input = cy.findByRole('spinbutton');

        mocks.map((mock) => {
            input.type(mock.testcase);
            input.should('have.value', mock.right);
            console.log(`testcase is ${mock.testcase} and right answer should be ${mock.right ? mock.right : 'empty'} `)
            input.clear();
        });
    });

    it('Should count trials', () => {
        for (let i = 1; i <= 10; i++) {
            cy.findByRole('spinbutton').type(String(i));
            cy.findByRole('button', {
            name: /let's try it!/i
          }).click();
          cy.findByRole('spinbutton').clear();
          cy.findByText(/You tried/i);
        } 
    });

    it('Should be successfully finished', () => {
        cy.findByText(/Congratulations! You win!/i);
    });
});

export {}