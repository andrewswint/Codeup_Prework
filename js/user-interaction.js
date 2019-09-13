"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var name = ("");

while (name === "") {
	name = prompt("What is your name?");
}

// TODO: Show an alert message that welcomes the user based on their input.
alert("Nice to meet you " + name + "!");
// TODO: Ask the user if they like pizza.
var pizza = confirm("Do you like pizza?");
//       Based on their answer show a creative alert message.
if (pizza) {
	alert("Me too!");
} else {
	alert("Well you're missing out!");
}