class CompanySignUp {
    RegisterCompany() 
    {
        cy.visit(Cypress.env('StagingSignupUrl'),{failOnStatusCode: false}).wait(2000)
        cy.get("[name='accountType']").realHover().wait(500).click().wait(1000)
        cy.get('#companyName').type('Test Company').wait(1000)
        cy.get("[placeholder='Phone number']").type('9876543210').wait(1000)
        cy.get('#website').type('testcompany.com').wait(1000)
        // Generate a random email address
        const email = 'shahidali20145722+company'+Cypress._.random(1, 9999).toString()+'@gmail.com'
        cy.get("[name='email']").type(email).wait(1000)
        cy.get("[name='password']").type('Asdf@1234').wait(1000)
        cy.get('#confirmPassword').type('Asdf@1234').wait(1000)
        cy.contains('Continue').click().wait(2000)
        cy.get('[style="max-height: 300px; overflow-y: auto; padding: 10px;"]').scrollTo('bottom').wait(1000)
        cy.get('.css-s4gu1m > .MuiButtonBase-root').click().wait(10000)
        cy.task('getOtpFromGmail').then((otp) => {
         expect(otp).to.not.be.null;
         cy.get("[aria-label='Digit 1 of OTP']").type(otp).wait(3000) 
       })
        cy.get(':nth-child(3) > .MuiPaper-root > .MuiBox-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').scrollIntoView().click().wait(1000)
       cy.get(':nth-child(3) > .MuiPaper-root > .MuiBox-root > .MuiButton-root').click().wait(2000)
    }
}