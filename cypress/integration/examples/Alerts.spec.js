/// <reference types="Cypress" />

describe("handling alerts", function () {
  it("handle simple alert", function () {
    cy.visit("https://mail.rediff.com/cgi-bin/login.cgi");

    cy.get("input[type='submit']").click();

    cy.on("window:alert", (str) => {
      expect(str).to.equal("Please enter a valid user name");
    });
  });
});
