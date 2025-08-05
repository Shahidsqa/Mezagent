class AgentSignUp{
    visitUrl()
    {
        cy.visit(Cypress.env('StagingSignupUrl'),{failOnStatusCode: false}).wait(1000)
    }

    Credentials()
    {
            // Generate a random email address
        const email = 'shahidali20145722+agent'+Cypress._.random(1, 9999).toString()+'@gmail.com'
        cy.get("[name='email']").type(email).wait(1000)
        cy.get("[name='password']").type('Asdf@1234').wait(1000)
        cy.get("[name='confirmPassword']").type('Asdf@1234').wait(1000)
        cy.contains('Continue').realHover().wait(1000).click().wait(2000)
    }
    EnterOTP()
    {
        cy.contains('The term “including” as used herein means including without limitation.').scrollIntoView().wait(1000)
        cy.get('.css-s4gu1m > .MuiButtonBase-root').realHover().wait(1000).click().wait(8000)
        cy.task('getOtpFromGmail').then((otp) => {
         expect(otp).to.not.be.null;
         cy.get("[aria-label='Digit 1 of OTP']").type(otp).wait(5000) 
       })
    }
    SelectPlan()
    {
       cy.contains('Get Started').first().scrollIntoView().realHover().wait(1000).click().wait(3000)
    }
    PersonalDetails()
    {
       cy.get("[name='first_name']").type('Agent').wait(1000)
         cy.get("[name='last_name']").type('Test').wait(1000)
         const random = 'agent'+Cypress._.random(1, 9999).toString()
         cy.get("[name='username']").clear().type(random).wait(3000)
         cy.contains('Continue').realHover().wait(1000).click().realMouseMove(100,100).wait(3000)
    }
    AddressDetails()
    {
         cy.get('.MuiGrid-spacing-xs-2 > :nth-child(1)').click().wait(2000)
         cy.contains('American Samoa').click({force:true}).wait(2000)
         cy.get('.MuiGrid-spacing-xs-2 > :nth-child(2)').click().wait(2000)
         cy.contains('Vaifanua').click({force:true}).wait(2000)
         cy.contains('Continue').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
    }
    UploadPhoto()
    {
         const path = require('path')
         const filePath = path.join('cypress', 'fixtures', 'car.png')
         cy.get('.MuiButtonBase-root > img').realHover().wait(1000).click().wait(2000)
         cy.contains('Upload').realHover().wait(1000).selectFile(filePath).wait(2000)
         cy.contains('Save').realHover().wait(1000).click().wait(3000)
         cy.contains('Continue').realHover().wait(1000).click().realMouseMove(100,100).wait(2000)
    }
    ProfileComplete()
    {
         cy.contains('Complete').realHover().wait(1000).click().wait(3000)
         cy.contains('Next').click().wait(2000)
         cy.contains('Next').click().wait(2000)
         cy.contains('Last').click()
    }


       
    
}
export default AgentSignUp