import registerPage from "../elements/registerPage"
import loginPage from "../elements/loginPage"
import searchProducts from "../elements/searchProducts"
import checkout from "../elements/checkout"
import contact from "../elements/contact"
import navigationBar from "../elements/navigationBar"
import wishlist from "../elements/wishlist"
import cartUpdate from "../elements/cartUpdate"

describe('Smoke Testing Test Cases for Demowebshop', () => {
  beforeEach(function () {
    cy.visit('https://demowebshop.tricentis.com/');
  })

  it('<TC-001> Verify that a new user can register successfully', () => {


    registerPage.RregisterBtn()
    registerPage.enterFirstname('Tef')
    registerPage.enterLastname('Kip')
    registerPage.enterEmail('mej10@mail.com')
    registerPage.enterPassword('passw123')
    registerPage.enterConfirmPassword('passw123')
    registerPage.clickRegisterButton()
    registerPage.checkSuccessRegister()
  })

  it('<TC-002> Verify that an existing user can log in successfully', () => {


    loginPage.OpenLogin()
    loginPage.enterEmail('mej10@mail.com')
    loginPage.enterPassword('passw123')
    loginPage.clickLoginButton()
    loginPage.elements.welcomeMsg().should('have.text', 'Welcome to the new Tricentis store!')
    loginPage.elements.verifyLoginSuccessfully().should('contain.text', 'Log out')
  })

  it('<TC-003> Verify that a product can be searched using the search bar', () => {


    searchProducts.Search('laptop')
    searchProducts.clickSearch()
    searchProducts.elements.verifySuccessfulSearch().should('have.text', '14.1-inch Laptop')
  })

  it('<TC-004> Verify that a user can complete the checkout process', () => {


    loginPage.OpenLogin()
    loginPage.enterEmail('mej10@mail.com')
    loginPage.enterPassword('passw123')
    loginPage.clickLoginButton()
    checkout.addLaptop()
    checkout.goToCart()
    checkout.goToCheckout()

    const billingInfo = {
      country: '159',
      city: 'Skopje',
      adress: 'ulicabroj',
      zip: '1000',
      phone: '1234567890'
    }
    checkout.fillinInformation(billingInfo)
    checkout.continueAdress()
    checkout.shippingAdress()
    checkout.shippingMethod()
    checkout.paymentMethod()
    checkout.paymentInfo()
    checkout.confirmBtn()
  })

  it('<TC-005> Verify that the contact us form can be submitted successfully', () => {


    contact.contactUsBtn()
    contact.Name('Tef')
    contact.Email('mej10@mail.com')
    contact.Enquiry('This is a test message')
    contact.Submit()
  })

  it('<TC-006> Verify that the main navigation bar links work correctly', () => {


    navigationBar.Books()
    navigationBar.elements.assertTitle().should('have.text', 'Books')
    cy.url().should('include', '/books')
    navigationBar.Computers()
    navigationBar.elements.assertTitle().should('have.text', 'Computers')
    cy.url().should('include', '/computers')
    navigationBar.Electronics()
    navigationBar.elements.assertTitle().should('have.text', 'Electronics')
    cy.url().should('include', '/electronics')
    navigationBar.Apparel()
    navigationBar.elements.assertTitle().should('have.text', 'Apparel & Shoes')
    cy.url().should('include', '/apparel-shoes')
    navigationBar.Digital()
    navigationBar.elements.assertTitle().should('have.text', 'Digital downloads')
    cy.url().should('include', '/digital-downloads')
    navigationBar.Jewelry()
    navigationBar.elements.assertTitle().should('have.text', 'Jewelry')
    cy.url().should('include', '/jewelry')
    navigationBar.GiftCards()
    navigationBar.elements.assertTitle().should('have.text', 'Gift Cards')
    cy.url().should('include', '/gift-cards')


  })

  it('<TC-007> Verify that a user can add gift cards to the wishlist', () => {


    loginPage.OpenLogin()
    loginPage.enterEmail('mej10@mail.com')
    loginPage.enterPassword('passw123')
    loginPage.clickLoginButton()
    wishlist.OpenGiftCard()
    wishlist.RecipientNameInput('Stefi')
    wishlist.RecipientEmailInput('stefi@mail.com')
    wishlist.AddtoWishlist()


  })

  it('<TC-008> Verify that the shopping cart can be updated', () => {


    loginPage.OpenLogin()
    loginPage.enterEmail('mej9@mail.com')
    loginPage.enterPassword('passw123')
    loginPage.clickLoginButton()
    checkout.addLaptop()
    checkout.goToCart()
    cartUpdate.ChangeQuantity('4')
    cartUpdate.UpdateCart()
  })
})
