import "./index.scss";

var $body = $(document);
var animationIsStarted = true;
var numberOfWheels = 9;
var numberOfItems = document.querySelector(".siteMenu > ul").children.length;
var degreesStep = 360 / numberOfItems;

var wheels = [];
for (var i = 0; i < numberOfWheels; i++) {
	wheels[i] = document.querySelectorAll(".siteMenu__letter--" + i);
}

function startAnimation() {
	$body.removeClass("stop");
	animationIsStarted = true;
}

function stopAnimation() {
	$body.removeClass("stop");
	animationIsStarted = false;
}

function rotateTo(letter, degrees) {
	letter.style.transform = "rotate(" + degrees + "deg)";
}

function transitionTo(letter, degrees) {
	var style = letter.style;
	style.transform = getComputedStyle(letter).transform;
	style.animationName = "none";

	setTimeout(function() {
		rotateTo(letter, degrees);
	}, 100);
}

function resetStyle(letters) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		letter.style = "";
	}
}

function rotateWheelsTo(degrees) {
	for (var i = 0; i < numberOfWheels; i++) {
		var wheel = wheels[i];
		for (var j = 0; j < numberOfItems; j++) {
			var itemLetter = wheel[j]; //P, C, A, C
			if (!!itemLetter) {
				transitionTo(itemLetter, degrees - j * degreesStep);
			}
		}
	}
}

function buttonsClickHandler(e) {
	// Cases
	// portfolio clicked --> rotate all wheels to 0
	// clients clicked --> rotate all wheels to -90
	var itemIndexToHighlight, degrees;

	if (animationIsStarted) {
		stopAnimation();
		itemIndexToHighlight = e.target.getAttribute("data-index");
		degrees = -itemIndexToHighlight * degreesStep;
		rotateWheelsTo(degrees);
	} else {
		startAnimation();
		var allLetters = document.querySelectorAll("menuItem__letter");
		resetStyle(allLetters);
	}
}

$body.on("click", "button", buttonsClickHandler);
