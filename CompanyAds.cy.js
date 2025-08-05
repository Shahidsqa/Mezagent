import LoginPage from "../PageObjectModel/LoginPage"
import Promotions from "../PageObjectModel/PromotionsClass"
// enable intelligence
///<reference types = "cypress"/>
// returning false here prevents cypress from failing tests
Cypress.on("uncaught:exception",()=>false)

it('Company Promotions',function(){
    cy.viewport(1300,600)
    const obj = new LoginPage()
    const ads = new Promotions()    
    obj.Login('shahidwr574+prem@gmail.com', 'Asdf@1234')
    obj.OpenModule('Promotions')
    ads.CompanyCarouselAd()
    ads.CompanyProgramAd()
     ads.CompanyProfileAd()
   // Verifying Company Ads
    obj.Login('shahidali20145722+perm@gmail.com', 'Asdf@1234')
    ads.VerifyCompanyAds()
    
})