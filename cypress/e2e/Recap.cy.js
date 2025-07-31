// describe('Testing youtube', ()=> {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//   // returning false here prevents Cypress from
//   // failing the test
//   return false
// })
//     it('Testing Youtube',()=>{
//         cy.visit("www.youtube.com")
//     })
// })

//DAY 2

//Scenario 1

describe('login test',()=>{
    it('Validate Login page with valid credentials',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('[type="password"]').type('Password123')
        cy.get('button#submit').click()
        cy.url().should('include',('https://practicetestautomation.com/logged-in-successfully/'))
        cy.get('p strong').should('have.text','Congratulations student. You successfully logged in!')
        cy.get('[href*="practice-test-login/"]').should('be.visible')
    })
})

//Negative Scenario 2

describe('Negative Test scenario 2',()=>{
    it('Invalid Credentials',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('incorrectUser')
        cy.get('input#password').type('Password123')
        cy.get('button#submit').click()
        cy.contains('Your username is invalid!').should('be.visible')
    })
})

//Scenario 3

describe('Negative Test scenario 3',()=>{
    it('Invalid Password',()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('input#username').type('student')
        cy.get('input#password').type('InvalidPassword')
        cy.get('button#submit').click()
        cy.contains('Your password is invalid!').should('be.visible')
    })
})

