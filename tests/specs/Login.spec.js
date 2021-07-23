// const LoginScreen = require('../screenObjects/Login.screen');
// const NotificationsScreen = require ('../screenObjects/components/Notifications.screen')

describe('Login', () => {

    context('Valid Login', () => {
        // before('Login with valid credentials', () => {
        //     // NotificationsScreen.disableDebugNotifications();
        //     // LoginScreen.login(process.env.VARIANT_TEST_USER_B_USERNAME, process.env.VARIANT_TEST_USER_B_PASSWORD);
        // })
    
        it('should login with valid credentials', () => {
            $('~Username').setValue('test')

            // expect($('~Sign In').waitForDisplayed()).to.eql(false);
        });
    })

    // context('Invalid Login', () => {
    //     before('login with invalid credentials', () => {
    //         LoginScreen.login('foobar', 'foobar');
    //     })
    
    //     it('should not log you in', () => {
    //         expect($('~Sign In').waitForDisplayed()).to.eql(true);
    //     })
    // })
});
