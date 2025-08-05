import LoginPage from "../PageObjectModel/LoginPage"
import Client from "../PageObjectModel/ClientClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)

it('Creating New Client',function(){
    cy.viewport(1300,600)
    const obj = new LoginPage()
    const client = new Client()
    obj.Login('shahidali20145722+perm@gmail.com', 'Asdf@1234')
    obj.OpenModule('Referrals')
    client.createClient()
    
})