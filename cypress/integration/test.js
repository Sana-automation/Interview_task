/// <reference types="cypress" />


describe('Booking.com 5-star Delhi hotel search', () => {
  it('finds highest-rated 5-star hotel and logs its name and price', () => {
    cy.visit('https://www.booking.com');
    // Search for hotels in Delhi, India
    cy.get("input[name='ss']").type('Delhi, India{enter}');
    // Select check-in/out dates (5-night range, e.g., Oct 1-6, 2025)
    cy.get("div button[data-testid='searchbox-dates-container']").click();
    cy.get('[data-date="2025-10-01"]').click();
    cy.get('[data-date="2025-10-06"]').click();
    // Set guests: 2 adults, 1 child (age 1)
    cy.get("div button[data-testid='occupancy-config']").click();
    cy.get('.sb-group__field-children .bui-stepper__add-button').click();
    cy.get('select[name="age"]').select('1');
    // Filter by 5-star hotels
    cy.get('input[name="class=5"]').check();
    // Submit search
    cy.get("button[type='submit']").click();
    // Sort by Top reviewed to ensure highest rating first
    cy.contains('Top reviewed').click();
    // Log highest-rated hotel name
    cy.get('.sr-hotel__name').first().invoke('text').then(name => {
      cy.log('Hotel:', name.trim());
    });
    // Log lowest price for the 5-night stay
    cy.get('.bui-price-display__value').first().invoke('text').then(price => {
      cy.log('Price for 5 nights:', price.trim());
    });
  });
});
