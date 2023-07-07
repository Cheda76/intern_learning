// Assuming you have Cypress installed and have your Cypress tests set up

describe('Scrolling to a Range Value', () => {
    it('should scroll to range value 90', () => {
      cy.visit('https://trytestingthis.netlify.app/');
  
      // Find the range input element and scroll to it
      cy.get('input[type="range"]').then($range => {
        const element = $range[0];
        const max = parseFloat(element.max);
        const min = parseFloat(element.min);
        const step = parseFloat(element.step);
  
        // Calculate the position for range value 90
        const value90 = (90 - min) / (max - min);
        const pixelValue = Math.floor(value90 * element.clientWidth);
  
        // Scroll horizontally to the desired position
        cy.get('input[type="range"]').trigger('mousedown', { button: 0 });
        cy.get('input[type="range"]').trigger('mousemove', {
          clientX: element.getBoundingClientRect().left + pixelValue,
        });
        cy.get('input[type="range"]').trigger('mouseup', { force: true });
      });
    });
  });
  