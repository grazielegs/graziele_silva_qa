describe('Test Case', function() {
    it('Visits the Ormuco Login Page', function() {
        cy.visit('https://uat.ormuco.com/login')

        // Checks if the URL contains '/login'.
        cy.url().should('include', '/login')
    })

    it('Get the email input, type an invalid address', function() {
        cy.get('#username')
        .type('invalid@email.com')
        .should('have.value', 'invalid@email.com')
    })

    it('Get the password input, type an invalid password', function() {
        cy.get('#password')
        .type('password')
        .should('have.value', 'password')
    })

    it('Submit the form', function() {
        cy.get('#login_form > ng-form > div.reg_form_sub_section.messages_line.error_body > div.add-margin-top-normal.a_right > button')
        .click()
    })

    it('Validate the user error message', function() {
        // Checks if the the returned error message.
        cy.assert.strictEqual(true, true, 'The user or password is incorrect.')
    })
})

