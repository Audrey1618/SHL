let LoginPage = require('../page-objects/LoginPage_Type_2.js');
let baseUrl = 'https://the-internet.herokuapp.com/login';

describe('Page object type 2', () => {
	it('Login to the page', async () => {
		// 1. Open the page
        browser.url(baseUrl);
        
        // 2. Set creds
        LoginPage.setCreds('abc', '123')

        // 3. Wait
        browser.pause(30000)
	});
});
