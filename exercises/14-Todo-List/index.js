// Your code here
let atd = document.querySelector("#addToDo");
let list = document.querySelector("ul");

atd.addEventListener("blur", event => {
	let li = document.createElement("li");
	let span = document.createElement("span");
	let i = document.createElement("i");

	i.classList.add("fa");
	i.classList.add("fa-trash");
	let text = document.createTextNode(" " + event.target.value);
	span.appendChild(i);
	li.appendChild(span);
	li.appendChild(text);
	li.addEventListener("click", event => {
		list.removeChild(event.target.parentNode.parentNode);
	});
	list.appendChild(li);
});

let trash = document.querySelectorAll(".fa-trash");

for (let elem of trash) {
	elem.addEventListener("click", event => {
		list.removeChild(event.target.parentNode.parentNode);
	});
}
