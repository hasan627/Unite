/// <reference types="cypress" />
export class LoginPage{
    UserName(){
        return cy.get('#partnerLoginForm > :nth-child(1) > .form-control')
    }
    UserPassword(){
        return cy.get('#partnerLoginForm > :nth-child(2) > .form-control')
    }
    ClickLogin(){
        return cy.get('#partnerLoginForm > :nth-child(3) > .btn').should('be.visible').click()
    }

}