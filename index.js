import "./index.scss";

var documentElement = document.documentElement;

function toggleAnimation() {
	documentElement.classList.toggle("stop");
}

function transformTo0(letters) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		letter.style.transform = "rotate(0deg)";
	}
}

function transitionTo0(letters) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		letter.style.transform = getComputedStyle(letter).transform;
		letter.style.animationName = "none";
	}
	setTimeout(function() {
		transformTo0(letters);
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
