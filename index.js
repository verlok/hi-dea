import "./index.scss";

var documentElement = document.documentElement;

function toggleAnimation() {
	documentElement.classList.toggle("stop");
}

function transformToStart(letters) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		var startDeg = letter.style.getPropertyValue("--startDeg");
		letter.style.transform = "rotate(0deg)";
	}
}

function transitionTo0(letters) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		var style = letter.style;
		style.transform = getComputedStyle(letter).transform;
		style.animationName = "none";
		//letter.style.transform = "rotate(0deg)"; --> needs to be pushed back in time
	}
	setTimeout(function() {
		transformToStart(letters);
	}, 100);
}

function resetStyle(letters) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		letter.style = "";
	}
}

document.querySelector("button").addEventListener("click", function(e) {
	var letters = document.querySelectorAll(
		".siteMenu__item .siteMenu__item__letter"
	);

	if (!documentElement.classList.contains("stop")) {
		toggleAnimation();
		transitionTo0(letters);
	} else {
		toggleAnimation();
		resetStyle(letters);
	}
});
