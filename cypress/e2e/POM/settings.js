import dashboard from "./Dashboard";
const dashboardelement = new dashboard()

class adduser {
    elements = {
        Adduser: () => cy.get('button.ant-btn-primary'),
        userfirstnametext: () => cy.get('#firstName'),
        userlastnametext: () => cy.get('#lastName'),
        useremailtext: () => cy.get('#email'),
        companynametext: () => cy.get('#company'),
        jobtitlefield: () => cy.get('#jobTitle'),
        userphonenumber: () => cy.get('#phoneNumber'),
        setpswradiobttn: () => cy.get('input[value="1"]'),
        autogeneratepsdbtn: () => cy.get('input[value="2"]'),
        Accessdropdown: () => cy.get('.ant-select-selection-overflow'),
        userpswdfield: () => cy.get('#password'),
        adduserbtn: () => cy.get('#submit'),
        copypsswrd: () => cy.contains('Copy Password'),
        useraddedsucesfulytxt: () => cy.get('h4.ant-typography'),
        addanother: () => cy.get('.flex > .ant-btn-primary'),

        mobiconclick: () => cy.get('svg.myReact-icons').eq(0),
        closebtn: () => cy.get('svg[data-icon="close"]'),
        addbtn: () => cy.get('.ant-float-btn-content')
    }

    // invalid = {
    //     invalidusermsg: () => cy.get('#notistack-snackbar').should('have.text', 'Email already exits')
    // }




    settings(frstname, lastname, email, company, job, phone,) {
        dashboardelement.elements.settingdropdown().click()
        dashboardelement.elements.adminuser().click()
        this.elements.Adduser().contains("Add User").click()
        this.elements.userfirstnametext().type(frstname)
        this.elements.userlastnametext().type(lastname)
        this.elements.useremailtext().type(email)
        this.elements.companynametext().type(company)
        this.elements.jobtitlefield().type(job)
        this.elements.userphonenumber().type(phone)
        this.elements.setpswradiobttn().click()
        // this.elements.autogeneratepsdbtn().click()
        // this.elements.Accessdropdown().click().type('c12', '{eneter}')
        this.elements.userpswdfield().type('Test@123')
        this.elements.adduserbtn().click()
        this.elements.useraddedsucesfulytxt().should('contain', 'User Added successfully')
        this.elements.copypsswrd().click()
        cy.wait(4000)
    }

    settings2(frstname, lastname, email, company, job, phone,) {
        dashboardelement.elements.settingdropdown().click()
        dashboardelement.elements.adminuser().click()
        this.elements.Adduser().contains("Add User").click()
        this.elements.userfirstnametext().type(frstname)
        this.elements.userlastnametext().type(lastname)
        this.elements.useremailtext().type(email)
        this.elements.companynametext().type(company)
        this.elements.jobtitlefield().type(job)
        this.elements.userphonenumber().type(phone)
        this.elements.autogeneratepsdbtn().click()
        //this.elements.Accessdropdown().click().type('c12', '{eneter}')
        this.elements.adduserbtn().click()
        this.elements.copypsswrd().click()


    }

    emailalreadyregistered(frstname, lastname, email, company, job, phone,) {
        dashboardelement.elements.settingdropdown().click()
        dashboardelement.elements.adminuser().click()
        this.elements.Adduser().contains("Add User").click()
        this.elements.userfirstnametext().type(frstname)
        this.elements.userlastnametext().type(lastname)
        this.elements.useremailtext().type(email)
        this.elements.companynametext().type(company)
        this.elements.jobtitlefield().type(job)
        this.elements.userphonenumber().type(phone)
        this.elements.autogeneratepsdbtn().click()
        //this.elements.Accessdropdown().click().type('c12', '{eneter}')
        this.elements.adduserbtn().click()
        cy.get('#notistack-snackbar').should('have.text', 'Email already exists')
        //this.invalid.invalidusermsg()
        cy.wait(3000)

    }

    addanotheruser(frstname, lastname, email, company, job, phone,) {
        dashboardelement.elements.settingdropdown().click()
        dashboardelement.elements.adminuser().click()
        this.elements.Adduser().contains("Add User").click()
        this.elements.userfirstnametext().type(frstname)
        this.elements.userlastnametext().type(lastname)
        this.elements.useremailtext().type(email)
        this.elements.companynametext().type(company)
        this.elements.jobtitlefield().type(job)
        this.elements.userphonenumber().type(phone)
        this.elements.autogeneratepsdbtn().click()
        this.elements.adduserbtn().click()
        cy.wait(3000)
        this.elements.addanother().click()
        this.settings2(frstname, lastname, email, company, job, phone,)

    }

    deleteuser() {
        dashboardelement.elements.settingdropdown().click()
        dashboardelement.elements.adminuser().click()
        cy.viewport(1366,768)
       // cy.get('body').scrollTo('right',{ensureScrollable: false})
        cy.wait(2000)
        cy.get('tbody tr').find('td').find('javid').then((into)=>{
            const test= into.text()
            cy.log(test)
        })

    }


    mobileview(frstname, lastname, email, company, job, phone,text) {
        this.elements.mobiconclick().click()
        dashboardelement.elements.settingdropdown().click()
        dashboardelement.elements.adminuser().click()
        this.elements.closebtn().click()
        cy.wait(2000)
        this.elements.addbtn().click()
        this.elements.userfirstnametext().type(frstname)
        this.elements.userlastnametext().type(lastname)
        this.elements.useremailtext().type(email)
        this.elements.companynametext().type(company)
        this.elements.jobtitlefield().type(job)
        this.elements.userphonenumber().type(phone)
        this.elements.autogeneratepsdbtn().click()
        this.elements.adduserbtn().click()
        this.elements.useraddedsucesfulytxt().should('contain', 'User Added successfully')
        this.elements.copypsswrd().click()
        cy.wait(2000)
        cy.get('.p-3 > :nth-child(2)').eq(0).should('have.text', 'javid Ahmad')
        
    }


}
export default adduser;



