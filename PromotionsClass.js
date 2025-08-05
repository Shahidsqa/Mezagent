class Promotions{
    
    CompanyCarouselAd()
    {
        cy.contains("Add New").realHover({scrollBehavior:false}).wait(500).click({scrollBehavior:false}).wait(2000)
        cy.get("input[role='combobox']").type('Bik',{scrollBehavior:false}).wait(2000)
        cy.contains('Bike').click({scrollBehavior:false}).wait(1000)
        cy.get('#name').type('Test Carousel Ad',{scrollBehavior:false}).wait(1000)
        cy.get(':nth-child(5) > .MuiStepLabel-root').scrollIntoView()
        cy.get('#daily_budget').type('5000',{scrollBehavior:false}).wait(1000)
        cy.get(':nth-child(1) > .MuiBox-root > .MuiFormControlLabel-root > .MuiTypography-root').click({scrollBehavior:false}).wait(1000)
        cy.get('#direct_inquiry_budget').type('5000',{scrollBehavior:false}).wait(1000)
        cy.get('.css-n0ud8h > .MuiTypography-body1').scrollIntoView()
        cy.get("[name='description']").type('This is a sample description.',{scrollBehavior:false}).wait(1000)
        cy.get('button[type="submit"]').contains('Launch Ad').scrollIntoView().realHover().wait(500).click().wait(3000)
        cy.get('.css-173qm48').contains('Test Carousel Ad').scrollIntoView().should('be.visible').wait(1000)
    }
    CompanyProgramAd()
    {
        cy.contains("Add New").scrollIntoView().wait(500).realHover({scrollBehavior:false}).wait(500).click({scrollBehavior:false}).wait(2000)
        cy.get('.MuiStack-root > .MuiBox-root > :nth-child(2)').realHover({scrollBehavior:false}).wait(500).click({scrollBehavior:false}).wait(1000)
        cy.get("input[role='combobox']").type('Sample',{scrollBehavior:false}).wait(2000)
        cy.contains('Sample Deal').click({scrollBehavior:false}).wait(1000)
        cy.get('#name').type('Test Program Ad',{scrollBehavior:false}).wait(1000)
        cy.get(':nth-child(5) > .MuiStepLabel-root').scrollIntoView()
        cy.get('#daily_budget').type('5000',{scrollBehavior:false}).wait(1000)
       // cy.get("[name='description']").type('This is a sample description.',{scrollBehavior:false}).wait(1000)
        cy.get('button[type="submit"]').contains('Launch Ad').scrollIntoView().realHover().wait(500).click().wait(3000)
        cy.get('.css-173qm48').contains('Test Program Ad').scrollIntoView().should('be.visible').wait(1000)
    }
    CompanyProfileAd()
    {
        cy.contains("Add New").scrollIntoView().wait(500).realHover({scrollBehavior:false}).wait(500).click({scrollBehavior:false}).wait(2000)
        cy.get('.MuiStack-root > .MuiBox-root > :nth-child(3)').realHover({scrollBehavior:false}).wait(500).click({scrollBehavior:false}).wait(1000)
        cy.get('#name').type('Test Profile Ad',{scrollBehavior:false}).wait(1000)
        cy.get(':nth-child(5) > .MuiStepLabel-root').scrollIntoView()
        cy.get('#daily_budget').type('5000',{scrollBehavior:false}).wait(1000)
       // cy.get("[name='description']").type('This is a sample description.',{scrollBehavior:false}).wait(1000)
        cy.get('button[type="submit"]').contains('Launch Ad').scrollIntoView().realHover().wait(500).click().wait(3000)
        cy.get('.css-173qm48').contains('Test Profile Ad').scrollIntoView().should('be.visible').wait(1000)
        cy.get('.css-csffzd').click().wait(1000)
        cy.contains('Logout').realHover().wait(500).click()
    }
    VerifyCompanyAds()
    {   // Verifying Profile Promoted
        cy.get('.MuiButtonBase-root').contains('Companies').realHover().click().wait(2000)
        cy.get("input[role='combobox']").type('PREMIUM',{scrollBehavior:false}).wait(2000)
        cy.get("[data-testid=OfflineBoltOutlinedIcon]").should('be.visible').realHover().wait(2000)
        // Verifying Deal Promoted
        cy.get('.MuiButtonBase-root').contains('Deals').realHover().click().wait(2000)
        cy.get("input[role='combobox']").type('Sample Deal',{scrollBehavior:false}).wait(2000)
        cy.get("[data-testid=OfflineBoltOutlinedIcon]").should('be.visible').realHover().wait(2000)
    }
    
}  
export default Promotions  