import LoginPage from "../PageObjectModel/LoginPage"
import Deal from "../PageObjectModel/DealClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)

it('Creating New Deal',function(){
    cy.viewport(1300,600)
    const obj = new LoginPage()
    const deal = new Deal()
    obj.Login('shahidwr574+prem@gmail.com', 'Asdf@1234')
    obj.OpenModule('Deals')
    deal.addNewDeal()
    
})