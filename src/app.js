// Use # for id name and . for class name

var DOMstrings = {
	inputMessage: '#message',
	inputBtn: '#submitBtn',
	outputVal: '.displayMessage',
};

document.querySelector(DOMstrings.inputBtn).addEventListener('click', printMessage);

document.addEventListener('keypress', function (event) {
	if (event.keyCode === 13 || event.which === 13) {
		printMessage();
	}
});

function printMessage() {
	event.preventDefault();
	var x = document.querySelector(DOMstrings.inputMessage).value;
	document.querySelector(DOMstrings.outputVal).textContent = x;
}
