class navigationBar {
    elements ={
        booksMenu : () => cy.get('.top-menu [href="/books"]'),
        computersMenu : () => cy.get('.top-menu [href="/computers"]'),
        electronicsMenu : () => cy.get('.top-menu [href="/electronics"]'),
        apparelMenu : () => cy.get('.top-menu [href="/apparel-shoes"]'),
        digitalDownloads : () => cy.get('.top-menu [href="/digital-downloads"]'),
        jewelryMenu : () => cy.get('.top-menu [href="/jewelry"]'),
        giftCards : () => cy.get ('.top-menu [href="/gift-cards"]'),
        assertTitle : () => cy.get('.page-title > h1')
    }
    Books(){
        this.elements.booksMenu().click()
    }
    Computers(){
        this.elements.computersMenu().click()
    }
    Electronics(){
        this.elements.electronicsMenu().click()
    }
    Apparel(){
        this.elements.apparelMenu().click()
    }
    Digital(){
        this.elements.digitalDownloads().click()
    }
    Jewelry(){
        this.elements.jewelryMenu().click()
    }
    GiftCards(){
        this.elements.giftCards().click()
    }
}
export default new navigationBar()