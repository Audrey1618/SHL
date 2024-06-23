let baseUrl = 'https://the-internet.herokuapp.com';
let LoginBase = require('../page-objects/LoginBase');
let LoginPage = require('../page-objects/LoginPage_Type_3')

describe('PO 3', () => {
	before(() => {
		// 1. Do something in common for all test scripts

		// 2. To create test data for all scripts
		console.log('=> Start Testing');
		LoginBase.openTestingBase(baseUrl + '/login');
    });
    
    beforeEach(() => {
        console.log('BEFORE SCRIPT')
    })

	it('Login failed', async () => {
		console.log('TC001');
		LoginPage.waitForUsernameDisplayed().inputUsername('1234').inputPassword('helfjslk').clickOnLoginBtn();
	});

	it('Login successful', async () => {
		console.log('TC002');
		LoginPage.waitForUsernameDisplayed().inputUsername('tomsmith').inputPassword('SuperSecretPassword!').clickOnLoginBtn();
    });
    afterEach(() => {
		console.log('AFTER SCRIPT');
	});

	after(() => {
		// 1. Clean up testing data (để các test case sau ko bị conflict)
		console.log('=> TESTING DONE');
	});
});
