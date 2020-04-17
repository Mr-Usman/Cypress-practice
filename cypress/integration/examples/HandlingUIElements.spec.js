/// <reference types="Cypress" />

describe("UI Elements", () => {
  it("verify InputBox and Radio Buttons", () => {
    cy.visit("http://newtours.demoaut.com/");
    cy.url().should("include", "newtours");

    cy.get("input[name='userName']")
      .should("be.visible")
      .should("be.enabled")
      .type("mercury");

    cy.get("input[name='password']")
      .should("be.visible")
      .should("be.enabled")
      .type("mercury");

    cy.get("input[name='login']").should("be.visible").click();

    cy.title().should("eq", "Find a Flight: Mercury Tours:");

    cy.get("input[value='roundtrip']")
      .should("be.visible")
      .should("be.checked");

    cy.get("input[value='oneway']")
      .should("be.visible")
      .should("not.be.checked")
      .click();

    cy.get("input[name='findFlights']").should("be.visible").click();

    cy.title().should("eq", "Select a Flight: Mercury Tours");
  });
});
