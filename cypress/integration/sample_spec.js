describe('My first cypress tets',()=>{
    it('Test my mercado libre app',()=>{
        cy.visit('http://localhost:3000')
        cy.get('.form-control')
            .type('ipad {enter}')
        cy.url().should('include','/busca/?ft=ipad')
        
        cy.get('.card title').click()
    })
})
