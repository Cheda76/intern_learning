describe("check and option selection", () => {
  before(() => {
    cy.visit("https://trytestingthis.netlify.app/");
  });

  it("check gender", () => {
    cy.contains("Gender:").scrollIntoView(); //scrolling to gender
    cy.get('input[type="radio"]').last().check();

    // cy.get('#male').check().should('be.checked'); //check male
    // cy.get("input#male").should('not.have.attr', 'checked');// unchecked

    // //female
    // cy.get('#female').check().should('be.checked');
    // cy.get('#female').should('not.have.attr', 'checked')

    // //other
    // cy.get('#other').check().should('be.checked');
  });

  it("seletion multiple check", () => {
    cy.get('input[type="checkbox"]').check(); //checking all
    //cy.get('input[type="checkbox"][name="option2"]').uncheck(); // uncheck option 2
    //cy.get('input[type="checkbox"]').last().uncheck().should('not.be.checked'); // last uncheck

    //checking selected one
    // cy.get('[name="option1"]').check();
    // cy.get('[name="option2"]').check();
    // cy.get('[name="option3"]').check();
  });
  it("drop down option", () => {
    //cy.contains('Lets you select only one option').scrollIntoView();

    cy.get("#option").select("Option 2").should("have.value", "option 2");

    // cy.get('#option').children().last().then((option) => {
    //     cy.get('#option').select(option.val()).should('have.value', option.val());
    //   });
  });

  it("auto type completion", () => {
    //.get("input[name='Options").type('{selectall} apple');
    //cy.get("datalist option").its('length').should('eq', 5); //validate the total element
    cy.get("datalist option").should("have.length", "5");
    cy.get("input[name='Options']").type("Banana");
    cy.get("input[name='Options']").should("have.value", "Banana");
  });
});
