let gridSize = 16;
let colors = ["black", "white", "#FAEDCB", "#C9E4DE", "#C6DEF1", "#DBCDF0", "#F2C6DE", "#F7D9C4"];
let color = colors[0];
let measurement = 960 / gridSize;

let gridContainer = document.getElementById("gridContainer");

// Grid Rendering Function
function renderGrid() {
	gridContainer.innerHTML = "";
	gridContainer.style.background = "white";
	for (let i = 0; i < gridSize; i++) {
		let div = document.createElement("div");
		div.setAttribute("class", "row");
		gridContainer.appendChild(div);
		for (let j = 0; j < gridSize; j++) {
			let grid = document.createElement("div");
			grid.setAttribute("class", "grid");
			grid.style.height = measurement + "px";
			grid.style.width = measurement + "px";
			grid.style.opacity = 0.0;
			div.appendChild(grid);
		}
	}
}

// Color Palette Rendering Function
let colorPalette = document.getElementById("colorPalette");
for (let i = 0; i < 8; i++) {
	let palette = document.createElement("div");
	palette.style.background = colors[i];
	palette.setAttribute("id", "color" + i);
	palette.style.height = "30px";
	palette.style.width = "30px";
	colorPalette.appendChild(palette);
}

// Event Listeners
// Drawing on grid
gridContainer.addEventListener("mouseover", (e) => {
	e.target.style.background = color;
	if (e.target.style.opacity < 1) {
		e.target.style.opacity = +e.target.style.opacity + 0.1;
	}
});

// Re-rendering Grid based on new size
let getGridSize = document.getElementById("chgGridSize");
let draw = document.getElementById("draw");
let erase = document.getElementById("erase");

getGridSize.addEventListener("click", (e) => {
	do {
		gridSize = parseInt(prompt("Please enter desired grid size of 1 to 100.", "16"));
	} while (!(gridSize > 0 && gridSize <= 100));
	renderGrid();
});

// Changing Color based on selection of the palette
colorPalette.addEventListener("click", (e) => {
	let target = e.target;

	switch(target.id) {
		case "color0":
			color = colors[0];
			break;
		case "color1":
			color = colors[1];
			break;
		case "color2":
			color = colors[2];
			break;
		case "color3":
			color = colors[3];
			break;
		case "color4":
			color = colors[4];
			break;
		case "color5":
			color = colors[5];
			break;
		case "color6":
			color = colors[6];
			break;
		case "color7":
			color = colors[7];
	}
});

renderGrid();


