const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.toggle("content");
content.textContent = "This is the glorious text-content!";


const p = document.createElement("p");
p.setAttribute("style", "color: red;");
p.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.setAttribute("style", "color: blue;");
h3.textContent = "I'm a blue h3!";

const div = document.createElement("div");
div.setAttribute("style", "border-style: solid; border-color: black; background-color: pink;");
div.classList.toggle("pink-container");

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

const button = document.createElement("button");
button.textContent = "CLICK ME!";

button.addEventListener("click", function (e) {
	console.log(e.target);
	e.target.style.background = "blue";
});

container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
div.appendChild(h1);
div.appendChild(p2);
div.appendChild(button);
