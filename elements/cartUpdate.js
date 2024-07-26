class cartUpdate {
    elements ={
        quantity : () => cy.get('.qty-input'),
        updateCart : () => cy.get('.update-cart-button')
    }
    ChangeQuantity(quantity){
        this.elements.quantity().type(quantity)
    }
    UpdateCart(){
        this.elements.updateCart().click()
    }
}
export default new cartUpdate()