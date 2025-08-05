import LoginPage from "../PageObjectModel/LoginPage"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)

it('Login into application',function(){
    cy.viewport(1200,600)
    const obj = new LoginPage()
    obj.Login('shahidwr574+prem@gmail.com', 'Asdf@1234')
    
})