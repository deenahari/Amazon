describe('basic elements',()=>{
    it('All basic elements',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('input[name="radioButton"]').check('radio1').should('be.checked')
        cy.get('label [type="checkbox"]').check(['option1','option2','option3']).should('be.checked')
    })
})