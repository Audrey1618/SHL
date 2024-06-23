let LoginPage = require('../page-objects/Login');
let LoginData = require('../test-data/TC_002_LoginFailed');

describe('Login', () => {
	const LOGIN_DATA = LoginData.INVALID_LOGIN_CREDS;
	before(() => {
		browser.url('https://the-internet.herokuapp.com/login');
	});

	it('Should login failed', async () => {
        LoginPage.inputUsername(LOGIN_DATA.username).inputPassword(LOGIN_DATA.password).clickOnLoginBtn();
        await browser.pause(20000)
	});
});
