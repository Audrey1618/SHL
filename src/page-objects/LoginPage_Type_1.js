const USER_NAME_TXTBX = '#username';
const PASSWORD_TXT_BTN = '#password';
const LOGIN_BTN = '[type="submit"]';

class Login_page {
	waitForUsernameDisplayed() {
		$(USER_NAME_TXTBX).waitForDisplayed(15000);
	}
	get username() {
		return $(USER_NAME_TXTBX);
	}

	get password() {
		return $(PASSWORD_TXT_BTN);
	}

	get loginBtn() {
		return $(LOGIN_BTN);
	}
}

module.exports = new Login_page();
// gần như ko thay đổi hình hài => mình export dưới dạng instance luôn
// nếu vậy thì mình có thể dùng các getter bên trong mà ko cần khởi tạo lại biến
