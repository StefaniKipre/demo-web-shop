class searchProducts {
    elements ={
        searchStoreInput : () => cy.get('#small-searchterms[value="Search store"]'),
        searchBtn : () => cy.get('.search-box-button'),
        verifySuccessfulSearch : () => cy.get('h2 > [href="/141-inch-laptop"]'),
    }
    Search(keyword){
        this.elements.searchStoreInput().type(keyword)
    }
    clickSearch(){
        this.elements.searchBtn().click()
    }
}
export default new searchProducts()