import "./index.scss";

var $body = $(document);
var animationIsPlaying = true;
var numberOfWheels = 9;
var numberOfItems = document.querySelector(".siteMenu > ul").children.length;
var degreesStep = 360 / numberOfItems;

var wheels = [];
for (var i = 0; i < numberOfWheels; i++) {
	wheels[i] = document.querySelectorAll(".siteMenu__letter--" + i);
}

function startAnimation() {
	$body.removeClass("stop");
	animationIsPlaying = true;
}

function stopAnimation() {
	$body.removeClass("stop");
	animationIsPlaying = false;
}

function rotateToStartDeg(letter, offsetDeg) {
	letter.style.transform =
		"rotate(calc(var(--startDeg) + " + offsetDeg + "deg))";
}

function resetStyle(letters) {
	for (var i = 0; i < letters.length; i++) {
		var letter = letters[i];
		letter.style = "";
	}
}

function transitionToStartDeg(letter, offsetDeg) {
	var style = letter.style;
	style.transform = getComputedStyle(letter).transform;
	style.animationName = "none";

	setTimeout(function() {
		rotateToStartDeg(letter, offsetDeg);
	}, 100);
}

function rotateWheelsToStartDeg(offsetDeg) {
	for (var i = 0; i < numberOfWheels; i++) {
		var wheel = wheels[i];
		for (var j = 0; j < numberOfItems; j++) {
			var itemLetter = wheel[j]; //P, C, A, C
			if (!!itemLetter) {
				transitionToStartDeg(itemLetter, offsetDeg);
			}
		}
	}
}

function buttonsClickHandler(e) {
	var itemIndexToHighlight = e.target.getAttribute("data-index");

	if (itemIndexToHighlight > -1) {
		stopAnimation();
		var degrees = itemIndexToHighlight * degreesStep;
		rotateWheelsToStartDeg(degrees);
	} else {
		startAnimation();
		var allLetters = document.querySelectorAll(".siteMenu__letter");
		resetStyle(allLetters);
	}
}

$body.on("click", "button", buttonsClickHandler);
