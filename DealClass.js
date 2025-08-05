class Deal {
    addNewDeal() {
        // Open the "Add New Deal" dialog
        cy.get('.MuiButtonBase-root').contains('Deals').realHover().click().wait(2000);
        cy.contains('Add New Deal').click().wait(2000);

        // Fill out the form
        const path = require('path')
        const filePath = path.join('cypress', 'fixtures', 'bbb.png')
        cy.get('.MuiStack-root > .MuiBox-root > .MuiButtonBase-root').realHover({scrollBehavior:false}).wait(500).click().wait(2000)
        cy.get('.css-7jugx5 > .MuiBox-root > .MuiButtonBase-root').selectFile(filePath).wait(2000)
        cy.contains('Save').click().wait(2000) // Click on the "Select" button
        cy.get('#name').type('Sample Deal',{scrollBehavior:false}).wait(1000); // Deal Name
        cy.get('#price_from').type('1000',{scrollBehavior:false}).wait(1000); // Price From
        cy.get('#currency').click({scrollBehavior:false}).wait(1000); // Open Currency dropdown
        cy.contains('United States dollar').click({force:true,scrollBehavior:false}).wait(1000); // Select EUR
        cy.get('#return_percentage').should('be.disabled').wait(1000);
        cy.get('.MuiTypography-body1 > .MuiTypography-root').click({scrollBehavior:false}).wait(1000)
        cy.get('#return_percentage').type('20',{scrollBehavior:false}).wait(1000) // Verify Commission From % is disabled
        cy.get('#address').type('Lahore',{force:true,scrollBehavior:false}).wait(2000)
        cy.get('.pac-container > :nth-child(2)').click({scrollBehavior:false}).wait(1000); // Address
        cy.get('#city').scrollIntoView()
        cy.get('#description').type('This is a sample description. This is a sample description. This is a sample description. This is a sample description.',{scrollBehavior:false}).wait(1000); // Description
        cy.get('#agreement').type('Sample agency agreement details. Sample agency agreement details. Sample agency agreement details. Sample agency agreement details.',{scrollBehavior:false}).wait(1000); // Agency Agreement

        // Submit the form
        cy.get('button[type="submit"]').contains('Add').click();
    }
}

export default Deal;