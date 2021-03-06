describe("Home page", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/?#/about");
  });

  it("Shows a header", () => {
    cy.get("[data-test-content1]").should('contain','Welcome to the cargo delivery system');
  });
  it("Shows a header", () => {
    cy.get("[data-test-content2]").should('contain','This is a Cargo Delivery&Search System');
  });
  it("Shows a header", () => {
    cy.get("[data-test-content3]").should('contain','My name is Lu Sun');
  });
  it("Shows a header", () => {
    cy.get("[data-test-content4]").should('contain','My student number is: w20082256');
  });


  //cy.get('[data-test-text_create]').should('contain','You don\'t have an account ? you can ');
  describe("Navigation bar", () => {
      it("Shows the required links", () => {
        cy.get(".navbar").contains('Home' );
        cy.get(".navbar").contains('All Cargoes' );
        cy.get(".navbar").contains('AddCargo' );
        cy.get(".navbar").contains('providers' );
        cy.get('.navbar-nav:nth-child(1)').within(() => {
          cy.get('.nav-item:first').should('contain', 'Home')
          cy.get('.nav-item:nth-child(2)').should('contain', 'All Cargoes')
          cy.get('.nav-item:nth-child(3)').should('contain', 'AddCargo')
          cy.get('.nav-item:nth-child(4)').should('contain', 'providers')
        })
        cy.get('.navbar-nav:nth-child(2)').within(() => {
          cy.get('.nav-item:first').should('contain', 'About')
          cy.get('.nav-item:nth-child(2)').should('contain', 'Contact')
        })
      });

      it("Redirects when links are clicked", () => {
        cy.get('[data-test-button1]').click();
        cy.url().should('include','/cargoes' );

        /*cy.get('[data-test-button2]').click();
        cy.url().should('include','/addCargo' );

        cy.get('[data-test-button3]').click();
        cy.url().should('include','/providers' );

        cy.get('[data-test-button4]').click();
        cy.url().should('include','/about' );

        cy.get('[data-test-button5]').click();
        cy.url().should('include','/contact' );

        cy.get('[data-test-button6]').click();
        cy.url().should('include','/login' );*/
        // etc
      });
    })
});
