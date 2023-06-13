import login from "../POM/admin login"
let repodata;
describe('Admin', () => {
    beforeEach(() => {

        cy.fixture('admincredentials').then((testdata) => {
            repodata = testdata
            cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
        })
    })

    it('Test that admin in able to login', () => {
        const log = new login()
        log.logincredentials(repodata.Email, repodata.Password)
    })

    it('verify that if admin is able to login with invalid credentials', () => {
        const log = new login()
        log.loginwithinvalidcredentials()


    })

    it('verify that if the admin enters email and leaves psd empty and clicks on login button', () => {
        const log = new login()
        log.fillemailandleavepsdempty(repodata.Email)

    })

    it('verify that if user leaves email empty and fills the password field and clicks on the login button', () => {
        const log = new login()
        log.fillpasswordandleaveemailempty(repodata.Password)
    })

    it('Test that Email field, Password field and login button are visible on login page', () => {
        const log = new login()
        log.loginfieldsvisibleity()

    })

    it('verify that admin is able to reset password', () => {
        const log = new login()
        log.forgotpassword(repodata.Email, repodata.Passwordnew1, repodata.Passwordnew2)
    })

})