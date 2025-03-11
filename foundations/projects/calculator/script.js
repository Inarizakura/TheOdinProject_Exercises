let res = 0;
let num = 0;
let op = '';
let resFlag = false;
let numFlag = false;
let decFlag = false;
let errFlag = false;

// Display
let history = document.getElementById("history");
let display = document.getElementById("calc-display");

// Buttons
let calc_btn = document.getElementById("calc-numpad");
let clear = document.getElementById("clear");

// Operations Functions
function add() {
	return res + num;
}

function subtract() {
	return res - num;
}

function multiply() {
	return res * num;
}

function divide() {
	return res / num;
}

function operate() {
	if (!numFlag) {
		return;
	}
	history.textContent = res.toString() + op + num.toString() + '=';
	switch (op) {
		case '+':
			res = add(res, num);
			break;
		case '-':
			res = subtract(res, num);
			break;
		case '*':
			res = multiply(res, num);
			break;
		case '/':
			res = divide(res, num);
			break;
	}
	num = 0;
	op = '';
	resFlag = true;
	numFlag = false;
	decFlag = false;
}

// Display equation
function displayEquation() {
	if (!op) {
		if (!decFlag || (decFlag && (res != Math.floor(res)))) {
			display.textContent = res.toString();
		} else {
			display.textContent = res.toString() + '.';
		}
	} else if (op && !numFlag) {
			display.textContent = res.toString() + op;
	} else {
		if (!decFlag || (decFlag && (num != Math.floor(num)))) {
			display.textContent = res.toString() + op + num.toString();
		} else {
			display.textContent = res.toString() + op + num.toString() + '.';
		}
	}
}

// Reset all variables
function reset() {
	res = 0;
	num = 0;
	op = '';
	resFlag = false;
	numFlag = false;
	decFlag = false;
}

// Click listener for clear
clear.addEventListener("click", (e) => {
	history.textContent = "";
	reset();
	displayEquation();
});

function getOperator(operator) {
	decFlag = false;
	if (!op || (op && !numFlag)) {
		op = operator;
	} else {
		operate(res, num, op);
		num = +'';
		op = operator;
		numFlag = false;
	}
}

function getNum(digit) {
	if (op) {
		numFlag = true;
		if (!decFlag) {
			num = (num * 10) + digit;
		} else {
			if (num === Math.floor(num)) {
				const temp = num.toString() + '.' + digit.toString();
				num = +temp;
			} else {
				const temp = num.toString() + digit.toString();
				num = +temp;
			}
		}
	} else {
		if (resFlag) {
			history.textContent = res;
			res = digit;
			resFlag = false;
		} else {
			if (!decFlag) {
				res = (res * 10) + digit;
			} else {
				if (res === Math.floor(res)) {
					const temp = res.toString() + '.' + digit.toString();
					res = +temp;
				} else {
					const temp = res.toString() + digit.toString();
					res = +temp;
				}
			}
		}
	}
}

calc_btn.addEventListener("click", (e) => {
	let target = e.target;

	switch (target.textContent) {
		case '1':
			getNum(+target.textContent);
			break;
		case '2':
			getNum(+target.textContent);
			break;
		case '3':
			getNum(+target.textContent);
			break;
		case '4':
			getNum(+target.textContent);
			break;
		case '5':
			getNum(+target.textContent);
			break;
		case '6':
			getNum(+target.textContent);
			break;
		case '7':
			getNum(+target.textContent);
			break;
		case '8':
			getNum(+target.textContent);
			break;
		case '9':
			getNum(+target.textContent);
			break;
		case '0':
			getNum(+target.textContent);
			break;
		case '/':
			getOperator('/');
			break;
		case '*':
			getOperator('*');
			break;
		case '-':
			getOperator('-');
			break;
		case '+':
			getOperator('+');
			break;
		case '.':
			if (!decFlag) {
				decFlag = true;
			}
			break;
		case '=':
			if (num === 0 && op === '/') {
				display.textContent = "Infinity, division by Zero is impossible!";
				reset();
				errFlag = true;
			} else {
				operate();
			}
			break;
	}
	if (!errFlag) {
		displayEquation();
	} else {
		errFlag = false;
	}
});

displayEquation();
