class wishlist {
    elements ={
        giftCard : () => cy.get('body > div.master-wrapper-page .center-3 *.product-grid.home-page-product-grid *:nth-child(2) *.picture > a > img'),
        recipientName : () => cy.get('.recipient-name'),
        recipientEmail : () => cy.get('.recipient-email'),
        addWishlist : () => cy.get('#add-to-wishlist-button-2'),
    }
    OpenGiftCard(){
        this.elements.giftCard().click()
    }
    RecipientNameInput(name){
        this.elements.recipientName().type(name)
    }
    RecipientEmailInput(email){
        this.elements.recipientEmail().type(email)
    }
    AddtoWishlist(){
        this.elements.addWishlist().click()
    }
}
export default new wishlist()