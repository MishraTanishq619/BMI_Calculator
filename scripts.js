var form = document.querySelector("form");

var ans;
var r = `Your BMI is : `;
var r2 = `<br />So you are in `;

function cat(i) {
	if (i < 18.6) {
		return "Underweighted";
	} else if (i > 24.9) {
		return "Overweighted";
	} else {
		return "Normal";
	}
}

form.addEventListener("submit", (dets) => {
	dets.preventDefault();
	// console.log(dets.target[0].value);

	const h = Number(document.getElementById("heightin").value);
	console.log(h);

	const w = Number(document.getElementById("weightin").value);
	console.log(w);

	if (isNaN(h) || isNaN(w)) {
		document.getElementById(
			"output"
		).innerHTML = `Invalid Input <br/>Provided Inputs are not Numbers.`;
	} else {
		ans = ((w / h / h) * 100 * 100).toFixed(2);

		document.getElementById("output").innerHTML =
			r + ans + r2 + cat(ans) + ` category`;
	}
});
