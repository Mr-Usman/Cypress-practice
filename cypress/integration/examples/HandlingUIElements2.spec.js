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

  it("select the skill from dropdown", function () {
    cy.get("#Skills").select("Android").should("have.value", "Android");
  });

  it("language multiselect dropdown", function () {
    cy.get("#msdd").click();
    cy.get(".ui-corner-all").contains("English").click();
    cy.get(".ui-corner-all").contains("Hebrew").click();
  });

  it("searchable dropdown", function () {
    cy.get("[role='combobox']").click({ force: true });
    cy.get(".select2-search__field").type("Ind");
    cy.get(".select2-search__field").type("{enter}");
  });

  it("select country with static dropdown", function () {
    cy.get("#countries").select("Pakistan").should("have.value", "Pakistan");
  });
});
