let LoginPage = require('../page-objects/Login');
let LoginData = require('../test-data/TC_001_LoginOK');

describe('Login', () => {
	const LOGIN_DATA = LoginData.VALID_LOGIN_CREDS;
	before(() => {
		browser.url('https://the-internet.herokuapp.com/login');
    });
    
	it('Should login OK', () => {
        LoginPage
            .inputUsername(LOGIN_DATA.username)
            .inputPassword(LOGIN_DATA.password)
            .clickOnLoginBtn();
	});
});
