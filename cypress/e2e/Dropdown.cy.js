describe('Dropdown',()=>{
    it('Static Dropdown',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('div select').select('option2').should('have.value','option2')
        cy.get('input#autocomplete').type('in')
        cy.get('div.ui-menu-item-wrapper').each(($countries)=>{
            if($countries.text()==='India'){
                cy.wrap($countries).click({force: true})
            }
        })
    })
})