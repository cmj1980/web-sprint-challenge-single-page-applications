describe("Pizza App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3001/pizza")
    })


    const textInput = () => cy.get(`input[id="name-input"]`);
    const specialTextInput = () => cy.get(`input[id="special-text"]`);
    const submitBtn = () => cy.get(`button[id="order-button"]`);


    it("Checking for elments", () => {
        textInput().should("exist");
        specialTextInput().should("exist");
        submitBtn().should("exist");
    })


   


    it("Can type in inputs", () => {
        textInput()
         .should("have.value", "")
         .type("customer name")
         .should("have.value", "customer name");
        specialTextInput()
        .should("have.value", "")
        .type("custom order")
        .should("have.value", "custom order");
    })
   


























})