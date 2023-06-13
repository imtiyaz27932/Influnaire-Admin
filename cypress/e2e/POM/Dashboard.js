class dashboard {
    elements = {
        dashboardlogo: () => cy.get('img'),
        dashboardmodule: () => cy.contains('Dashboard'),
        influncerdropdown: () => cy.contains('Influencers'),
        findinfluncer: () => cy.contains('Find Influencer'),
        influncerlist: () => cy.contains('Influencer List'),
        addinfluncer: () => cy.contains('Add Influencer'),
        campaigndropdown: () => cy.contains('Campaigns'),
        campaignlist: () => cy.contains('Campaign List'),
        createcampaign: () => cy.contains('Create Campaign'),
        branddropdown: () => cy.contains('Brands'),
        brandlist: () => cy.contains('Brand List'),
        createbrand: () => cy.contains('Create Brand'),
        contentdropdown: () => cy.contains('Content'),
        posts: () => cy.contains('Posts'),
        settingdropdown: () => cy.contains('Settings'),
        adminuser: () => cy.contains('Admin User'),
        payments: () => cy.contains('Payments'),
        Notifications: () => cy.contains('Notifications'),







        dashbaordicon: () => cy.get('.myReact-icons').eq(0),
        influncericon: () => cy.get('.myReact-icons').eq(1),
        campaignicon: () => cy.get('.myReact-icons').eq(2),
        brandicon: () => cy.get('.myReact-icons').eq(3),
        contenticon: () => cy.get('.myReact-icons').eq(4),
        settingsicon: () => cy.get('.myReact-icons').eq(5),
        closenavicon: () => cy.get('.myReact-icons').eq(6),
        helpicon: () => cy.get('.myReact-icons').eq(7),
        notificationicon: () => cy.get('.myReact-icons').eq(8),
        darkmodeicon: () => cy.get('.myReact-icons').eq(9),
        languageicon: () => cy.get('.myReact-icons').eq(10),
        profileicon: () => cy.get('.myReact-icons').eq(11),
        profilename: () => cy.get('[class="ant-typography cursor-pointer css-dev-only-do-not-override-i9o64j"]'),
        logout: () => cy.contains('Logout'),
        arabiclanguage: () => cy.get('.ant-dropdown-menu-title-content').eq(1),
        englishlanguage: () => cy.get('.ant-dropdown-menu-title-content').eq(0),
        //userclicksalreadyhaveanaccount: () => cy.get('a[href="/brand/login"]')

    }
    validateallfieldsofdashboard() {
      
        this.elements.dashboardlogo().should('be.visible')
        this.elements.dashboardmodule().should('be.visible').should('have.text', 'Dashboard')
        this.elements.profilename().should('be.visible').should('have.text','John')
        this.elements.dashbaordicon().should('be.visible')
        this.elements.influncericon().should('be.visible')
        this.elements.campaignicon().should('be.visible')
        this.elements.brandicon().should('be.visible')
        this.elements.contenticon().should('be.visible')
        this.elements.settingsicon().should('be.visible')
        this.elements.helpicon().should('be.visible')
        this.elements.notificationicon().should('be.visible')
        this.elements.darkmodeicon().should('be.visible')
        this.elements.languageicon().should('be.visible')
        this.elements.profileicon().should('be.visible')
        this.elements.influncerdropdown().should('be.visible').click()
        this.elements.findinfluncer().should('be.visible')
        this.elements.influncerlist().should('be.visible')
        this.elements.addinfluncer().should('be.visible')
        this.elements.campaigndropdown().should('be.visible').click()
        this.elements.campaignlist().should('be.visible')
        this.elements.createcampaign().should('be.visible')
        this.elements.branddropdown().should('be.visible').click()
        this.elements.brandlist().should('be.visible')
        this.elements.createbrand().should('be.visible')
        this.elements.contentdropdown().should('be.visible').click()
        this.elements.posts().should('be.visible')
        cy.get('.ant-layout-sider').scrollTo('bottom')
        this.elements.settingdropdown().should('be.visible').click()
        cy.wait(3000)
        cy.get('.ant-layout-sider').scrollTo('bottom')
        this.elements.adminuser().should('be.visible')
        this.elements.payments().should('be.visible')
        this.elements.Notifications().should('be.visible')

    }

    validatedashboardicon() {

       
        this.elements.dashbaordicon().should('be.visible')
        this.elements.dashbaordicon().should('be.visible')
        this.elements.influncericon().should('be.visible')
        this.elements.campaignicon().should('be.visible')
        this.elements.contenticon().should('be.visible')
        this.elements.settingsicon().should('be.visible')
        this.elements.closenavicon().should('be.visible')
        this.elements.helpicon().should('be.visible')
        this.elements.notificationicon().should('be.visible')
        this.elements.darkmodeicon().should('be.visible')
        this.elements.languageicon().should('be.visible')
        this.elements.profileicon().should('be.visible')
        this.elements.profilename().should('be.visible')

    }

    logoutfromdashboard() {
        this.elements.profileicon().click()
        this.elements.logout().click()
        cy.url().should('be.eq', 'https://app.influnaire.dreamkashmir.com/brand/login')
    }

}
export default dashboard;