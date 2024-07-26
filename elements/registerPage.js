class registerPage {
    elements ={
        registerBtn : () => cy.get('.ico-register'),
        gender : () => cy.get('#gender-female'),
        inputFirstname : () => cy.get('#FirstName'),
        inputLastname : () => cy.get('#LastName'),
        inputEmail : () => cy.get('#Email'),
        inputPassword : () => cy.get('#Password'),
        inputConfirmPassword : () => cy.get('#ConfirmPassword'),
        clickRegisterbutton : () => cy.get('#register-button'),
        getSpan : () => cy.get('span')
    }
    RregisterBtn(){
        this.elements.registerBtn().click()
    }
    selectGender(){
        this.elements.gender().click()
    }
    enterFirstname(firstname)
    {
      this.elements.inputFirstname().clear();
      this.elements.inputFirstname().type(firstname);
    }

    enterLastname(lastname)
    {
      this.elements.inputLastname().clear();
      this.elements.inputLastname().type(lastname);
    }

    enterEmail(email)
    {
      this.elements.inputEmail().clear();
      this.elements.inputEmail().type(email);
    }

    enterPassword(password)
    {
      this.elements.inputPassword().clear();
      this.elements.inputPassword().type(password);
    }

    enterConfirmPassword(confirmpassword)
    {
      this.elements.inputConfirmPassword().clear();
      this.elements.inputConfirmPassword().type(confirmpassword);
    }

    clickRegisterButton()
    {
      this.elements.clickRegisterbutton().click();
    }

    checkContainsErrorMessage(message){
      this.elements.getSpan();
      cy.contains(message);
    }

    checkSuccessRegister(){
      cy.get('.result').should('contain.text', 'Your registration completed');
      cy.get('.page-body > .buttons > .button-1').click();
      cy.get('.ico-logout').should('contain.text', 'Log out');
    }
}

export default new registerPage()
