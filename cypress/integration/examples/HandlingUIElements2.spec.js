/// <reference types="Cypress" />

describe("test suit name", function () {
  it("handing the checkboxes", function () {
    cy.visit("http://demo.automationtesting.in/Register.html");

    cy.get("#checkbox1")
      .check()
      .should("be.checked")
      .and("have.value", "Cricket");

    cy.get("#checkbox1")
      .check()
      .should("be.checked")
      .and("have.value", "Movies");

    cy.get("#checkbox1")
      .check()
      .should("be.checked")
      .and("have.value", "Hockey");

    cy.get("#checkbox1").uncheck().should("not.be.checked");
    cy.get("#checkbox2").uncheck().should("not.be.checked");
    cy.get("#checkbox3").uncheck().should("not.be.checked");

    cy.get("input[type='checkbox']").check(["Cricket", "Hockey"]);
  });
});
