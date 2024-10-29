import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I open {string} page', (url) => {
  cy.visit(url);
})

Given('I open {int},{int} resolution browser', (width, heigth) => {
  cy.viewport(width,heigth);
})

Given('I open fullscreen browser', () => {
  cy.get('body');
  cy.viewport(window.screen.width, window.screen.height); 
})

When('I wait {int}', (seconds)=>{
  cy.wait(seconds*1000);
})

When('I click {string}', (elementKey)=>{
  cy.getElementWithLocaterType(elementKey).should('be.visible').click();
})

When('I click {string} index {int}', (elementKey, index)=>{
  cy.getElementWithLocaterType(elementKey).eq(index).click();
})

When('I type {string} in {string}',(text , elementKey)=>{
  cy.getElementWithLocaterType(elementKey).should('be.visible').type(text);
})

When('I type {string} in {string} variables',(variable , elementKey)=>{
  cy.getParam(variable).then((value)=>{
    cy.getElementWithLocaterType(elementKey).should('be.visible').type(value);
  })
})

When('I save text {string} in {string}',(elementKey, varKey)=>{
  cy.getElementWithLocaterType(elementKey).should('be.visible').invoke('text').then((text) => {
    cy.setParam(varKey, text);
    cy.log(varKey + ' : ' + text);
  });
})

When('I split {string} variable with {string} text and get {int} index',(varKey, text, index)=>{
  cy.getParam(varKey).then((value)=>{
    var temp = value.split(text)[index];
    cy.log(temp);
    cy.setParam(varKey, temp);
  })
})

When('I see {string} element', (elementKey)=>{
  cy.getElementWithLocaterType(elementKey).should('be.visible');
})

Then('I see {string} page', (page)=>{
  cy.openPage(page);
})

Then('I registered {string} user', (user)=>{
  cy.registerUser(user);
})

