console.log("JS file is connected to HTML! Woo!")

var cardOne="queen"
var cardTwo="queen"
var cardThree="king"
var cardFour="king"
var message;

/*if (cardTwo === cardFour) {
	alert("You found a match!");
}
	else if (cardOne === cardTwo) {
		alert("You found a match!");
	}
    else if (cardOne === cardThree) {
		alert("You found a match!");
	}
    else if (cardOne === cardFour) {
		alert("You found a match!");
	}
	else alert("Sorry try again.");
	*/


var board = document.getElementById('game-board');


function createCards(num) {
	for (var x=0; x < num; x++) {
		var cardElement = document.createElement('div');
		cardElement.className = "card";
		board.appendChild(cardElement);
	}
}

createCards(4);