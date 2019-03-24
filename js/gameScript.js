var amountTrueAnswer = 0;
var question = [];
var flexContainer = [];

var defaulInputClass = document.getElementById('firstFlexAttribute').className;
var defaultFlexElements = 'flexElement';

var namesContainers = ['firstFlexContainer', 'secondFlexContainer', 'thirdFlexContainer', 'fourthFlexContainer', 'fivethFlexContainer', 'sixthFlexContainer', 'seventhFlexContainer'];
var namesFlexDirection = ['Row', 'Column', 'Row-Reverse', 'Column-Reverse'];
var namesFlexWrap = ['Wrap', 'Nowrap', 'Wrap-Reverse'];
var namesFlexFlow = ['Column Wrap', 'Row Wrap-Reverse', 'Row-Reverse Nowrap', 'Column Wrap-Reverse', 'Column Nowrap', 'Row Wrap', 'Row Nowrap', 'Row-Reverse Wrap', 'Row-Reverse Wrap-Reverse', 'Column-Reverse Wrap', 'Column-Reverse Wrap-Reverse', 'Column-Reverse Nowrap'];
var namesFlexJustifyContent = ['Space-Between', 'Flex-End', 'Center', 'Flex-Start', 'Space-Evenly', 'Space-Around'];
var namesFlexAlignItems = ['Center', 'Flex-Start', 'Flex-End', 'Baseline', 'Stretch'];
var namesFlexAlignContent = ['Flex-End', 'Flex-Start', 'Space-Around', 'Center', 'Stretch', 'Space-Between', 'Space-Evenly'];


function scanContainer(amountQuestion) {
	for (var i = 0; i < amountQuestion; i++) {
		flexContainer[i] = document.getElementById(namesContainers[i]).className;
	}
}

function arr(amountQuestion) {
	for (var i = 0; i < amountQuestion; i++) {
		question[i] = 0;
	}
}

function sumAnswer(amountQuestion) {
	amountTrueAnswer = 0;
	for (var i = 0; i < amountQuestion; i++) {
		amountTrueAnswer += question[i];
	}
}

function colorElements(elements, color) {
	for (var i = 0; i < elements.length; i++) {
		elements[i].className = defaultFlexElements + color;
	}
}

function newName(name) {
 	name = name.replace(' ', '');
 	name = name.replace(/-/g, '');
	return name;
}

function game(id, type, idBlock, name, number, amountQuestion, names, defaulFlexGame) {
	id.oninput = function() {
		var inputElement = document.getElementById(this.id);
		var classElement = document.getElementById(idBlock);
		var elementsColor = classElement.getElementsByTagName('*');
		var att;
		question[number] = 0;
		inputElement.className = defaulInputClass;
		classElement.className = flexContainer[number];
		colorElements(elementsColor, ' flexElementFalse');
		for (var i = 0; i < names.length; i++) { 
			var newNames = newName(names[i]);
			if (inputElement.value === names[i].toLowerCase()) {
				classElement.className = defaulFlexGame + type + newNames;
				inputElement.className = defaulInputClass + ' falseAnswer';
			}
		}
		if (inputElement.value === name) {
			inputElement.className = defaulInputClass + ' trueAnswer';
			colorElements(elementsColor, ' flexElementTrue');
			question[number] = 1;
		}
		sumAnswer(amountQuestion);
		document.getElementById('result').innerHTML = 'Ваш результат: ' + amountTrueAnswer + ' из ' + amountQuestion +'.';
	} 
}
