
import login from "../POM/admin login"
import dashboard from "../POM/Dashboard";
let repodata;
describe('Admin', () => {
   
    beforeEach(() => {
        cy.fixture('admincredentials').then((testdata) => {
            repodata = testdata
            cy.visit(Cypress.config('baseUrl'), { timeout: 120000 })
        })
    })

    it('Test that admin in able to login into application', () => {
        const log = new login()
        const dshh = new dashboard
        log.logincredentials(repodata.Email, repodata.Password)


    })
    
    it('verify that dashboard modules and icons are visible', () => {
        const log = new login()
        const dshh = new dashboard
        log.logincredentials(repodata.Email, repodata.Password)
        dshh.validateallfieldsofdashboard()
    })

    it('verify that user is able to logout from the application', () => {
        const log = new login()
        const dashh = new dashboard()
        log.logincredentials(repodata.Email, repodata.Password)
        dashh.logoutfromdashboard()
    })
})

