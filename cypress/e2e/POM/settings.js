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
        addbtn: () => cy.get('.ant-float-btn-content'),

        instagram:()=> cy.get('.ant-input-number-input-wrap').eq(0),
        facebook:()=> cy.get('.ant-input-number-input-wrap').eq(1),
        Youtube:()=> cy.get('.ant-input-number-input-wrap').eq(2),
        syncFrequency:()=> cy.get('.ant-input-number-input-wrap').eq(3),


        editprofilefname:()=> cy.get('#firstName'),
        editprofilelname:()=> cy.get('#lastName'),
        editprofilecompanyname:()=> cy.get('#company'),
        editprofilejob:()=> cy.get('#jobTitle'),
        updateprofilebtn:()=> cy.get('.ant-btn')






    }

    // invalid = {
    //     invalidusermsg: () => cy.get('#notistack-snackbar').should('have.text', 'Email already exits')
    // }


    requiremsg ={
        requriedfield1:()=> cy.get('.ant-form-item-explain-error').eq(0).should('have.text','Required field'),
        requiredfield2:()=> cy.get('.ant-form-item-explain-error').eq(1).should('have.text','Required field'),
    }

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
        cy.viewport(1366, 768)
        // cy.get('body').scrollTo('right',{ensureScrollable: false})
        cy.wait(2000)
        cy.get('tbody tr').find('td').find('javid').then((into) => {
            const test = into.text()
            cy.log(test)
        })

    }


    mobileview(frstname, lastname, email, company, job, phone, text) {
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

    threshhold() {

        dashboardelement.elements.settingdropdown().should('be.visible').click()
        cy.wait(3000)
        cy.get('.ant-layout-sider').scrollTo('bottom', { ensureScrollable: false });
        cy.pause()
        dashboardelement.elements.influencer2().click()
        cy.pause()
        cy.wait(2000)
        this.elements.instagram().type('200')
        this.elements.facebook().type('300')
        this.elements.Youtube().type('400')
        this.elements.syncFrequency().type('500')
    }


    termsandconditions(){
        dashboardelement.elements.settingdropdown().should('be.visible').click()
        cy.wait(3000)
        cy.get('.ant-layout-sider').scrollTo('bottom', { ensureScrollable: false });
        dashboardelement.elements.Brands().click()
    }

    editprofile(fname,lname,company,job){
        dashboardelement.elements.profileicon().trigger('mouseover');
        dashboardelement.elements.profile().click()
        cy.wait(3000)
        cy.get('#email')
        .invoke('val', 'your-email@example.com')
        this.elements.editprofilefname().clear().type(fname)
        this.elements.editprofilelname().clear().type(lname)
        this.elements.editprofilecompanyname().clear().type(company)
        this.elements.editprofilejob().clear().type(job)
        this.elements.updateprofilebtn().click()
        this.requiremsg.requriedfield1()
        this.requiremsg.requiredfield2()
        cy.wait(2000)
    }

}
export default adduser;



