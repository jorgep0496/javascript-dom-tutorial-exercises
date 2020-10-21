let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let div = document.createElement("div");
	div.innerHTML = "Hello World";
	document.body.appendChild(div);
	div.style.background = "yellow";
});
