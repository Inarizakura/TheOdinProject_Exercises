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

function displayEquation(a, b, op) {
	if (!op) {
		display.textContent = a.toString();
	} else {
		display.textContent = a.toString() + op + b.toString();
	}
}

let res = 0;
let num = 0;
let op = '';
let opFlag = 0;
let decFlag = 0;

let calculator = document.getElementById("calc-body");

// Display
let display = document.getElementById("calc-display");

// Buttons
let calc_btn = document.getElementById("calc-numpad");
let clear = document.getElementById("clear");
// let btn_num1 = document.getElementById("num1");
// let btn_num2 = document.getElementById("num2");
// let btn_num3 = document.getElementById("num3");
// let btn_num4 = document.getElementById("num4");
// let btn_num5 = document.getElementById("num5");
// let btn_num6 = document.getElementById("num6");
// let btn_num7 = document.getElementById("num7");
// let btn_num8 = document.getElementById("num8");
// let btn_num9 = document.getElementById("num9");
// let btn_num0 = document.getElementById("num0");
// let btn_opDivide = document.getElementById("opDivide");
// let btn_opMultiply = document.getElementById("opMultiply");
// let btn_opMinus = document.getElementById("opMinus");
// let btn_opPlus = document.getElementById("opPlus");
// let btn_opDec = document.getElementById("opDec");
// let btn_opEqual = document.getElementById("opEqual");


calc_btn.addEventListener("click", (e) => {
	let target = e.target;

	switch (target.textContent) {
		case '1':
			res = (res * 10) + +target.textContent;
			break;
	}
	displayEquation(res, num, op);
});

// Click listener for clear
clear.addEventListener("click", (e) => {
	res = 0;
	num = 0;
	op = '';
	displayEquation(res, num, op);
});

displayEquation(res, num, op);
