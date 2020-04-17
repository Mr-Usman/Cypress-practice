// <reference types="cypress" />

describe("Locating Elements", function () {
  it("verify types of locators", function () {
    cy.visit("https://demo.nopcommerce.com/");

    cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch");

    cy.get('.search-box-button[value="Search"]').click();

    cy.get('.product-box-add-to-cart-button[value="Add to cart"]').click();

    cy.get("#addtocart_4_EnteredQuantity").clear().type("2");

    cy.get("#add-to-cart-button-4").click();

    cy.wait(5000);

    cy.get("#topcartlink > a").click();

    cy.wait(3000);

    cy.get(
      "#shopping-cart-form > div.table-wrapper > table > tbody > tr > td.unit-price > span"
    ).contains("$1,800.00");
  });
});
