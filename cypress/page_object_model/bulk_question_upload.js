class UploadQuestion{

    elements = {
        title: () => cy.contains("Dashboard")
    }

    openapp(){
        this.elements.title().should('be.visible')
    }



}

module.exports = new UploadQuestion();