context("veSDL test", () => {
  beforeEach(() => {
    cy.visit(`/#/vesdl`)
    cy.wait(2000)
  })
  it("veSDL test", () => {
    cy.getBySelId("lockVeSdlBtn").should("be.disabled")
    cy.getBySelId("unlockVeSdlBtn").should("be.disabled")

    cy.getBySelId("sdlTokenInput")
      .find("input")
      .should("exist")
      .type("100")
      .should("have.value", "100")
    cy.getBySelId("veSdlUnlockData")
      .find("input")
      .type("12/02/2022")
      .should("have.value", "12/02/2022")
  })
})
