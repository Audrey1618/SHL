let LoginBase = require('../page-objects/LoginBase')
let LoginPage = require('../page-objects/LoginPage_Type_3');
let baseUrl = 'https://the-internet.herokuapp.com';

describe('PO 3', () => {
    
	it('Should login', async () => {
        // 1. Open the target page
        LoginBase.openTestingBase(baseUrl + '/login');

		// 2. Set creds - CHAINING
        LoginPage
            .waitForUsernameDisplayed()
            .inputUsername('1234')
            .inputPassword('helfjslk')
            .clickOnLoginBtn();

		// 3. Wait
        // browser.pause(10000);
        

	});
});
