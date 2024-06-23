const USER_NAME_TXTBX = '#username';
const PASSWORD_TXT_BTN = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage {
	waitForUsernameDisplayed() {
        $(USER_NAME_TXTBX).waitForDisplayed(15000);
        return this
        
	}
	inputUsername(username) {
        $(USER_NAME_TXTBX).setValue(username);
        return this;
	}
	inputPassword(password) {
        $(PASSWORD_TXT_BTN).setValue(password);
        return this;
	}
	clickOnLoginBtn() {
        $(LOGIN_BTN).click();
        return this;
    }
    
}

module.exports = new LoginPage();
