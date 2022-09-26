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

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById('password2-el');
let passwdLengthEl = document.getElementById('input-el')
let pwdErrorEl = document.getElementById('pwdError-el');

let numCheckboxEl = document.getElementById('numbers-el');
let symbolsCheckboxEl = document.getElementById('symbols-el');


// Set password length input box attributes
passwdLengthEl.defaultValue = 15
passwdLengthEl.min = 8
passwdLengthEl.max = 20
passwdLengthEl.step = 1;

function getRandomChar() {
	return Math.floor(Math.random() * characters.length);
};

function combineArrays() {
	characters = [];
	if (numCheckboxEl.checked && symbolsCheckboxEl.checked === false) {
		characters = letters.concat(numbers);
	} else if (symbolsCheckboxEl.checked && numCheckboxEl.checked === false) {
		characters = letters.concat(symbols);
	} else if (numCheckboxEl.checked && symbolsCheckboxEl.checked) {
		characters = letters.concat(numbers, symbols);
	} else if (symbolsCheckboxEl.checked === false && numCheckboxEl.checked === false) {
		characters = letters;
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

