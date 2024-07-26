class checkout {
    elements = {
        laptop: () => cy.get('.master-wrapper-page .center-3 *.product-grid.home-page-product-grid *:nth-child(3) *.details *.add-info *.buttons > input'),
        openCart: () => cy.get('#topcartlink > a'),
        termsofService: () => cy.get('.terms-of-service > input'),
        checkout: () => cy.get('#checkout.button-1'),
        country: () => cy.get('#BillingNewAddress_CountryId'),
        city: () => cy.get('#BillingNewAddress_City'),
        adress: () => cy.get('#BillingNewAddress_Address1'),
        zip: () => cy.get('#BillingNewAddress_ZipPostalCode'),
        phone: () => cy.get('#BillingNewAddress_PhoneNumber'),
        adressContinue: () => cy.get('#billing-buttons-container > input'),
        shippingAdress: () => cy.get('#shipping-buttons-container > input'),
        shippingMethodContinue: () => cy.get('#shipping-method-buttons-container > input'),
        paymentMethodContinue: () => cy.get('#payment-method-buttons-container > input'),
        paymentInfoContinue: () => cy.get('#payment-info-buttons-container > input'),
        confirm: () => cy.get('#confirm-order-buttons-container > input'),
    }
    addLaptop() {
        this.elements.laptop().click()
    }
    goToCart() {
        this.elements.openCart().click()
    }
    goToCheckout() {
        this.elements.termsofService().click()
        this.elements.checkout().click()
    }
    fillinInformation(info) {
        this.elements.country().select(info.country)
        this.elements.city().type(info.city)
        this.elements.adress().type(info.adress)
        this.elements.zip().type(info.zip)
        this.elements.phone().type(info.phone)
    }
    continueAdress() {
        this.elements.adressContinue().click()
    }
    shippingAdress() {
        this.elements.shippingAdress().click()
    }
    shippingMethod() {
        this.elements.shippingMethodContinue().click()
    }
    paymentMethod() {
        this.elements.paymentMethodContinue().click()
    }
    paymentInfo() {
        this.elements.paymentInfoContinue().click()
    }
    confirmBtn() {
        this.elements.confirm().click()
    }


}
export default new checkout()