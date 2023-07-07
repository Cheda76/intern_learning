describe("upload file & clear and write text",()=>{
    before(() => {
        cy.visit("https://trytestingthis.netlify.app/");
      });
    it("clear and write new text",()=>{
        cy.get("textarea[name='message']").clear().type('New text after clear the previous text');

    })

    it("file upload",()=>{     
        cy.contains("Select a file:").scrollIntoView({duration:3000});    
        cy.get("#myfile").attachFile("angular.docx");
          
    });   
    it("File upload - Rename", () => {
        cy.contains("Select a file:").scrollIntoView({duration:3000}); 
        cy.get('#myfile').attachFile({filePath:'angular.docx', fileName:'myfile.docx'});  
    });    
    
    it("Handling tabs",()=>{
        //cy.get(".btn.btn-success").invoke('removeAttr','_blank').click();
         cy.get('button.btn-success').click();

        // cy.url().should('eq', 'http://google.com');
        
        // cy.visit("https://trytestingthis.netlify.app/");
        // cy.get('.btn.btn-success').invoke('removeAttr', 'onclick').then($button => {
        //     $button.attr('target', '_self');
        // }).click();

        //cy.url().should('include','https://www.google.com/');
    })
    it.skip('Check number of rows and columns',() =>{
        cy.contains("This is your layout three").scrollIntoView({duration:3000});
        cy.get('table tbody tr th').should('have.length','5')
        cy.get('table tbody tr').should('have.length','7')
    })
    it.skip('Check cell data from specific row and colum',() =>{
        cy.contains("This is your layout three").scrollIntoView({duration:3000});
        cy.get("tbody tr:nth-child(4) td:nth-child(2)").contains('Tribbiani');
    })

    it.only('Read all the rows & Columns data in the first page',() =>{
        cy.get('table > tbody > tr > td')
        .each( ($row, index, $rows) =>{
            cy.log($row.text());
        })
    })
})