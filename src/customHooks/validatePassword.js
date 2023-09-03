import notify from './notify';

const regexUppercase = /(?=.*[A-Z])/;
const regexLowercase = /(?=.*[a-z])/;
const regexNumber = /(?=.*\d)/;
const regexSpecialChar = /(?=.*[@$!%*?&])/;

export default function validatePassword(password, confirmPassword) {
	if (password.length < 6) {
		return notify('error', 'Password length must be 6 character long');
	} else if (password !== confirmPassword) {
		return notify('error', "Password didn't matched");
	} else if (!regexUppercase.test(password)) {
		return notify('error', 'One uppercase letter required');
	} else if (!regexLowercase.test(password)) {
		return notify('error', 'One lowercase letter required');
	} else if (!regexNumber.test(password)) {
		return notify('error', 'One number required');
	} else if (!regexSpecialChar.test(password)) {
		return notify('error', 'One special character required');
	} else {
		return true;
	}
}
