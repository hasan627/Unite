///<reference types="cypress" />
import { LoginPage } from "../pages/loginpage";
const loginpage = new LoginPage();

it('Verify Login with valid email and valid password', function(){
    cy.visit('/dtms')
    loginpage.UserName().type('sohel@gain.io')
    loginpage.UserPassword().type('SQAengineer')
    loginpage.ClickLogin()
    cy.title().should('eq', 'Unite Living - Find your best roommates and a home')
    cy.log('Login Successfully')
    cy.wait(1000)
})


it('Create Accounts', function(){
    cy.get('.nav > :nth-child(4) > a').click()
    cy.get('.container > .dropdown > .dropdown-toggle').click()
    cy.get('.container > .dropdown > .dropdown-menu > li > span').click()
    //cy.contains('Enter name').type('Hasan')

})
