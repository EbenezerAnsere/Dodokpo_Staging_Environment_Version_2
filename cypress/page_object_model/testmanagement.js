class TestManagementTab{

    element = {
        verifyTestManagement: () => cy.contains("Test Management"),
        clickTestManagementTab: () => cy.contains("Test Management")
    }

    openTestManagementTab(){
        this.element.verifyTestManagement().should("be.visible")
        this.element.clickTestManagementTab().click({force:true})
    }


}

module.exports = new TestManagementTab()