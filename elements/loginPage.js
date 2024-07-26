class loginPage {
    elements = {
        loginBtn: () => cy.get('.ico-login'),
        inputEmail: () => cy.get('#Email'),
        inputPassword: () => cy.get('#Password'),
        login: () => cy.get('form > .buttons > .button-1'),
        getSpan: () => cy.get('span'),
        welcomeMsg: () => cy.get('.topic-html-content-body > p:nth-child(1)'),
        verifyLoginSuccessfully: () => cy.get('.ico-logout'),
    }
    OpenLogin() {
        this.elements.loginBtn().click()
    }
    enterEmail(email) {
        this.elements.inputEmail().clear();
        this.elements.inputEmail().type(email);
    }

    enterPassword(password) {
        this.elements.inputPassword().clear();
        this.elements.inputPassword().type(password);
    }

    clickLoginButton() {
        this.elements.login().click();
    }
    checkContainsErrorMessage(message) {
        this.elements.getSpan();
        cy.contains(message);
    }
}

export default new loginPage()