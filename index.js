let characters = [];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const symbols = [
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];
const letters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
];

const password1El = document.getElementById("password1-el")
const password2El = document.getElementById('password2-el');
const passwdLengthEl = document.getElementById('input-el')
const pwdErrorEl = document.getElementById('pwdError-el');

const numCheckboxEl = document.getElementById('numbers-el');
const symbolsCheckboxEl = document.getElementById('symbols-el');


// Set password length input box attributes
passwdLengthEl.defaultValue = 15
passwdLengthEl.min = 8
passwdLengthEl.max = 20
passwdLengthEl.step = 1;

function getRandomChar() {
	return Math.floor(Math.random() * characters.length);
};

function combineArrays() {
	characters = [...letters];  // Use array spread syntax to include each item in the array
	if (numCheckboxEl.checked) {
		characters.push(...numbers)
	}
	if (symbolsCheckboxEl.checked) {
		characters.push(...symbols);
	}
}

function generatePassword() {
    let password = '';
	pwdErrorEl.textContent = "";
	
	if (passwdLengthEl.value < 8 || passwdLengthEl.value > 20) {
		pwdErrorEl.textContent = "Please enter a number between 8 and 20"
	} else {
		combineArrays();
		for (let i = 1; i < Number(passwdLengthEl.value) + 1; i++) {
			password += characters[getRandomChar()];
		}
		return password;
	}
}
function renderPasswords() {
    password1El.textContent = generatePassword()
    password2El.textContent = generatePassword()
}

