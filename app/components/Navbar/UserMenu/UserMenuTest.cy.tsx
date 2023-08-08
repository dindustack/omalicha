import React from "react";
import { NavbarUserMenu } from ".";

describe("<NavbarUserMenu />", () => {
  it("renders", () => {
    cy.mount(<NavbarUserMenu />);
  });

  it("should toggle user menu dropdown on click", () => {
    cy.mount(<NavbarUserMenu />);
    // Initially, the user menu dropdown should not be visible
    cy.get('[data-cy="user-menu-dropdown"]').should("not.exist");

    // Click on the user menu button to open the dropdown
    cy.get('[data-cy="user-menu-button"]').click();

    // Now, the user menu dropdown should be visible
    cy.get('[data-cy="user-menu-dropdown"]')
      .should("be.visible")
      .within(() => {
        cy.get('[data-cy="user-menu-list"]')
          .children()
          .should("have.length", 2);
      });

    // Click on the user menu button again to close the dropdown
    cy.get('[data-cy="user-menu-button"]').click();

    // Now, the user menu dropdown should not be visible again
    cy.get('[data-cy="user-menu-dropdown"]').should("not.exist");
  });
});
