import "./index.scss";

var $body = $("body");
var animationIsStarted = true;

function startAnimation() {
	$body.removeClass("stop");
	animationIsStarted = true;
}

function stopAnimation() {
	$body.removeClass("stop");
	animationIsStarted = false;
}

function rotateTo(letters, degrees) {
	//debugger;
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		letter.style.transform = "rotate(" + degrees + "deg)";
	}
}

function transitionTo(letters, degrees) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		var style = letter.style;
		style.transform = getComputedStyle(letter).transform;
		style.animationName = "none";
		//letter.style.transform = "rotate(0deg)"; --> needs to be pushed back in time
	}
	setTimeout(function() {
		rotateTo(letters, degrees);
	}, 100);
}

function resetStyle(letters) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		letter.style = "";
	}
}

var degreesDictionary = {
	portfolio: 0,
	contact: 45
};

function buttonsClickHandler() {
	var itemToHighlight = this.getAttribute("data-item");
	var degrees = degreesDictionary[itemToHighlight];
	var letters = document.querySelectorAll(
		".siteMenu__item--" + itemToHighlight + " > .siteMenu__letter"
	);

	if (animationIsStarted) {
		stopAnimation();
		transitionTo(letters, degrees);
	} else {
		startAnimation();
		resetStyle(letters);
	}
}

$(document).on("click", "button", buttonsClickHandler);
