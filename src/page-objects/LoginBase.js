class LoginBase {
	openTestingBase(path) {
		browser.url(path);
	}
}

module.exports = new LoginBase();
