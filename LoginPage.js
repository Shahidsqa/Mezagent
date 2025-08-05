class LoginPage
 {
    Login(email, password)
    {
        cy.visit(Cypress.env('StagingSigninUrl'),{failOnStatusCode: false})
        cy.wait(2000)
        cy.get("[name='email']").type(email).wait(1000)
        cy.get("[name='password']").type(password).wait(1000)
        cy.get("button").contains('Login').realHover().wait(500).click().wait(4000)
    }
    OpenModule(module)
    {
        cy.get('.MuiButtonBase-root').contains(module).realHover().click()
        cy.wait(2000)
    }
 }

export default LoginPage;
