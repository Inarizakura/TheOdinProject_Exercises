function add7() {
	return +prompt() + 7;
}

function multiply() {
	return prompt() * prompt();
}

function capitalize() {
	let temp = prompt();
	return temp[0].toUpperCase() + temp.substring(1).toLowerCase();
}

function lastLetter() {
	let temp = prompt();
	let i = 0;
	while (temp[i + 1]) {
		i++;
	}
	return (temp[i]);
}

console.log(capitalize());
