let LoginPage = require('../page-objects/LoginPage_Type_1.js')
let baseUrl = 'https://the-internet.herokuapp.com/login';

describe('Login type 01', () => {
	it('should Login to the page', async () => {
		await browser.url(baseUrl);
		LoginPage.waitForUsernameDisplayed(); // đây là 1 function
		await LoginPage.username.setValue('ABC');
		await LoginPage.password.setValue('123456');
		await LoginPage.loginBtn.click();
	});
});
