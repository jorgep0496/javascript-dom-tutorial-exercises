window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
	// your code here

	let select = document.querySelector("#mySelect");
    
	for (let elem of countries) {
		let option = document.createElement("option");
		option.innerHTML = elem;
		option.value = elem;
		select.appendChild(option);
	}
	select.addEventListener("change", e => {
		alert(e.target.value);
	});
};
