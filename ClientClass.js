class Client {
    createClient()
    {
        cy.get('.MuiTabs-flexContainer > [tabindex="-1"] > .MuiTypography-root').realHover({scrollBehavior:false}).wait(500).click({scrollBehavior:false}).wait(2000)
        cy.get('.MuiButton-root').realHover({scrollBehavior:false}).wait(500).click({scrollBehavior:false}).wait(2000)
        cy.get('#first_name').type('Shahid',{scrollBehavior:false}).wait(1000)
        cy.get('#last_name').type('Ali',{scrollBehavior:false}).wait(1000)
        cy.get('#email').type('shahid@gmail.com',{scrollBehavior:false}).wait(1000)
        cy.get('#country').click({scrollBehavior:false}).wait(1000)
        cy.contains('United States').click({force:true,scrollBehavior:false}).wait(1000)
        cy.get("[placeholder='Phone number']").type('9876543210',{scrollBehavior:false}).wait(1000)
        cy.get('#comment').type('Testing Client. Testing Client.').wait(1000)
        cy.get('button[type="submit"]').contains('Add').click()
    }
}
export default Client;