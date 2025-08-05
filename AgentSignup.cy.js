import AgentSignUp from "../PageObjectModel/AgentSignupClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)

it('Agent Registration',function(){
    cy.viewport(1500,800)
    const agent = new AgentSignUp()
    agent.visitUrl()
    agent.Credentials()
    agent.EnterOTP()
    agent.SelectPlan()
    agent.PersonalDetails()
    agent.AddressDetails()
    agent.UploadPhoto()
    agent.ProfileComplete()
    
})