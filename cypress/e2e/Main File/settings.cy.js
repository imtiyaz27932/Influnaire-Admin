import login from "../POM/admin login";
import adduser from "../POM/settings";
import dashboard from "../POM/settings"

let repodata;

describe('Admin', () => {
    beforeEach(() => {
        cy.fixture('admincredentials').then((testdata) => {
            repodata = testdata;
            cy.visit(Cypress.config('baseUrl'), { timeout: 120000 });
        });
    });

    it('Test that admin is able to add a user', () => {

        const log = new login();
        const add = new adduser();
        log.logincredentials(repodata.Email, repodata.Password);
        cy.wait(6000);
        add.settings(repodata.Firstnameforadduser, repodata.Lastnameforadduser, repodata.email, repodata.Companyname, repodata.Jobtitle, repodata.Phone, repodata.pwd);


        //cy.reload()
        //cy.get('.ant-table-tbody > :nth-child(1) > :nth-child(2)').should('contain.text', repodata.Firstnameforadduser)
    });

    it('verify that admin is able to add user by generating password automatically', () => {
        const log = new login();
        const add = new adduser();
        log.logincredentials(repodata.Email, repodata.Password);
        cy.wait(6000);
        add.settings2(repodata.firstnameforadduser, repodata.lastnameforadduser, repodata.Emaill, repodata.companyname, repodata.jobtitle, repodata.phone, repodata.Pwd);
    });

    it('verify that if the user uses the same email address and it should give a validation message', () => {

        const log = new login();
        const add = new adduser();
        log.logincredentials(repodata.Email, repodata.Password);
        cy.wait(6000);

        add.emailalreadyregistered(repodata.Firstnameforadduser, repodata.Lastnameforadduser, repodata.email, repodata.Companyname, repodata.Jobtitle, repodata.Phone, repodata.pwd);


    });

    it.skip('verify that the user is able to click on the add user button after adding a successful user', () => {
        const log = new login();
        const add = new adduser();
        log.logincredentials(repodata.Email, repodata.Password);
        cy.wait(6000);
        add.addanotheruser(repodata.Firstnameforadduser, repodata.Lastnameforadduser, repodata.email, repodata.Companyname, repodata.Jobtitle, repodata.Phone, repodata.pwd);
    });

    it.skip('verify that admin is able to delete a user', () => {
        const log = new login()
        const add = new adduser()
        log.logincredentials(repodata.Email, repodata.Password);
        cy.wait(6000);
        add.deleteuser()

    })

    it('verify that user is able to add user, delete and edit user on mobile devices', () => {
        cy.viewport('samsung-s10');
        const log = new login()
        const add = new adduser()
        log.logincredentials(repodata.Email, repodata.Password);
        cy.wait(6000);
        add.mobileview(repodata.firstnameforaddusermobile, repodata.lastnameforaddusermobile, repodata.Emaillmobile, repodata.companynamemobile, repodata.jobtitlemobile, repodata.phonemobile, repodata.Pwdmobile)
    })

    
    it('Test that user is able to set threshold',()=>{
        const log= new login()
        const hero= new dashboard()
        log.logincredentials(repodata.Email, repodata.Password)
        hero.threshhold()
    })


    it('Test that user is able to set terms and conditions for creating campaign',()=>{
        const log= new login()
        const hero= new dashboard()
        log.logincredentials(repodata.Email, repodata.Password)
        hero.termsandconditions()
    })

    it('Test that brand is able to edit/update profile',()=>{
        const log= new login()
        const hero= new dashboard()
        log.logincredentials(repodata.Email, repodata.Password)
        cy.wait(2000)
        hero.editprofile(repodata.editproffirstname,repodata.editprofilelname,repodata.editprofilecompname,repodata.editprofiletitle)
        cy.wait(2000)
        
    })

})

