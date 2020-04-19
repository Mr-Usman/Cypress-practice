/// <reference types="cypress" />

describe("locating elements in a table", function () {
  it("table test", function () {
    // locating elements anywhere in table
    cy.visit("http://testautomationpractice.blogspot.com/");
    cy.get("table[name='BookTable']")
      .contains("td", "Learn Selenium")
      .should("be.visible");

    // locating elements at a certain position
    cy.get(
      "table[name='BookTable'] > tbody > tr:nth-child(2) > td:nth-child(3)"
    )
      .contains("Selenium")
      .should("be.visible");

    //   finding the Book name "Master in Java whose author is amod"
    cy.get("table[name='BookTable'] >tbody>tr td:nth-child(2)").each(function (
      $e,
      $index,
      $list
    ) {
      const text = $e.text();
      if (text.includes("Amod")) {
        cy.get("table[name='BookTable'] >tbody>tr td:nth-child(1)")
          .eq($index)
          .then(function (bname) {
            const bookName = bname.text();
            expect(bookName).to.equal("Master In Java");
          });
      }
    });
  });
});
