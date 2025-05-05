///<reference types='cypress'/>

import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'


import loginData from '../../../../fixtures/example.json'
import bulkquestionupload from '../../../../page_object_model/bulk_question_upload'
import landingpage from '../../../../page_object_model/landingpage'
import testmanagement from '../../../../page_object_model/testmanagement'
import bulkquestionuploadbutton from '../../../../page_object_model/click_bulk_question_upload'
import editquestion from '../../../../page_object_model/edit_multiple_choice_question'



Given("User opens the login form", ()=>{
    cy.visit(Cypress.env('url'))
})

When("User enters credentials include an email and a password", ()=>{
    landingpage.login(loginData.email, loginData.password)
})

Then("User should be logged in to the application", ()=>{
   bulkquestionupload.openapp();
})

When("Test Management Tab should be provided", ()=>{
    testmanagement.openTestManagementTab();
    testmanagement.openTestManagementTab();
})

And("User should open the bulk question upload", ()=>{
    bulkquestionuploadbutton.AccessQuestionsPage()
})

When("User edits a question from the list shown in the table", ()=>{
    editquestion.selectEditMultiChoiceQuestion()
})