function validateForm() {
    var log = document.loginform.log.value;
    var pwd = document.loginform.pwd.value;
    var login = "test"; 
    var password = "qwerty12345";
    if ((log == login) && (pwd == password)) {
		return true;
    } else if ((log == "") && (pwd == "")) {
		var error = "Введите, пожалуйста, логин и пароль.";
		showError(error);
        return false;
	} else if (log == "") {
		var error = "Введите, пожалуйста, логин.";
		showError(error);
        return false;
	} else if (pwd == "") {
		var error = "Введите, пожалуйста, пароль.";
		showError(error);
        return false;
	} else {
		var error = "Неправильный логин или пароль. Возможно, у вас выбрана другая раскладка клавиатуры или нажата клавиша \"Caps Lock\".";
		showError(error);
        return false;
    }
}
function showError(error) {
	document.getElementById("error").style.top = "0";
	document.getElementById("error").innerHTML = error;
}