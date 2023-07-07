describe("all",()=>{
    before(() => {
        cy.visit("https://trytestingthis.netlify.app/");
      });
    it("input verify",()=>{

        cy.visit("https://trytestingthis.netlify.app/");
        cy.get("#fname").type('Sonam');
        //  Verify that the value has been updated
        cy.get('#fname').should('have.value', 'Sonam');

        cy.get("#lname").type('Cheda');
        //  Verify that the value has been updated
        cy.get('#lname').should('have.value', 'Cheda');

    })
    it('data picker',()=>{
        cy.visit("https://trytestingthis.netlify.app/");
        cy.contains('Select a date:').scrollIntoView();
        //cy.get('#day').click();
        cy.get('#day').type('2024-12-07') //yyyy-mm-dd
        .should(($input) => {
            const value = $input.val();
            expect(value).to.include('12');
          });  
    })

    it.only('drag bar', () => {
        cy.visit("https://trytestingthis.netlify.app/");
        cy.contains('Scroll to see a range value:').scrollIntoView();
        cy.get("#a").should('be.visible');
        cy.get("output[name='x']").should("not.be.visible");
      
        // Get the range input element
        cy.get("#a").then($input => {
          // Calculate the width of the range input
          const width = $input[0].clientWidth;
      
          // Calculate the position on the range input based on the desired value (90)
          const position = (90 / 100) * width; // Assuming the range input is from 0 to 100
      
          // Trigger the drag action on the range input to the desired position
          cy.get("#a").trigger("mousedown", { which: 1 })
            .trigger("mousemove", position, 0, { force: true })
            .trigger("mouseup", { force: true });
            cy.get("output[name='x']").should("be.visible");
        });
        cy.get("output[name='x']").should("be.visible");
        // Assert that the output value is 90
        cy.get("output[name='x']").should('have.value', '90');
        
      });
      
     
})