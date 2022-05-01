describe("Pizza App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    })
//showing multiple ways to write tests//

it("Check Toppings", () => {
    cy.get('[type="checkbox"]').not('[disabled]')
    .check().should('be.checked')
  })




//    
    const textInput = () => cy.get(`input[id="name-input"]`);
    const specialTextInput = () => cy.get(`input[id="special-text"]`);
    const toppingCheck = () => cy.get('[type="checkbox"]')
    const submitBtn = () => cy.get(`button[id="order-button"]`);
    const pizzaSize = () => cy.get(`select[id="size-dropdown"]`)


    it("Checking for elments", () => {
        textInput().should("exist");
        specialTextInput().should("exist");
        submitBtn().should("exist");
        toppingCheck().should("exist")
        pizzaSize().should("exist")
    })
    

    describe("Nav to site, & fill inputs, check toppings, submit order", () => {
        it("Can nav to site", () => {
            cy.url().should("include", "localhost")
        
        })
    
   
        it("Can type in inputs, choose size, select toppings, submit order", () => {
        textInput()
         .should("have.value", "")
         .type("customer name")
         .should("have.value", "customer name");
        specialTextInput()
         .should("have.value", "")
         .type("custom order")
         .should("have.value", "custom order");
         pizzaSize()
         .should('have.value', '')
         .select("Large");
         toppingCheck()
          .not('[disabled]')
          .check().should('be.checked');
          submitBtn().click();

        

        



    

      
    


    
    
    
    
    
    
    
    
    })
   
  })

})