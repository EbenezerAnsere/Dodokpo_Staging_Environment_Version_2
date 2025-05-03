///<reference types='cypress'/>

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'


import loginData from '../../../../fixtures/example.json'
import bulkquestionupload from '../../../../page_object_model/bulk_question_upload'
import landingpage from '../../../../page_object_model/landingpage'



Given("I open the login form", ()=>{
    cy.visit("/")
})

When("I enter credentials include an email and a password", ()=>{
    landingpage.login(loginData.email, loginData.password)
})

Then("I should be logged in to the application", ()=>{
   bulkquestionupload.openapp();
})