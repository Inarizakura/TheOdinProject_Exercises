let gridSize = 16;
let measurement = 960 / 16;

let gridContainer = document.getElementById("gridContainer");

for (let i = 0; i < gridSize; i++) {
	let div = document.createElement("div");
	div.setAttribute("class", "row");
	gridContainer.appendChild(div);
	for (let j = 0; j < gridSize; j++) {
		let grid = document.createElement("div");
		grid.setAttribute("class", "grid");
		grid.style.height = measurement + "px";
		grid.style.width = measurement + "px";
		div.appendChild(grid);
	}
}

gridContainer.addEventListener("hover", (event) => {
	;
});
