class login {
    elements = {
        emailtextfiled: () => cy.get('#email'),
        passwordtextfield: () => cy.get('.ant-input-affix-wrapper > .ant-input'),
        loginbtn: () => cy.get('.ant-btn'),
        textonloginpage: () => cy.get('.ant-typography'),
        forgetpsdlink: () => cy.get('a[href="/brand/forgotpassword"]'),
        emailfieldforforget: () => cy.get('.ant-input'),
        otpbtn: () => cy.get('.ant-btn'),
        verifyotpbtn: () => cy.get('.ant-btn'),
        setpsd1: () => cy.get('input[name="password"]'),
        setpsd2: () => cy.get('input[name="confirm_password"]'),
        restbtn: () => cy.get('button.ant-btn-dangerous')




    }

    invalid = {
        invalidusermsg: () => cy.get('#notistack-snackbar').should('have.text', 'Invalid credentials')
    }

    feildsvalidaitonmsg = {
        errormsg1: () => cy.get('.ant-form-item-explain-error').eq(0).should('have.text', 'Required field'),
        errormsg2: () => cy.get('.ant-form-item-explain-error').should('have.text', 'Required field'),
    }

    logincredentials(email, psd) {
        this.elements.emailtextfiled().type(email)
        this.elements.passwordtextfield().type(psd)
        this.elements.loginbtn().click()
        cy.wait(6000)
        //cy.url().should('be.eq', 'https://app.influnaire.dreamkashmir.com/brand/dashboard')
    }


    loginwithinvalidcredentials() {
        this.elements.emailtextfiled().type('abc@gmail.com')
        this.elements.passwordtextfield().type('test@123')
        this.elements.loginbtn().click()
        cy.wait(3000)
        this.invalid.invalidusermsg()

    }

    fillemailandleavepsdempty(email) {
        this.elements.emailtextfiled().type(email)
        this.elements.loginbtn().click()
        this.feildsvalidaitonmsg.errormsg1()

    }

    fillpasswordandleaveemailempty(psd) {
        this.elements.passwordtextfield().type(psd)
        this.elements.loginbtn().click()
        this.feildsvalidaitonmsg.errormsg2()
    }

    loginfieldsvisibleity() {
        this.elements.emailtextfiled().should('be.visible')
        this.elements.passwordtextfield().should('be.visible')
        this.elements.loginbtn().should('be.visible')
        this.elements.textonloginpage().should('have.text', 'Login to Influnaire Admin')
    }

    forgotpassword(email, psd1, psd2) {
        this.elements.forgetpsdlink().should('be.visible')
        this.elements.forgetpsdlink().click()
        this.elements.emailfieldforforget().should('be.visible')
        this.elements.emailfieldforforget().type(email)
        this.elements.otpbtn().should('be.visible')
        this.elements.otpbtn().click()
        this.elements.verifyotpbtn().should('be.visible')
        this.elements.verifyotpbtn().click()
        this.elements.setpsd1().should('be.visible')
        this.elements.setpsd1().type(psd1)
        this.elements.setpsd2().should('be.visible')
        this.elements.setpsd2().type(psd2)
        this.elements.restbtn().should('be.visible')
        this.elements.restbtn().click()

        cy.wait(4000)
        // cy.url().should('be.eq','https://app.influnaire.dreamkashmir.com/brand/login')

    }
}
export default login;