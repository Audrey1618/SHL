const USER_NAME_TXTBX = '#username';
const PASSWORD_TXT_BTN = '#password';
const LOGIN_BTN = '[type="submit"]';

class LoginPage {
    waitForUsernameDisplayed() {
        return $(USER_NAME_TXTBX).waitForUsernameDisplayed(15000)
    }

    setCreds(username, password) {
        $(USER_NAME_TXTBX).setValue(username)
        $(PASSWORD_TXT_BTN).setValue(password);
        $(LOGIN_BTN).click()
    }
}

module.exports = new LoginPage();
