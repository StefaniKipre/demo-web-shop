class contact {
    elements ={
        contactUs: () => cy.get('.column.information > ul > li:nth-child(6) > a'),
        name: () => cy.get('#FullName'),
        email : () => cy.get('#Email'),
        enquiry : () => cy.get('#Enquiry'),
        submitBtn : () => cy.get('.contact-us-button'),
        success : () => cy.get('.page-title')

    }
    contactUsBtn(){
        this.elements.contactUs().click()
    }
    Name(name){
        this.elements.name().type(name)
    }
    Email(email){
        this.elements.email().type(email)
    }
    Enquiry(enquiry){
        this.elements.enquiry().type(enquiry)
    }
    Submit(){
        this.elements.submitBtn().click()
    }
}
export default new contact()