import Login from "../PageObject/LoginPage";

describe("home,contact, & login", () => {
  before(() => {
    cy.visit("https://trytestingthis.netlify.app/");
  });

  it("home & contact", () => {
    cy.get("body > div:nth-child(2) > a:nth-child(1)").click();

    cy.get("div[class='footer'] h2:nth-child(1)").should("have.text",'Created by Oviya Kandaswamy');
    cy.wait(3000)
    cy.go('back');
    cy.get("div[class='main'] h2:nth-child(1)").should('have.text','This is your layout two');
  });

  //General approach
  it("LoginTest", () => {
    //cy.get('body > div:nth-child(3) > div:nth-child(1) > fieldset:nth-child(23)').scrollIntoView({duration:3000})
    // cy.wait(3000);
    cy.contains("This is your Sample login page:").scrollIntoView({duration:3000});
    cy.get("#uname").type("test");
    cy.get("#pwd").type("test");
    cy.get("input[value='Login']").click();
    cy.get("div[class='main'] h2").contains('Login Successful')
  });

 // with page object model
    it('LoginTest',()=>{
        const ln=new Login();
        ln.setUserName("test");
        ln.setPassword("test");
        ln.clickSubmit();
        ln.veriyLogin();
    })

    it.only("drag and drop", () => {
      cy.get("body > div:nth-child(3) > div:nth-child(1) > p:nth-child(19)").scrollIntoView({ duration: 2000 });
      cy.get('#div1').should("be.visible");
      cy.get('#drag1').should('be.visible');
    
      cy.wait(3000);
    
      // Perform drag and drop using cypress-drag-drop
      cy.get('#drag1').drag('#div1');
    });
    
  
});
