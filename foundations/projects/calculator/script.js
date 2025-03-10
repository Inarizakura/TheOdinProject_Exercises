function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(a, b, op) {
	switch (op) {
		case '+':
			add(a, b);
			break;
		case '-':
			subtract(a, b);
			break;
		case '*':
			multiply(a, b);
			break;
		case '/':
			divide(a, b);
			break;
	}
}

let res = 0;
let num;
let op;
let decFlag = 0;
