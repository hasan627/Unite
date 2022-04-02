/// <reference types="cypress" />
import { LoginPage } from "../pages/loginpage";
const loginpage = new LoginPage();
it('Verify Login with valid email and valid password', function(){
    cy.visit('/dtms')
    loginpage.UserName().type('sohel@gain.io')
    loginpage.UserPassword().type('SQAengineer')
    loginpage.ClickLogin()
    cy.title().should('eq', 'Unite Living - Find your best roommates and a home')
    cy.log('Login Successfully')
})

it('Logout', function(){
    cy.get('.dropdown.user-menu-dropdown > .dropdown-toggle > .user-avatar').click()
    cy.get(':nth-child(4) > .logout').click()
})

it('Verify Login with valid email and invalid password', function(){
    cy.visit('/dtms')
    loginpage.UserName().type('sohel@gain.io')
    loginpage.UserPassword().type('TestEnginner')
    loginpage.ClickLogin()
    //cy.get ('.toast-message').contains("Couldn't log in")
    cy.log("Login shouldn't Successfully")
})