/// <reference types="cypress" />

require('cypress-xpath');

var page = {};
var user = {};

    function openPage(pageKey){
        cy.fixture('pages/' + pageKey).then((data) => {
            page = data
            cy.log(page);
        });
    };

    function registerUser(userKey){
        cy.fixture('users/' + userKey).then((data) => {
            user = data
            cy.log(user);
        });
    }

    function getParam(varKey){
        return cy.wrap(user[varKey]);
    };
    
    function setParam(varKey, variable){
        user[varKey] = variable;
    };
    
    function getElementLocater(elementKey){
        return page['elements'][elementKey];
    };
    
    function getElementLocaterType(element){
        if (Array.from(element)[0] == ('/') || Array.from(element)[0] == ('(')) {
            return cy.xpath(element);
        } else {
            return cy.get(element);
        }
    };
    
    function getElementWithLocaterType(elementKey){
        return getElementLocaterType(getElementLocater(elementKey));
    };
      

    Cypress.Commands.add('openPage', openPage)

    Cypress.Commands.add('registerUser', registerUser)

    Cypress.Commands.add('getParam', getParam)

    Cypress.Commands.add('setParam', setParam)

    Cypress.Commands.add('getElementLocater', getElementLocater)

    Cypress.Commands.add('getElementLocaterType', getElementLocaterType)

    Cypress.Commands.add('getElementWithLocaterType', getElementWithLocaterType)